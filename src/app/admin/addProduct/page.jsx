'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useCallback, useState } from 'react'
import { TbFileUpload } from "react-icons/tb";
import { toast } from 'react-toastify';

const Page = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [data, setData] = useState({
        title: '',
        description: '',
        category: "StartUp",
        author: "sameer",
    })
    // console.log("image", image)

    const onImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file)
            setPreview(URL.createObjectURL(file))

        }
    }
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if (!data.title && !data.description && !data.category) {
            toast.error('All field are required')
            return
        }
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('description', data.description)
        formData.append('category', data.category)
        formData.append('author', data.author)
        formData.append('image', image)

        try {
            const response = await axios.post('/api/blog', formData)
            console.log("response", response)
            if (response?.statusText == 'OK') {
                toast.success(response?.data?.msg)
                setImage(false)
                setData({
                    title: '',
                    description: '',
                    category: "StartUp",
                    author: "sameer",
                })
            }
            else {
                toast.error('unable to add data')
            }

        } catch (error) {

        }


    }
    return (
        <>
            <form onSubmit={onSubmitHandler} className='pt-5  px-5 md:pt-12 md:pl-16'>
                <div className='flex flex-col gap-2'>

                    <label >Upload Image</label>

                    {
                        image ? (
                            typeof window !== 'undefined' && (
                                <Image

                                    src={preview}
                                    alt="Uploaded file preview"
                                    width={176}
                                    height={128}
                                    className="w-44 h-32 object-cover rounded-lg"
                                />)) :
                            <input type="file" id='image' alt='image' required onChange={onImageChange} className="flex flex-col items-center text-gray-500" />
                    }
                    <p className='text-xl '>Add Title</p>
                    <input name='title' onChange={onChangeHandler} value={data.title} type="text" placeholder='Enter The tile' className='w-full sm:w-[500px] py-3 border px-3 ' />
                    <p className='text-xl '>Description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" placeholder='Enter The tile' className='w-full sm:w-[500px] py-3 px-3 border' rows={6} cols={7} />
                    <p className='text-xl'>Category</p>
                    <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 px-4 border text-gray-500 p-2'>
                        <option value="startup">StartUp</option>
                        <option value="technology">Technology</option>
                        <option value="lifestyle">Lifestyle</option>
                    </select>
                    <button type='submit' className=' mt-4 w-40 h-12 bg-black text-white rounded-lg'>Add</button>
                </div>
            </form>
        </>
    )
}

export default Page