import React, { useContext, useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import { useProductsApis } from '@/hooks/productApis'
import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import AddressForm from '../Elements/AddressForm'
import Select from '../Elements/Select'
import toast, { Toaster } from 'react-hot-toast';
import AddressFormGuest from '../Elements/AddressFormGuest'
import AuthContext from '@/context/AuthContext'

function ChooseAddress({ crddd }) {
    const [addresses, setaddresses] = useState([])
    const [selectedItem, setselectedItem] = useState(0)
    const { getAddresses, choosePayAddress } = useProductsApis()

    const Addresses = useQuery('addresses', async () => getAddresses(), {
        onSuccess: (res) => {
            console.log("dsvascascascv", res.data);
            setaddresses(res.data.data)
        },
        onError: (err) => console.log("dsvascascascv", err)
    });

    const createdAdress = (address) => {
        console.log("dsvdsvssv", address);
        Addresses.refetch()
        closeModal()
    }
    let closeModal = ''

    const handleSelect = (selected, address) => {
        setselectedItem(selected)
        const data = JSON.parse(localStorage.getItem('data'));

        address.first_name = data.first_name;
        address.last_name = data.last_name;
        address.email = data.email;
        address.use_for_shipping = "true";
        address.address_id = selected;
        choose_Addresses.mutate(address)

    }

    // const choose_Addresses = useMutation( async (address) => choosePayAddress({
    //     billing:{address1:{"0": "tttt"},first_name:'alireza',last_name:'abbasi',email:'ali3529abbasi@yahoo.com',city:'dvsd',state,postcode:'svsdv',phone:'009989',country:'987798'}

    // }), {
    const choose_Addresses = useMutation(async (address) => choosePayAddress({ billing: address, shipping: address }), {
        onSuccess: (res) => {
            console.log("luiluil", res.data);
            toastMassage("Shipping Address Saved", 1)

        },
        onError: (err) => console.log("luiluil", err)
    });


    const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }

    const authContext = useContext(AuthContext)
    const { isAuth, userData, authDispatch } = authContext;	
    return (
        <>
            {/* <Toaster /> */}
            <div className="flex flex-row justify-between items-center ">
                <span className="text-2xl font-bold">your Address</span>


                <Popover>
                    {({ close }) => (

                        <>
                            {closeModal = close}
                            <Popover.Button>
                                <a className=" bg-white text-indigo-400 border-0 w-32 underline  focus:outline-none  rounded text-sm">
                                    {isAuth ? "Add Address"
                                        : "Choose Address"
                                    }
                                </a>
                            </Popover.Button>
                            <Transition

                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                                <Popover.Panel>
                                    <div className='text-black'>
                                        <div className="  fixed z-50 top-0 left-0 right-0  flex justify-center w-full overflow-scroll h-full">

                                            <div className=" p-4  sm:w-1/2   h-full md:h-auto ">
                                                {/* <!-- Modal content --> */}
                                                <div className=" bg-white rounded-lg shadow selc dark:bg-gray-700">
                                                    {/* <!-- Modal header --> */}

                                                    <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">

                                                        <p>
                                                            Create Adress
                                                        </p>
                                                        <button type="button" onClick={() => close()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        </button>

                                                    </div>
                                                    {/* <!-- Modal body --> */}
                                                    <div className="flex flex-col justify-center p-6 space-y-6">
                                                        {
                                                            isAuth ? <AddressForm createdAdress={(address) => createdAdress(address)} />
                                                                : <AddressFormGuest crdd={crddd} closeM={(e) => {
                                                                    close()
                                                                    crddd.refetch()
                                                                }}
                                                                />
                                                        }



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </Popover.Panel>
                            </Transition>

                        </>
                    )}
                </Popover>

            </div>

            <div className='grid grid-cols-1 sm:grid-rows-1 '>


                {
                    addresses.map((address, index) =>
                        <div className={`ring-1 ${address.id == selectedItem ? 'ring-blue-800' : ''} ${address.id == selectedItem && choose_Addresses.isLoading ? 'animate-pulse' : ''} ring-gray-300 rounded-lg m-2 p-2  `}>
                            {
                                <div className='cursor-pointer'>
                                    <input
                                        className=" rounded-full h-4 w-4 border border-gray-800  bg-white checked:bg-blue-600 
                                                    checked:border-blue-600  ring-indigo-400"
                                        type="radio"
                                        value={address.id}
                                        name="addreses_select"
                                        id={`address${index}`}

                                        onClick={(e) => handleSelect(e.target.value, address)}

                                    />
                                    <div className=''>

                                        <div className='flex flex-row space-x-4 text-indigo-400'>
                                            {/* <label className=' text-indigo-400'>Address</label> */}
                                            {/* <span >{address.address1[0]}</span> */}
                                            <span >{address.address1.map(adress => adress + '\n')}</span>

                                        </div>
                                        <div className='flex flex-row  space-x-4 text-indigo-400'>

                                            <div className='flex flex-col'>
                                                {/* <label className='text-gray-800'>Country</label> */}
                                                <p>{address.country}</p>
                                            </div>
                                            <div className='flex flex-col text-indigo-400'>
                                                {/* <label className='text-gray-800'>State</label> */}
                                                <p>{address.state}</p>
                                            </div>

                                            <div className='flex flex-col text-indigo-400'>
                                                {/* <label className='text-gray-800'>City</label> */}
                                                <p>{address.city}</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            }
                        </div>
                    )
                }
            </div>
        </>

    )
}

export default ChooseAddress