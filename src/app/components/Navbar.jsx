"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const Navbar = () => {
    const [] = useState()

    return (

        <>
            <div className='py-5 px-6 mx-20 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Image src='/moon-removebg-preview.png' width={50} height={50} alt='logo' className='w-[130px] sm:w-auto bg-transparent' />

                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded-lg shadow-[-6px_9px_1px_#000000]'>Get Started</button>
                </div>

                <div className='text-center my-8'>
                    <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
                    <p className='mt-10 max-w-[740px] m-auto text-xl sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque aliquam vitae at, id natus delectus rem maxime officiis consequuntur? Voluptate aspernatur nobis cupiditate? Fugit nulla dicta voluptatum autem nam?</p>
                    <form action="" className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-6px_9px_1px_#000000]'>
                        <input type="email" placeholder='enter the email' className='pl-4 outline-none' />
                        <button className='font-bold border-l-2 rounded-2xl border-black  py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
                    </form>
                </div>

            </div>


        </>
    )
}

export default Navbar