import Image from 'next/image'
import React from 'react'

const page = ({ params }) => {
    return (
        <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Image />
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 smpx-6 border border-black shadow-[-7px_7px_0px_#000000]' >Get Started</button>

                </div>
                <h1> {params.id}</h1>
            </div>
        </>
    )
}

export default page