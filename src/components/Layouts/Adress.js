import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import Input from '@/components/Elements/Input'
import Button from '@/components/Elements/Button'
import AddressForm from '../Elements/AddressForm'
import { useQuery, useMutation } from 'react-query'
import { useProductsApis } from '@/hooks/productApis'
import EditeAddress from '../Elements/EditeAddress'
function Adress() {
    const { getAddresses, delAddresses } = useProductsApis()

    const [showAddAdress, setShowAddAddress] = useState(false)
    const [addresses, setaddresses] = useState([])
    const [showEditeAddress, setshowEditeAddress] = useState(false)

    useQuery('addresses', async () => getAddresses(), {
        onSuccess: (res) => {
            console.log("dsvdv", res.data);
            setaddresses(res.data.data)
        },
        onError: (err) => console.log("dsvdv", err)
    });

    const delleteAddresses = useMutation(async (id) => delAddresses(id), {
        onSuccess: (res) => {
            console.log("dsvsaascdv", res.data);
            //  setaddresses(res.data.data)
        },
        onError: (err) => console.log("dsvsaascdv", err)
    });

    const createdAdress = (address) => {
        console.log("dsvdsvssv", address);
        setShowAddAddress(!showAddAdress)
        setaddresses(prev => [...prev, address])
    }

    const deleteAddress = (address_id, index) => {
        delleteAddresses.mutateAsync(address_id)
        setTimeout(() => {
            setaddresses(addresses.filter((item, indexx) => indexx !== index))
        }, 500);

    }
    const [id, setid] = useState(0)
    const editeAddress = (address) => {



        if (showEditeAddress && address.id == id) {
            setshowEditeAddress(!showEditeAddress)
            console.log("sdvlsndvkjnbsdv");
        } else {
            setshowEditeAddress(true)
        }
        console.log(address.id);
        setid(address.id)
    }
    return (
        <div>

            <div className="flex flex-row justify-end">
                {/* <span className="text-2xl font-bold">your Address</span> */}
                <button className=" bg-white text-indigo-400 border-0 w-32 underline  focus:outline-none
                                                              rounded text-sm"
                    onClick={() =>
                        setShowAddAddress(!showAddAdress)
                    } >
                    Add Address
                </button>
            </div>

            <div>
                {/* add adress inputs */}
                <div className="flex flex-col   ">

                    <div
                        className={`flex accordion-content overflow-hidden transition-all duration-300 ${showAddAdress ? 'h-120 my-2' : 'h-0'
                            }`}>


                        <AddressForm createdAdress={(address) => createdAdress(address)} />


                    </div>
                    {showAddAdress ? <span className="text-2xl font-bold">your Address</span> : ''}
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 '>
                    {
                        addresses.map((address, index) =>
                            <div className={`ring-1 ring-gray-300 rounded-lg m-3 p-3 ${showEditeAddress && address.id == id ? '' : 'h-64'} `}>
                                {
                                    showEditeAddress && address.id == id ?
                                        //   {/* edite address */}

                                        <EditeAddress addressData={address} close={(e) => (setshowEditeAddress(false))} />
                                        :
                                        <div className='space-y-4'>
                                            <div className='flex flex-row justify-between  space-x-6'>
                                                <label className='text-gray-800'>Address :</label>
                                                <span >{address.address1[0]}</span>
                                                {/* <span >{address.address1.map(adress=>adress+'\n')}</span> */}
                                            </div>
                                            <div className='flex flex-row justify-between   space-x-6'>
                                                <label className='text-gray-800'>Country :</label>
                                                <p>{address.address1[0]}</p>
                                            </div>
                                            <div className='flex flex-row justify-between   space-x-6'>
                                                <label className='text-gray-800'>City :</label>
                                                <p>{address.city}</p>
                                            </div>
                                            <div className='flex flex-row justify-between   space-x-6'>
                                                <label className='text-gray-800'>Postcode :</label>
                                                <p>{address.postcode}</p>
                                            </div>
                                            <div className='flex flex-row justify-between  space-x-6'>
                                                <label className='text-gray-800'>Phone :</label>
                                                <p>{address.phone}</p>
                                            </div>

                                        </div>

                                }
                                {
                                    showEditeAddress && address.id == id ?
                                        ''
                                        : <div className='flex flex-row justify-between border-t-2 border-gray-200 mt-4 '>
                                            <button disabled={showEditeAddress} className=" bg-white text-indigo-400 border-0 mt-2  underline  items-center  focus:outline-none
                                                          rounded text-sm"
                                                onClick={() => editeAddress(address)}
                                            >
                                                Edit
                                            </button>
                                            <button className=" bg-white text-red-700 border-0  mt-2  focus:outline-none
                                                          rounded text-sm"
                                                onClick={() => deleteAddress(address.id, index)}
                                            >
                                                Delete Address

                                                {/* // delleteAddresses.isLoading ? "Deleting Address ..." : "Delete" */}

                                            </button>

                                        </div>
                                }



                            </div>
                        )
                    }

                </div>
                {
                    addresses.length != 0 ? '' :
                        <p className="my-6 text-sm bg-blue-200 text-blue-800 p-3 rounded-lg">
                            no prosses order have been found  for your account
                        </p>
                }
            </div>
        </div>
    )
}

export default Adress

