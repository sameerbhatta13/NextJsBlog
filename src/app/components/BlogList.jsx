'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
    const [menu, setMenu] = useState("All")
    const [blog, setBlog] = useState([])
    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog')
        setBlog(response.data.blogs)
        console.log(response.data.blogs)
    }

    useEffect(() => {
        fetchBlogs()
    }, [])
    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu('All')} className={menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>All</button>
                <button onClick={() => setMenu('technology')} className={menu === 'technology' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Technology</button>
                <button onClick={() => setMenu('StartUp')} className={menu === 'StartUp' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Startup</button>
                <button onClick={() => setMenu('lifestyle')} className={menu === 'lifestyle' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Lifestyle</button>
            </div>

            <div className='flex flex-wrap justify-around gap-y-10 gap-1 mb-16 xl:mx-24'>
                {
                    blog.filter((item) => menu === 'All' ? true : item.category === menu).map((item, index) => {
                        return <BlogItem key={index} id={item._id} image={item.image} description={item.description} category={item.category} title={item.title} />
                    })
                }
            </div>
        </div>
    )
}

export default BlogList