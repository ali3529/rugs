// import { useAuth } from '@/hooks/auth'
import Button from '@/components/Elements/Button'
import Input from '@/components/Elements/Input'
import React, { useContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useMutation, useQuery, } from 'react-query'
import { useProductsApis } from '@/hooks/productApis'
import Captch from '@/components/Elements/Captch'

function OrderStatus() {
    const [orderStatus, setorderStatus] = useState([])
    const [email, setemail] = useState('')
    const [order_id, setorder_id] = useState('')
    const { getGeustOrderStatus } = useProductsApis()
    const [captcha, setcaptcha] = useState(false)
    const getOrder = useMutation(async (data) => getGeustOrderStatus(data), {

        onSuccess: (res) => {
            console.log("dsvsdv", res.data.order);

            if (res.data.status == '1') {
                toastMassage(res.data.massage, 1)
                setorderStatus(res.data.order)
            } else {
                toastMassage(res.data.massage, 2)
                setorderStatus([])
            }

        },
        onError: (err) => {
            console.log(err);
        }
    });

    const getOrderStatus = (e) => {
        e.preventDefault();

        captcha ?
            getOrder.mutate({ order_id, email })
            : toastMassage('Please Submit Captcha', 2)
        // admin2@yahoo.com
    }


    const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }
    return (
        
        <div className="mx-auto max-w-7xl flex flex-col items-center sm:my-20 ">
            <Toaster />
            <div className="px-4 sm:px-6 lg:px-8 w-full flex flex-col max-w-xl juce">
                <h1 className="w-full text-center font-bold text-3xl mx-1 my-4">
                    Order Status
                </h1>
                <p className="m-5">
                    To get your order status, simply enter your order id and email
                    in the form above and click 'Find Order'.
                </p>
                <form onSubmit={(e) => getOrderStatus(e)}>
                    <div className="flex flex-col space-y-5 sm:space-y-10">
                        <div className="flex flex-col space-y-1">
                            <span>Email:</span>
                            <Input required type='email' placeholder="Enter Email" onChange={(e) => setemail(e.target.value)} value={email} />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span>Order ID:</span>
                            <Input required type='number' placeholder="Enter Order ID" onChange={(e) => setorder_id(e.target.value)} value={order_id} />
                        </div>

                        <Button className="bg-indigo-500" type='submit'>{getOrder.isLoading ? 'Finding Order...' : 'Find Order'}</Button>
                        <Captch cp={res => setcaptcha(res)} />
                    </div>
                </form>
            </div>

            {
                getOrder.isSuccess && orderStatus.length != 0 ? <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-8">
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
                                                Name
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
                                            {/* <th
                                     scope="col"
                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                 >
                                     Shipped To
                                 </th> */}

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {orderStatus.map(person => (
                                            <tr key={person.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{person.id}</div>

                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{person.customer_first_name} {person.customer_last_name}</div>

                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">

                                                        <div className="ml-4">
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">${person.base_sub_total}</div>
                                                                    <div className="text-sm text-gray-500">{person.shipping_description}</div>
                                                                </div>
                                                            </td>

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
                     font-semibold rounded-full  ${person.status === 'processing' ? 'bg-green-500' : 'bg-yellow-300'}`}
                                                    >
                                                        <div className={`text-sm text-gray-900 p-1 `}>{person.status}</div>


                                                    </span>
                                                </td>
                                                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                         
                                           <div className="ml-4">
                                                 <div className="text-sm text-gray-500">{person.shipping_address.first_name} {person.shipping_address.last_name}</div>
                                                 <div className="text-sm text-gray-500">{person.shipping_address.address1[0]}</div>
                                            
                                             </div>
                                     </td> */}

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                    : ''
            }

        </div>
    )
}

export default OrderStatus
