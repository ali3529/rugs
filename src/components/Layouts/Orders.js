import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import Input from '@/components/Elements/Input'
import Button from '@/components/Elements/Button'
import AddressForm from '../Elements/AddressForm'
import { useQuery, useMutation } from 'react-query'
import { authUser } from '@/hooks/authUser'
function Orders() {
    const { getOrders } = authUser()
    const [orders, setorders] = useState([])


    const ordersss = useQuery('orders', async () => getOrders(), {
        onSuccess: (res) => {
            console.log("luiludscil", res);
            setorders(res.data.data)

        },
        onError: (err) => console.log("luiludscil", err)
    });


    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="w-full overflow-scroll divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Sub Total
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Order Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Shipped To
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {orders.map(person => (
                                    <tr key={person.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{person.id}</div>
                                      
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                              
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{person.formated_sub_total}</div>
                                                    <div className="text-sm text-gray-500">{person.shipping_description}</div>
                                                    {/* <div className="text-sm text-gray-500">{person.created_at}</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{person.created_at}</div>
                                         
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5
                        font-semibold rounded-full  ${person.status==='processing'?'bg-green-500':'bg-yellow-300'}`}
                                            >
                                                   <div className={`text-sm text-gray-900 p-1 `}>{person.status}</div>
                                       
                                           
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            
                                              <div className="ml-4">
                                                    <div className="text-sm text-gray-500">{person.shipping_address.first_name} {person.shipping_address.last_name}</div>
                                                    <div className="text-sm text-gray-500">{person.shipping_address.address1[0]}</div>
                                                    {/* <div className="text-sm text-gray-500">{person.shipping_description}</div> */}
                                                    {/* <div className="text-sm text-gray-500">{person.created_at}</div> */}
                                                </div>
                                        </td>
                                       
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        // <div>


        //     <div>

        //         <div className='grid grid-cols-1 sm:grid-rows-1 '>
        //             {
        //                 orders.map((order, index) =>
        //                     <div className={`ring-1 ring-gray-300 rounded-lg m-3 p-3 `}>
        //                         {


        //                             <div className='space-y-4'>
        //                                 <div className='flex flex-row justify-between  space-x-6'>
        //                                     <label className='text-gray-800'>Title :</label>
        //                                     <span >{order.shipping_title}</span>
        //                                     {/* <span >{address.address1.map(adress=>adress+'\n')}</span> */}
        //                                 </div>
        //                                 <div className='flex flex-row justify-between   space-x-6'>
        //                                     <label className='text-gray-800'>Email :</label>
        //                                     <p>{order.customer_email}</p>
        //                                 </div>
        //                                 <div className='flex flex-row justify-between   space-x-6'>
        //                                     <label className='text-gray-800'>Name :</label>
        //                                     <p>{order.customer_first_name}</p>
        //                                 </div>
        //                                 <div className='flex flex-row justify-between   space-x-6'>
        //                                     <label className='text-gray-800'>Status :</label>
        //                                     <p>{order.status}</p>
        //                                 </div>
        //                                 <div className='flex flex-row justify-between  space-x-6'>
        //                                     <label className='text-gray-800'>Amount :</label>
        //                                     <p>{order.formated_grand_total}</p>
        //                                 </div>

        //                             </div>

        //                         }



        //                     </div>
        //                 )
        //             }

        //         </div>

        //         <div className='w-full '>
        //             <table className='w-full flex-row '>
        //                 <tr>
        //                     <th>ID</th>
        //                     <th>Sub Total</th>
        //                     <th>Grand Total</th>
        //                     <th>Order Date</th>
        //                     <th>Status</th>
        //                     <th>Status</th>
        //                     <th>Shipped To</th>

        //                 </tr>
        //                 <tr className='w-full flex-row '>
        //                     <td>Anom</td>
        //                     <td>19</td>
        //                     <td>Male</td> 
        //                     <td>Anom</td>
        //                     <td>19</td>
        //                     <td>Male</td>
        //                     <td>Male</td>
        //                 </tr>

        //             </table>
        //         </div>
        //         {
        //             orders.length != 0 ? '' :
        //                 <p className="my-6 text-sm bg-blue-200 text-blue-800 p-3 rounded-lg">
        //                     no prosses order have been found  for your account
        //                 </p>
        //         }
        //     </div>
        // </div>
    )
}

export default Orders

