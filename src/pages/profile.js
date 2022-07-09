import { useEffect, useState } from "react"
import { authUser } from '@/hooks/authUser'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from 'react-query'
import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import EditProfile from "@/components/Elements/EditProfile"
import Adress from "@/components/Layouts/Adress"
import { useCardApi } from '@/hooks/CardApi'
import Orders from "@/components/Layouts/Orders"
import Payments from "@/components/Layouts/Payments"

const profile = () => {
    const router = useRouter()

    const { logOut, getUserInfo, profile, getPayment } = authUser()
    // const { getCardItem } = useCardApi()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const [profiledata, setprofile] = useState('')

    const [selectedTab, setSelectedTab] = useState(4)

    // const logout = () => {

    //     logOut({
    //         setErrors,
    //         setStatus,
    //         setLoading,
    //     })

    // }


    const profileee = useQuery('attr_colorvv', async () => profile(), {
        onSuccess: (res) => {
            console.log("sdvdsv", res.data.data);
            setprofile(res.data.data)
        },
        onError: (err) => console.log("dsvdv", err)
    });



    return (
        <section className=" body-font relative">
            <div className="flex flex-row justify-between mx-8">
                <h1 className="text-4xl mx-8 ">Welcome to your account!</h1>
                {/* <div className="lg:w-1/4 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <div>
                        <a className="mt-3 underline cursor-pointer text-lg text-indigo-400" onClick={logout}>
                            <p>{loading ? "singin out ..." : "Sign out"} </p>
                        </a>
                    </div>

                </div> */}
            </div>
            {/* <span className="text-2xl font-bold  mx-6">Profile</span> */}
            <div className="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="w-full  sm:mr-10 ">

                    <div className="flex mb-8 text-center m">
                        <a
                            onClick={() => setSelectedTab(1)}
                            className={`flex-grow py-2 text-sm px-1 cursor-pointer  ${selectedTab === 1
                                ? 'text-indigo-500 border-b-4 border-indigo-500'
                                : 'border-b-2 border-gray-300'
                                }`}>
                            Profile

                        </a>
                        <a
                            onClick={() => setSelectedTab(2)}
                            className={`flex-grow py-2 text-sm px-1 cursor-pointer  ${selectedTab === 2
                                ? 'text-indigo-500 border-b-4 border-indigo-500'
                                : 'border-b-2 border-gray-300'
                                }`}>
                            Address
                        </a>
                        <a
                            onClick={() => setSelectedTab(3)}
                            className={`flex-grow py-2 text-sm px-1 cursor-pointer ${selectedTab === 3
                                ? 'text-indigo-500 border-b-4 border-indigo-500'
                                : 'border-b-2 border-gray-300'
                                }`}>
                            Payment
                        </a>
                        <a
                            onClick={() => setSelectedTab(4)}
                            className={`flex-grow py-2 text-sm px-1 cursor-pointer  ${selectedTab === 4
                                ? 'text-indigo-500 border-b-4 border-indigo-500'
                                : 'border-b-2 border-gray-300'
                                }`}>
                            Orders

                        </a>


                    </div>


                    <div className={`leading-relaxed ${selectedTab === 1 ? 'block' : 'hidden'}`}>
                        <div className=" flex flex-row justify-end">

                            <Popover>
                                {({ close }) => (

                                    <>
                                        <Popover.Button>
                                            <button className="text-white bg-indigo-500 border-0 w-32 focus:outline-none
                                                             hover:bg-indigo-600 rounded text-lg" >
                                                Edit
                                            </button>
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
                                                    <EditProfile profile={profiledata} closeModal={close} refreshProf={profileee} />
                                                </div>


                                            </Popover.Panel>
                                        </Transition>

                                    </>
                                )}
                            </Popover>


                            {/* <div className="flex flex-row space-x-12">
                            <p>{profiledata.name}</p>
                            <p>{profiledata.email}</p>
                            
                        </div> */}
                        </div>

                        <div className="flex flex-col w-full mt-7">
                            <div className="flex flex-col space-y-4 justify-end sm:px-24">

                                <div className="flex flex-row space-x-5">
                                    <p>First Name : </p>
                                    <p>{profiledata.first_name}</p>
                                </div>
                                <div className="flex flex-row space-x-5">
                                    <p>Last Name : </p>
                                    <p>{profiledata.last_name}</p>
                                </div>

                                <div className="flex flex-row space-x-5">
                                    <p>Email : </p>
                                    <p>{profiledata.email}</p>
                                </div>
                                <div className="flex flex-row space-x-5">
                                    <p>Phone : </p>
                                    <p>{profiledata.phone}</p>
                                </div>


                            </div>

                        </div>


                    </div>
                    <div className={`leading-relaxed sm:px-24 ${selectedTab === 2 ? 'block' : 'hidden'}`}>

                        <div >
                            <Adress />
                        </div>

                    </div>
                    <div className={`leading-relaxed px-24 ${selectedTab === 3 ? 'block' : 'hidden'}`}>
                        <div>
                            <Payments />
                        </div>

                    </div>
                    <div className={`leading-relaxed sm:px-24 ${selectedTab === 4 ? 'block' : 'hidden'}`}>
                        <div>
                            <Orders />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default profile
