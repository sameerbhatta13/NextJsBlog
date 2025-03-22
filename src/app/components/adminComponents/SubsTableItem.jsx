import React from 'react'
import { MdDelete } from "react-icons/md";

const SubsTableItem = ({ email, date, deleteEmail, mongoId }) => {
    const emailDate = new Date(date)
    console.log(emailDate)
    return (
        <tr className='bg-white border-b text-left'>
            <th scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>
                {email ? email : 'no email'}
            </th>
            <td className='px-6 py-4'>{emailDate.toDateString()}</td>
            <td onClick={() => deleteEmail(mongoId)} className='px-6 py-4'>  <MdDelete size={20} /></td>
        </tr>
    )
}

export default SubsTableItem