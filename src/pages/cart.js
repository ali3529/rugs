// import { useAuth } from '@/hooks/auth'
import CartProduct from '@/components/cartProduct'
import Button from '@/components/Elements/Button'
import Input from '@/components/Elements/Input'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { useContext, useEffect, useState } from 'react'
import { useCardApi } from '@/hooks/CardApi'
import ChooseAddress from '@/components/Layouts/ChooseAddress'
import { useQuery, useMutation } from 'react-query'
import PayPal from '@/components/Elements/PayPal'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';
import AuthContext from '@/context/AuthContext'
import Coupon from '@/components/Elements/Coupon'

function Cart() {
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState([])
    const [loading, setLoading] = useState(false)
    const [items, setitems] = useState([])
    const router = useRouter()
    const [card, setcard] = useState({})
    const [gest_address, setgest_address] = useState({})

    const { getCardItem, getCardItemQ, saveOrder, saveShipingMethod, savePaymentMethod, captureOrder } = useCardApi()


    let crddd = useQuery('carddd', async () => getCardItemQ(), {
        onSuccess: (res) => {
            if (res.data.data != null) {
                setStatus(res.data.data)
                setitems(res.data.data.items)
                console.log("sdvsdvdddddddd", res.data.data.billing_address);
                setgest_address(res.data.data.billing_address)
            } else {
                setStatus(null)
            }
            console.log("[get card]", res.data.data);
            console.log("[get card]", res);
        }
    })


    const removeItem = (index) => {

        setitems(items.filter((item, indexx) => indexx !== index))

    }


    const [products] = useState([{ id: 1 }, { id: 2 }])

    const [showZippingInput, setShowZippingInput] = useState(false)
    // const [orginCost, setorginCost] = useState(0)
    let orginCost = 0
    function getOffPercent() {
        let temp = 0;
        items.map(item => {
            if (item.product.regular_price != undefined) {

                const tremaind = item.product.regular_price - item.product.price;
                // setorginCost(item.product.regular_price)
                orginCost += (item.product.regular_price * item.quantity)
                const offer = (tremaind * item.quantity) / orginCost;
                temp += offer
                console.log("dsdvsdv", orginCost);
            }
        })

        let percent = temp * 100

        return percent.toFixed(0) + '% off'

    }

    const handleOrder = () => {
        save_order.mutate()

    }

    const openpayPop = (url) => {
        // let newWindow = open(url, 'example', 'width=800,height=500');
        let newWindow = open(url, 'example', 'noopener,noreferrer');

        var timer = setInterval(function () {
            if (newWindow.closed) {
                clearInterval(timer);
                crddd.refetch()
            }
        }, 1000);
    }

    const save_order = useMutation(async () => saveOrder(), {
        onSuccess: (res) => {
            console.log("luilusdcvsdvil", res.data);
            openpayPop(res.data.redirect_url)

        },
        onError: (err) => {
            if (err.response.status == 500) {
                toastMassage(err.response.data.message, 2)
            }


        }
    });


    // shiping method
    const save_shiping = useMutation(async () => saveShipingMethod({ shipping_method: "free_free" }), {
        onSuccess: (res) => {
            console.log("luiluil", res.data);
            // toastMassage("Shipping Method Saved", 1)


        },
        onError: (err) => console.log("luiluil", err)
    });

    // payment method

    // const save_payment_method = useMutation(async () => savePaymentMethod({payment:{method:"paypal_smart_button"}}), {
    const save_payment_method = useMutation(async (method) => savePaymentMethod({ payment: { method } }), {
        onSuccess: (res) => {
            toastMassage("Payment Method Saved", 1)

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

    useEffect(() => {
        save_shiping.mutate()
    }, [])

    return (
        <div className="mx-auto max-w-7xl">
            <Toaster />
            <h1 className="font-bold text-4xl w-full text-center md:text-left">
                Shopping Cart
            </h1>
            {status == null ? <div className='flex flex-col items-center space-y-10 my-4'>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="180"
                    height="180"
                    className='bg-gray-200 p-4 rounded-2xl shadow-lg'
                    viewBox="0 0 256 256"
                >
                    <g fill="#000" strokeMiterlimit="10" strokeWidth="1">
                        <path
                            d="M89.317 27.68c-.739-.955-1.973-1.526-3.3-1.526H71.888L56.032 10.297a1.484 1.484 0 00-2.098 2.098l13.759 13.759H22.307l13.759-13.759a1.482 1.482 0 10-2.098-2.098L18.112 26.154H3.983c-1.329 0-2.562.571-3.301 1.527-.616.796-.828 1.796-.582 2.74l12.222 47.012c.413 1.593 2.01 2.704 3.883 2.704h57.59c1.872 0 3.469-1.112 3.884-2.704L89.9 30.42c.246-.945.033-1.944-.583-2.74zm-2.289 1.994L74.806 76.686c-.051.198-.44.484-1.011.484h-57.59c-.571 0-.96-.286-1.012-.483L2.972 29.674c-.007-.027-.02-.078.058-.179.133-.172.463-.374.954-.374h82.033c.49 0 .82.201.953.374.078.102.066.153.058.179z"
                            transform="matrix(.72 0 0 .72 128 128) matrix(3.89 0 0 3.89 -175.05 -175.05)"
                        ></path>
                        <path
                            d="M45 38.337c-.82 0-1.484.664-1.484 1.484v27.923a1.484 1.484 0 002.968 0V39.821A1.485 1.485 0 0045 38.337zM59.835 38.337c-.819 0-1.484.664-1.484 1.484v27.923a1.484 1.484 0 002.968 0V39.821c0-.82-.665-1.484-1.484-1.484zM30.164 38.337c-.82 0-1.484.664-1.484 1.484v27.923a1.484 1.484 0 002.968 0V39.821c0-.82-.664-1.484-1.484-1.484z"
                            transform="matrix(.72 0 0 .72 128 128) matrix(3.89 0 0 3.89 -175.05 -175.05)"
                        ></path>
                    </g>
                </svg>

                <p className='text-lg font-bold'>Your Shopping cart is Currently empty </p>


                <a href='/rugs'>
                    <button className='bg-indigo-500 py-2 px-12 text-white rounded-md hover:text-hovercolor-500' >shop Rugs</button>
                </a>
            </div>
                : <div className="flex flex-col md:flex-row-reverse">
                    <div className="px-4 sm:px-6 lg:px-8 flex flex-col md:w-1/3">
                        <div className="text-lg space-y-4">
                            <b>Summary</b>
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>{status?.formated_sub_total}</span>
                            </div>
                            {/* <div className="flex justify-between text-red-500 border-t border-b py-3">
                                <span>{getOffPercent()} +{items.length} Rugs</span>
                                <span>{'$' + (orginCost - status.sub_total).toFixed(0)}</span>
                            </div> */}


                            {/* addresses */}

                            {/* <div className="flex flex-row justify-between items-center ">
                                <span className="text-2xl font-bold">your Address</span>
                                <a href='/profile' className=" bg-white text-indigo-400 border-0 w-32 underline  focus:outline-none  rounded text-sm">
                                    Add Address
                                </a>
                            </div> */}

                            <ChooseAddress crddd={crddd} />

                            {
                                isAuth ? ''
                                    : <div className='ring-1 ring-gray-300 rounded-lg m-2 p-2'>
                                        <div className='flex flex-row  space-x-4 text-indigo-400'>

                                            <div className='flex flex-col'>
                                                {/* <label className='text-gray-800'>Country</label> */}
                                                <p>{gest_address?.last_name}</p>
                                            </div>
                                            <div className='flex flex-col text-indigo-400'>
                                                {/* <label className='text-gray-800'>State</label> */}
                                                <p>{gest_address?.first_name}</p>
                                            </div>

                                        </div>

                                        <div className='flex flex-row space-x-4 text-indigo-400'>
                                            {/* <label className=' text-indigo-400'>Address</label> */}
                                            {/* <span >{address.address1[0]}</span> */}
                                            <span >{gest_address?.address1?.map(adress => adress + '\n')}</span>

                                        </div>
                                        <div className='flex flex-row  space-x-4 text-indigo-400'>

                                            <div className='flex flex-col'>
                                                {/* <label className='text-gray-800'>Country</label> */}
                                                <p>{gest_address?.country}</p>
                                            </div>
                                            <div className='flex flex-col text-indigo-400'>
                                                {/* <label className='text-gray-800'>State</label> */}
                                                <p>{gest_address?.state}</p>
                                            </div>

                                            <div className='flex flex-col text-indigo-400'>
                                                {/* <label className='text-gray-800'>City</label> */}
                                                <p>{gest_address?.city}</p>
                                            </div>
                                        </div>

                                    </div>
                            }


                            {/* addresses */}
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>FREE</span>
                            </div>
                            <div className={`ring-1 ring-gray-300 rounded-lg  p-2 ${save_shiping.isLoading ? 'animate-pulse' : ''}`}>

                                <div className="flex justify-center flex-col space-y-3 py-4">
                                    <div className="form-check ">
                                        <input
                                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            checked={true}
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"

                                        // onClick={(e) => save_shiping.mutate()}
                                        />
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                            htmlFor="flexRadioDefault1">
                                            Free Shipping - Fedex
                                        </label>
                                    </div>

                                    <p className="font-thin text-xs pl-5">
                                        Ground carriers are capacity constrained and may
                                        have delays. Consider Express shipping for
                                        fastest delivery.
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <b>Payment Method</b>
                                <div className='mt-5 flex flex-row space-x-4'>
                                    <div>
                                        <input type='radio' id='paypal' name='payment' value='paypal_standard'
                                            onClick={(e) => save_payment_method.mutate(e.target.value)}
                                        />
                                        <img className={`w-28 h-14   ring-1 ring-indigo-500 
                                         p-3 rounded-xl cursor-pointer ${save_payment_method.isLoading ? 'animate-pulse' : ''}`} src='/images/paypal.svg'
                                        />

                                    </div>
                                    <div>
                                        <input type='radio' id='strip' name='payment' value='stripe'
                                            onClick={(e) => save_payment_method.mutate(e.target.value)}
                                        />
                                        <div className={`w-28 h-14  ring-1 ring-indigo-500  rounded-xl cursor-pointer ${save_payment_method.isLoading ? 'animate-pulse' : ''} `}>
                                            <img className={` w-28 h-14 rounded-xl cursor-pointer  `}
                                                src='/images/credit-card.svg'
                                            />
                                            <div className='flex justify-center'>
                                                <span className='text-blue-400 text-sm font-bold '>Credit Card</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col  border-b py-3">
                                {/* <div className="flex">
                                    <div
                                        className="flex justify-start items-center flex-1 cursor-pointer group"
                                        onClick={() =>
                                            setShowZippingInput(!showZippingInput)
                                        }>
                                        <span className="flex-1 group-hover:underline">
                                            Est Sales Tax:
                                        </span>
                                        {!showZippingInput && (
                                            <ChevronDownIcon className="flex-shrink-0 h-5 w-5 mx-5 group-hover:underline" />
                                        )}
                                        {showZippingInput && (
                                            <ChevronUpIcon className="flex-shrink-0 h-5 w-5 mx-5 group-hover:underline" />
                                        )}
                                    </div>
                                    <span className="flex-shrink-0">$0.00</span>
                                </div> */}
                                <div
                                    className={`flex accordion-content overflow-hidden transition-all duration-300 ${showZippingInput ? 'h-10 my-2' : 'h-0'
                                        }`}>
                                    <Input
                                        placeholder="Shipping Zip Code"
                                        className="flex-1 min-w-0 border border-gray-400 border-r-0 shadow-none rounded-r-none"
                                    />
                                    <Button className="bg-gray-200 text-gray-900 flex-shrink-0 border border-gray-400 rounded-l-none border-l-0">
                                        Update
                                    </Button>
                                </div>
                            </div>
                            <div>

                                <Coupon addedCoupon={status?.coupon_code} card={crddd} />
                            </div>

                            <div className="flex justify-between">
                                <b>Order Total</b>
                                <b className="text-green-500">{status?.formated_sub_total}</b>
                            </div>

                            <Button className="bg-indigo-400 w-full my-3" onClick={(e) => handleOrder()}>
                                {save_order.isLoading ? <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-16 animate-pulse divide-purple-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg> : "  Pay"}


                            </Button>
                            {/* {status.formated_base_sub_total != 'undefined' ? <PayPal payCallback={(data, action) => payCallbackk(data, action)} amount={status?.formated_base_sub_total} card={card} /> : ''} */}

                            <div className="my-3" />
                        </div>
                    </div>
                    {
                        loading ? <div className='flex justify-center w-full '><p className='text-xl font-bold'>Loading ......</p></div>
                            : <div className="flex flex-col w-full space-y-3 my-5 md:w-2/3 md:mx-4">
                                {items?.map((product, index) => (
                                    <CartProduct
                                        key={index}
                                        index={index}
                                        product={product.product}
                                        id={product.id}
                                        quantity={product.quantity}
                                        removeItem={(item) => removeItem(item)}
                                    />
                                ))}
                            </div>
                    }

                </div>
            }

        </div>
    )
}

export default Cart
