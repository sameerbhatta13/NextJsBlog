import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <Image src='/moon.jpg' width={120} height={120} />
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'></div>

        </div>
    )
}

export default Sidebar