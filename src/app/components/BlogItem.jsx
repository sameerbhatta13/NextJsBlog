'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'

const BlogItem = ({ id, image, description, category, title }) => {
    // const heading =
    return (
        <div className="max-w-[350px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]
                        bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]
                        transition-all duration-300 rounded-lg overflow-hidden">

            <div className="w-full h-auto">
                <Link href={`/blogs/${id}`}>
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={300}
                        className="w-96 h-96 sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
                    />
                </Link>
            </div>


            <p className="ml-5 mt-5 px-2 py-1 inline-block bg-black text-white text-xs uppercase tracking-wide">
                {category}
            </p>


            <div className="p-5">
                <h5 className="mb-2 text-lg font-semibold text-gray-900">{title}</h5>

                <div dangerouslySetInnerHTML={{ __html: description.length > 300 ? description?.slice(0, 100) + '...' : description }}></div>

                <Link href={`/blogs/${id}`} className="mt-2 inline-flex items-center px-4 py-2 text-sm font-semibold
                 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogItem
