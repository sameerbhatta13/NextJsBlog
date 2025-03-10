import Image from 'next/image'
import React from 'react'

const BlogItem = () => {
    return (
        <>
            <div className='max-w-[330px] ml-4 sm:max-w-0[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>

                <Image src='/moon.jpg' alt=''
                    width={400} height={400} className='border-b border-black' />
                <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>Lorem ipsum,</p>
                <div className='p-5'>
                    <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
                    <p className='mb-3 text-sm tracking-tight text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quae fugiat cum beatae excepturi pariatur cumque dolorem culpa atque minima! Eius voluptatibus optio dicta facere quibusdam odit, officia esse maxime?</p>
                    <div className='inline-flex items-center py-2 font-semibold text-center'>
                        Read More
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogItem