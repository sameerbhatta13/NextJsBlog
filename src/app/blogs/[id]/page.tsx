'use client'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

const page = () => {
    const { id } = useParams(); // ✅ Get ID from URL
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogData = async () => {
            if (!id) return;
            try {
                const response = await axios.get(`/api/blog/${id}`);
                setData(response.data.blog);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    // if (!data) return <p>Blog not found</p>;

    return (
        <>
            <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
                <div className="text-center my-24">
                    {loading ? (
                        <Skeleton height={50} width="60%" className="mx-auto" />
                    ) : (
                        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data?.title}</h1>
                    )}
                    {loading ? (
                        <Skeleton height={20} width="30%" className="mx-auto mt-2" />
                    ) : (
                        <p className="mt-1 pb-2 text-lg max-w-[700px] mx-auto">{data?.author_name}</p>
                    )}
                </div>
                <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center">
                        <img
                            src={data.image}
                            alt="Blog Image"
                            className=" w-64 h-56 rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
                    <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                </div>
            </div>
        </>
    )
}

export default page