'use client'
import BlogTableItem from '@/app/components/adminComponents/BlogTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { toast } from 'react-toastify'

const page = () => {

    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog')
        setBlogs(response?.data?.blogs)
    }
    const deleteBlogs = async (mongoId) => {
        const response = await axios.delete('/api/blog', {
            params: {
                id: mongoId
            }
        })
        toast.success(response.data.msg)
        fetchBlogs()
    }

    useEffect(() => {
        fetchBlogs()
    }, [])
    return (
        <>
            <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
                <h1>All Blogs</h1>
                <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide '>
                    <table className='w-full text-sm '>
                        <thead className='text-sm text-left uppercase'>
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
                            {
                                blogs.map((item, index) => {
                                    return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author_name} date={item.createdAt} deleteBlogs={deleteBlogs} />
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default page