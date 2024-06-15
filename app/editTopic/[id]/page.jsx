import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    try {
        const res = await fetch(`${apiBaseUrl}/api/topics/${id}`, { cache: 'no-store' });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return await res.json();
    } catch (error) {
        console.log(error);
        return null; // Return null or appropriate fallback
    }
}

export default async function EditTopic({ params }) {
    const { id } = params;
    const topic = await getTopicById(id);

    if (!topic) {
        return (
            <div>
                <p>Failed to load topic. Please try again later.</p>
            </div>
        );
    }

    const { title, description } = topic;

    console.log(id);
    return (
        <div>
            <EditTopicForm id={id} title={title} description={description} />
        </div>
    );
}
