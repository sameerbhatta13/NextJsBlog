'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { TbFileUpload } from "react-icons/tb";

const page = () => {
    const [image, setImage] = useState(null)
    const [data, setData] = useState({
        title: '',
        description: '',
        category: "StartUp",
        author: "sameer",
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
        console.log(data)
    }
    return (
        <>
            <form className='pt-5  px-5 md:pt-12 md:pl-16'>
                <div className='flex flex-col gap-2'>

                    <label htmlFor="">upload image</label>
                    <Image src={<TbFileUpload />} alt='' />
                    {
                        image ? <img src={URL.createObjectURL(image)} alt="" /> :
                            <input type="file" id='image' required onChange={(e) => setImage(e.target.files[0])} />
                    }
                    <p className='text-xl '>Add Title</p>
                    <input name='title' onChange={onChangeHandler} value={data.title} type="text" placeholder='Enter The tile' className='w-full sm:w-[500px] py-3 border' />
                    <p className='text-xl '>Description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" placeholder='Enter The tile' className='w-full sm:w-[500px] py-3 border' rows={6} cols={7} />
                    <p className='text-xl'>Category</p>
                    <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 px-4 border text-gray-500 p-2'>
                        <option value="">StartUp</option>
                        <option value="">Technology</option>
                        <option value="">Lifestyle</option>
                    </select>
                    <button type='submit' className=' mt-4 w-40 h-12 bg-black text-white'>Add</button>
                </div>
            </form>
        </>
    )
}

export default page