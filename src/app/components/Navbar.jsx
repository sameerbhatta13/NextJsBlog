"use client"
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Navbar = () => {
    const [email, setEmail] = useState('')
    // console.log(email)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('email', email)
        console.log(formData)
        try {
            const response = await axios.post('/api/email', formData)
            console.log(response)

            if (response?.data?.success) {
                toast.success(response.data.msg)
                setEmail('')
            }
            else {
                toast.success('error')
            }
        } catch (error) {

        }

    }

    return (

        <>
            <div className='py-5 px-6 mx-20 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Image src='/moon-removebg-preview.png' width={50} height={50} alt='logo' className='w-[130px] sm:w-auto bg-transparent' />

                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded-lg shadow-[-6px_9px_1px_#000000]'>Get Started</button>
                </div>

                <div className='text-center my-8'>
                    <h1 className='text-3xl sm:text-5xl font-medium'>Latest News</h1>
                    <p className='mt-10 max-w-[740px] m-auto text-xl sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque aliquam vitae at, id natus delectus rem maxime officiis consequuntur? Voluptate aspernatur nobis cupiditate? Fugit nulla dicta voluptatum autem nam?</p>
                    <form action="" onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-6px_9px_1px_#000000]'>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='enter the email' className='pl-4 outline-none' />
                        <button type='submit' className='font-bold border-l-2 rounded-2xl border-black  py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Navbar