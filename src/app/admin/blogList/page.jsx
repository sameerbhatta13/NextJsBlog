'use client'
import BlogTableItem from '@/app/components/adminComponents/BlogTableItem'
import React, { useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

const page = () => {


    return (
        <>
            <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
                <h1>All Blogs</h1>
                <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
                    <table className='w-full text-sm text-gray-500'>
                        <thead className='text-sm text-gray-50 text-left uppercase bg-gray-50'>
                            <tr>
                                <th className='hidden sm:block px-6 py-3'>
                                    Author Name
                                </th>
                                <th className=' px-6 py-3'>
                                    Blog Title
                                </th>
                                <th className=' px-6 py-3'>
                                    Date
                                </th>
                                <th className=' px-6 py-3'>
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <BlogTableItem />

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default page