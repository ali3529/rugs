import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import Input from '@/components/Elements/Input'
import Button from '@/components/Elements/Button'
import AddressForm from '../Elements/AddressForm'
import { useQuery, useMutation } from 'react-query'
import { authUser } from '@/hooks/authUser'
function Payments() {
    const { getPayment,getOrders } = authUser()
    const [orders, setorders] = useState([])


    const payment = useQuery('payment', async () => getPayment(), {
        onSuccess: (res) => {
            console.log("luilsdascascvudscil", res);
            //  setorders(res.data.data)

        },
        onError: (err) => console.log("luiludscil", err)
    });


    return (
        <div>

            
            <div>
             
                <div className='grid grid-cols-1 sm:grid-rows-1 '>
                    {
                        orders.map((order, index) =>
                            <div className={`ring-1 ring-gray-300 rounded-lg m-3 p-3 `}>
                                {
                                
                                        
                                        <div className='space-y-4'>
                                            <div className='flex flex-row justify-between  space-x-6'>
                                                <label className='text-gray-800'>Title :</label>
                                                <span >{order.shipping_title}</span>
                                                {/* <span >{address.address1.map(adress=>adress+'\n')}</span> */}
                                            </div>
                                            <div className='flex flex-row justify-between   space-x-6'>
                                                <label className='text-gray-800'>Email :</label>
                                                <p>{order.customer_email}</p>
                                            </div>
                                            <div className='flex flex-row justify-between   space-x-6'>
                                                <label className='text-gray-800'>Name :</label>
                                                <p>{order.customer_first_name}</p>
                                            </div>
                                            <div className='flex flex-row justify-between   space-x-6'>
                                                <label className='text-gray-800'>Status :</label>
                                                <p>{order.status}</p>
                                            </div>
                                            <div className='flex flex-row justify-between  space-x-6'>
                                                <label className='text-gray-800'>Amount :</label>
                                                <p>{order.formated_grand_total}</p>
                                            </div>

                                        </div>

                                }
                              


                            </div>
                        )
                    }

                </div>
                {
                    orders.length != 0 ? '' :
                        <p className="my-6 text-sm bg-blue-200 text-blue-800 p-3 rounded-lg">
                            no prosses order have been found  for your account
                        </p>
                }
            </div>
        </div>
    )
}

export default Payments

