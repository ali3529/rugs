import { faGetPocket } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CreatePrudoctReview from './CreatePrudoctReview'
import Button from './Elements/Button'
import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import StarRatings from './StarRatings'

import { useProductsApis } from '@/hooks/productApis'
import { useEffect, useState } from 'react'
import AllProductReview from './AllProductReview'
function ProductReview({ product }) {
    const { productReview } = useProductsApis()
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const [refresh, setrefresh] = useState(false)

    useEffect(() => {
        productReview({
            setErrors,
            setStatus,
            setLoading,
            productId: product.id,
        })
    }, [refresh])


    return (
        <>
            <div className="flex flex-row justify-between my-1">
                <h2 className="font-bold text-2xl my-2 text-gray-900">
                    Rug Review
                </h2>
                <Popover>
                    {({ close }) => (

                        <>
                            <Popover.Button>

                                <Button className="bg-indigo-500 py-0">Write a review</Button>
                            </Popover.Button>
                            <Transition

                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                                <Popover.Panel>
                                    <div className='flex flex-row justify-center'>

                                        <CreatePrudoctReview closeModal={close} productId={product.id} />
                                    </div>


                                </Popover.Panel>
                            </Transition>

                        </>
                    )}
                </Popover>
            </div>
            <div className="grid grid-rows-1 w-full justify-center sm:justify-start">
                {status?.data?.map((comment, index, array) => (
                    <>
                        {
                            comment.status === "approved" ? 
                            // comment.status != "approved" ?

                                <>
                                    <div className='flex flex-col sm:flex-row sm:space-x-6 space-y-5'>
                                        {comment.images.map(item =>
                                            <img className='w-64 border-2 borbl' src={`${process.env.imgPath}/${item}`} />)}
                                    </div>
                                    <div
                                        key={index}
                                        className={`flex border-gray-200 py-5 my-3 sm:space-x-10 border-b-2 space-y-5 sm:space-y-0 flex-col sm:flex-row `}>
                                        <div className="w-1/4 flex flex-col">
                                            <b>{comment.title}</b>
                                            <span className="text-xs text-gray-600 mt-2">
                                                {comment.name}
                                            </span>

                                            <div className="flex flex-row flex-wrap">
                                                {/* {comment.images.map((image, index) => (
                                   <img
                                       className="w-14 h-14 rounded-md m-1"
                                       key={index}
                                       src={image}
                                   />
                               ))} */}
                                            </div>
                                        </div>
                                        <div className="w-2/4 flex flex-col">
                                            <div className="flex flex-row ">
                                                <StarRatings count={comment.rating} />
                                            </div>
                                            <div className="text-gray-800 text-md">

                                                <p>{comment.comment}</p>
                                            </div>
                                        </div>
                                        <div className="w-1/4 flex justify-center items-center">
                                            <div className="text-sm flex flex-row border-2 rounded-3xl py-1 px-2 mx-5 justify-center items-center hover:bg-indigo-200 cursor-pointer">
                                                <FontAwesomeIcon
                                                    className="w-6 h-6 mx-2"
                                                    icon={faGetPocket}
                                                />{' '}
                                                Helpful{' '}
                                                <b className="mx-2">{comment.rating}</b>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                null
                        }
                    </>
                ))}


            </div>
            <div className='flex justify-center  w-full'>

                <Popover>
                    {({ close }) => (

                        <>
                            <Popover.Button>
                                <button className=" bg-white  border-0 py-2 px-6 
                focus:outline-none  rounded text-md mt-4 text-indigo-400">
                                    Load  more . . .
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
                                    <div className=''>

                                        <AllProductReview closeModal={close} productId={product.id} />
                                    </div>


                                </Popover.Panel>
                            </Transition>

                        </>
                    )}
                </Popover>

            </div>
        </>
    )
}

export default ProductReview
