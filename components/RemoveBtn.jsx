'use client';
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation';
export default async function Removebtn({id}) {

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const router = useRouter();
    const removeTopic = async()=>{
        const confirmed = confirm('Are you sure?');

        if(confirmed){
            const res = await fetch(`${apiBaseUrl}/api/topics?id=${id}`,{
                method:"DELETE",

            });
            if(res.ok)
                {

                    router.refresh();
                }
        }
    }
  return (
    <button  onClick={removeTopic} className='text-red-400'>
        <HiOutlineTrash size={24}/>
    </button>
  )
}
