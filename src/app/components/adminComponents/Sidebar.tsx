import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 '>
                <Image src='/moon-removebg-preview.png' width={120} height={120} />
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 bg-slate-800 flex flex-col gap-1 text-white'>
                <Link href='/admin/addProduct' className='ml-40 my-2 font-bold'>Add News</Link>
                <Link href='/admin/subscriptions' className='ml-40 my-3 font-bold'>Subscription</Link>
                <Link href='/admin/blogList' className='ml-40 my-4 font-bold'>View List</Link>
            </div>
        </div>
    )
}

export default Sidebar