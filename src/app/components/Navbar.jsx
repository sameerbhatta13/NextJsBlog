"use client"
import Link from 'next/link'
import React, { useState } from 'react'


const Navbar = () => {
    const [] = useState()

    return (

        <>

            <div className='bg-gray-100' >
                <div className='bg-[#B6AAA2] flex flex-row justify-between mx-20 py-5 mt-1 gap-6 font-serif text-xl'>
                    <div className='flex '>
                        <Link href='' className='mx-2'>LOGO</Link>
                    </div>

                    <div className='flex gap-6 mx-9'>
                        <div>
                            <Link href='' className='mx-2'>login</Link>
                            <Link href='' className='mx-2'>signup</Link>
                            <Link href='' className='mx-2'>profile</Link>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar