import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (
        <>
            <div className='bg-gray-400 flex flex-row mx-20 py-2 gap-6'>
                <div className='flex '>
                    <Link href='' className='mx-2'>LOGO</Link>
                </div>

                <div className='flex justify-evenly'>
                    <div>
                        <Link href='' className='mx-2'>login</Link>
                        <Link href='' className='mx-2'>signup</Link>
                        <Link href='' className='mx-2'>profile</Link>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Navbar