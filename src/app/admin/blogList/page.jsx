'use client'
import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const page = () => {
    const [checked, setChecked] = useState(false)
    const handelChange = () => {
        setChecked(!checked)
    }
    return (
        <>
            <div className='px-4 py-3'>
                <label htmlFor="">
                    <input type="checkbox" onChange={handelChange} checked={checked} /> Loding....
                </label>
                <div>
                    {
                        checked ? (
                            <Skeleton count={4} baseColor='green' width={400} height={10} borderRadius={5} duration={1.4} />
                        ) : (
                            <p>nothing to show, is loading.....</p>
                        )
                    }
                </div>
            </div>

            {/* <h1>here is the list </h1> */}
        </>
    )
}

export default page