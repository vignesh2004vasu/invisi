import React from 'react'
import Removebtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'

const getTopics = async () => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  
    try {
      const res = await fetch(`${apiBaseUrl}/api/topics`, { cache: 'no-store' });
  
      if (!res.ok) {
        throw new Error('Failed to fetch topics');
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error loading topics:', error);
      return { topics: [] };
    }
  };

export default async function TopicsList() {

    const {topics} = await getTopics();

  return (
    <>
  {topics.map((t) => (
    <div
      key={t._id} 
      className="p-4 border-slate-300 my-3 flex justify-between gap-5 items-start"
    >
      <div>
        <h2 className="font-bold text-2xl">{t.title}</h2>
        <div>{t.description}</div>
        <div className="flex gap-2">
          <Removebtn id={t._id} />
          <Link href={`/editTopic/${t._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </div>
  ))}
</>
  )
}
