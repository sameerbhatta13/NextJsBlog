import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex justify-around flex-col gap-2 py-4 sm:gap-0 sm:flex-row bg-gray-600'>
                <Image src='/moon-removebg-preview.png' alt='footer img' width={50} height={50} />
                <p className='text-sm text-white'>All right reserved. Copyright @Moon</p>

            </div>

        </>
    )
}

export default Footer