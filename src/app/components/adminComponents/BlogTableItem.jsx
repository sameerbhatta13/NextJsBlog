import Image from 'next/image'
import React from 'react'
import { MdDelete } from "react-icons/md";
const BlogTableItem = ({ author, title, date, deleteBlogs, mongoId }) => {
    const newDate = date.split('T')[0]
    console.log(newDate)
    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-4 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-normal'>
                {author}
            </th>
            <td className='px-6 py-4'>
                {title ? title : 'no title'}
            </td>
            <td className='px-6 py-4'>
                {newDate}
            </td>
            <td onClick={() => deleteBlogs(mongoId)} className='px-6 py-4'>
                <MdDelete size={20} />
            </td>
        </tr>

    )
}

export default BlogTableItem