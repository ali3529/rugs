import React, { useContext, useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'
import AuthContext from '@/context/AuthContext'
function SubmitedContact() {
    const [contactData, setcontactData] = useState([]);
    const contact = useQuery('contact', async () => axios.get('/api/contact_us'), {
        onSuccess: (res) => {
            console.log("ascvsa", res);
            setcontactData(res.data.data)
        }
    });


    const authContext = useContext(AuthContext)
    const { isAuth, userData, authDispatch } = authContext;

    return (
        <>
        {isAuth && userData?.data?.id==13?<div>
            <p className='font-bold text-2xl mt-5'>Submited Contact</p>
            {contactData.map(contact =>
                <div className='p-4 shadow-md rounded-md flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-lg' >{contact.name}</span>
                        <span className='text-gray-700'>{contact.text}</span>
                        <span className='text-gray-700'>{contact.phone}</span>
                    </div>
                    <div className='flex flex-col justify-end text-gray-500 text-sm'>
                        <span>{contact.date}</span>
                    </div>
                </div>)}
        </div>
    
        :''
        }
            </>
    )
}

export default SubmitedContact