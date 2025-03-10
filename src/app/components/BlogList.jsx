import Link from 'next/link'
import React from 'react'

const BlogList = () => {
    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <Link href={''}> <button className='bg-black text-white textwhite py-1 px-4 rounded-sm'>All</button></Link>
                <button>Technology</button>
                <button>Startup</button>
                <button>Lifestyle</button>
            </div>

            <div className='flex flex-wrap justify-around gap-y-10 gap-1 mb-16 xl:mx-24'>
            </div>
        </div>
    )
}

export default BlogList