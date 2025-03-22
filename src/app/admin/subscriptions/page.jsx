'use client'
import SubsTableItem from '@/app/components/adminComponents/SubsTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const [emails, setEmails] = useState([])

    const fetchEmail = async () => {
        const response = await axios.get('/api/email')
        setEmails(response.data.emails)
    }

    const deleteEmial = async (mongoId) => {
        const response = await axios.delete('/api/email', {
            params: {
                id: mongoId
            }
        })
        if (response.data.success) {
            toast.success(response.data.msg)
            fetchEmail()
        }
        else {
            toast.error('error')
        }

    }

    useEffect(() => {
        fetchEmail()
    }, [])
    return (
        <>
            <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
                <h1>All Subscription</h1>
                <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scroll-m-0 '>
                    <table className='w-full text-sm text-gray-500'>
                        <thead className='text-xs text-left'>
                            <tr>
                                <th scope='col' className='px-6 p-3'>
                                    Email Subscription
                                </th>
                                <th scope='col' className='px-6 p-3'>
                                    Date
                                </th>
                                <th scope='col' className='px-6 p-3'>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                emails.map((item, index) => {
                                    return <SubsTableItem key={index} mongoId={item._id} date={item.date} email={item.email} deleteEmail={deleteEmial} />

                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}

export default page