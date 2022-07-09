import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query'
import { useCardApi } from '@/hooks/CardApi'
function Coupon({addedCoupon,card}) {
    useEffect(() => {
        setcopons( addedCoupon)
    }, [addedCoupon])
    
    console.log("dvsddvsdvvds",addedCoupon)
    const { setCoupon, removeCoupon } = useCardApi()
    // const [copons, setcopons] = useState([addedCoupon])
    const [copons, setcopons] = useState(addedCoupon)
    const [coupon, setcoupon] = useState('')
    const handleCoupon = () => {
        if (coupon == '') {
            toastMassage("Coupon Is empty", 2)
        } else {
            set_coupon.mutate(coupon)
        }

    }
    const handleRemoveCoupon = () => {
      
            remove_coupon.mutate()
        

    }

    const set_coupon = useMutation(async (coupon) => setCoupon(coupon), {
        onSuccess: (res) => {
            console.log("lubfdbiluil", res.data);
            if (res.data.success) {
                toastMassage(res.data.message, 1)
                setcopons( coupon)
                setcoupon('')
                card.refetch()
            } else {
                toastMassage(res.data.message, 2)
            }

        },
        onError: (err) => console.log("lubfdbiluil", err)
    });

    const remove_coupon = useMutation(async () => removeCoupon(), {
        onSuccess: (res) => {
            console.log("lubfdbiluil", res.data);
            if (res.data.success) {
                toastMassage(res.data.message, 1)
                setcopons(undefined)
                card.refetch()
            } else {
                toastMassage(res.data.message, 2)
            }

        },
        onError: (err) => console.log("lubfdbiluil", err)
    });

    const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }


    return (
        <div>
            <div className="relative mb-4 flex flex-row 
             focus:border-indigo-500 focus:ring-2  focus:ring-indigo-900 w-full rounded border-2 ">

                <input
                    type="email"
                    id="name"
                    name="name"
                    placeholder='Enter Coupon Code'
                    className="  text-base outline-white focus:border-white focus:ring-white border-white text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setcoupon(e.target.value)} value={coupon}
                />
                <button onClick={handleCoupon}>
                    {set_coupon.isLoading ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-spin" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    }


                </button>
            </div>
            <div className='border-b-2 py-2 '>
                {/* {
                    copons.map((cop,index) =>
                        cop!=undefined?
                        index===1?
                        <div className='flex flex-row justify-between '>
                            <span>Applied Coupon</span>
                            <div className='flex flex-row items-center' >
                                <span className='font-bold text-black'>{cop}</span>
                                <button onClick={handleRemoveCoupon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 ${remove_coupon.isLoading?'animate-pulse':''}` }viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                        :index
                        :
                        ''
                        )
                } */}
                {
                    
                    copons!=undefined? <div className='flex flex-row justify-between '>
                    <span>Applied Coupon</span>
                    <div className='flex flex-row items-center' >
                        <span className='font-bold text-black'>{copons}</span>
                        <button onClick={handleRemoveCoupon}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 ${remove_coupon.isLoading?'animate-pulse':''}` }viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                </div>
                :''
                }

            </div>
        </div>
    )
}

export default Coupon