import React, { useRef, useEffect, useState } from 'react'
import { useProductsApis } from '@/hooks/productApis'
import { useMutation, useQuery, } from 'react-query'
import StarRatings from './StarRatings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGetPocket } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'

function AllProductReview({ closeModal }) {

    const { productReview } = useProductsApis()
    const [errors, setErrors] = useState([])
    const [review, setReview] = useState(null)
    const [loading, setLoading] = useState(false)
    const [refresh, setrefresh] = useState(false)
    const [page, setpage] = useState(1)

    const rev = useQuery('gsacasc', async () => axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/reviews', { params: { page: page, limit: 10 } }), {
        onSuccess: (res) => {
            console.log("cdsvdsv", res.data.data);
            setReview(res.data.data)
        },
        onError: (err) => {
            console.log("dsvsdv", err);
        }
    });

    const nextPage = () => {
        console.log("asvkmalkasmv");
        setpage(++page)

        rev.refetch()
    }

    const prevPage = () => {
        setpage(--page)
        rev.refetch()
    }
    return (
        <div className=''>
            {/* <!-- Extra Large Modal --> */}
            <div tabindex="-1" aria-hidden="true" className="flex justify-center   overflow-y-auto overflow-x-hidden fixed top-0 mt-10 right-0 left-0 z-50 w-full inset-0 h-modal  md:h-ful">
                <div className="relative p-4 w-full max-w-6xl h-full md:h-auto ">
                    {/* <!-- Modal content --> */}
                    <div className=" relative bg-white rounded-lg shadow dark:bg-gray-700 border-2 border-indigo-500">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 mx-4">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white m-5">
                                ALL Reviews
                            </h3>

                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" onClick={() => closeModal()} xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6  ">
                            {
                                rev.isLoading ? <p className='text-center text-xl font-bold'>Loading...</p>
                                    :
                                    <div className="grid grid-cols-1 w-full justify-center sm:justify-start  ">
                                        {review?.map((comment, index, array) => (
                                            <>
                                                {
                                                    comment.status == "approved" ?
                                                        <>
                                                            <div className='flex flex-col sm:flex-row sm:space-x-6 space-y-5'>
                                                                {comment.images.map(item =>
                                                                    <img className='w-64 border-2 borbl' src={`${process.env.imgPath}/${item}`} />)}
                                                            </div>

                                                            <div
                                                                key={index}
                                                                className='flex w-full  py-10 my-3
                                                 sm:space-x-10 space-y-5 sm:space-y-0 shadow-sm rounded-lg 00  p-7 border-b-2 border-gray-200'>
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

                                                        : null
                                                }
                                            </>
                                        ))}


                                    </div>
                            }
                        </div>

                        {rev.isRefetching ? <p className='text-center text-xl font-bold'>Loading...</p> : ""}
                        <div className='flex flex-row space-x-5 justify-center my-4'>

                            <button
                                disabled={page == 1 ? true : false}
                                className={`text-white border-indigo-500 border-2 py-2 px-6 
                focus:outline-none  rounded text-md ${page == 1 ? 'opacity-60' : 'opacity-100'}`
                                } onClick={prevPage}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                disabled={review && review.length == 0 ? true : false}

                                className={`text-white border-indigo-500 border-2 py-2 px-6
                focus:outline-none  rounded text-md
                                      ${review && review.length == 0 ? 'opacity-60' : 'opacity-100'}`
                                } onClick={nextPage}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProductReview
