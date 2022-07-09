
import StoreHeading from '@/components/Layouts/StoreHeading'
import ProductListings from '@/components/ProductListings'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import useAxiosPublic from "@/hooks/AxiosConfigPublic"
let page = 1;
const attribute = {}
function IndexPage() {
   
    const { axiosPublic } = useAxiosPublic()
    const [paginate, setPaginate] = useState([])
    const [loading, setLoading] = useState(true)

    const [pages, setpages] = useState(0)

    const [limit, setlimit] = useState(9)

    const getRugs = () => {
        axiosPublic.get(`/products?page=${page}`, { params: attribute, limit }).then(
            res => {
                setLoading(false)
                if (res.data.data.length == 0) {
                    setPaginate(res.data.data)
                } else {
                    setPaginate(prev => [...prev, res.data.data])
                }

                setpages(res.data.meta.last_page)
            }
        )
    }

    const filters = (attributee) => {

        console.log("dsvs2232dv", attributee);
        setLoading(true)
        attribute = attributee
        setPaginate([])
        page=1;
        getRugs()

    }
    const nextPage = () => {
        ++page
        getRugs()
        console.log(page);
    }

    const prevPage = () => {
        --page
        rug.refetch()
    }
    const hadlePaginate = (pageee) => {
        console.log("[dddsadvvv]", page);
        page = pageee
        rug.refetch()

    }

    const limitHandle = (limit) => {
        rug.refetch()

        setlimit(limit)

    }




    return (
        <div className="mx-auto max-w-7xl">
            <StoreHeading filters={(e) => filters(e)} limitHandle={limitHandle} />
            {/* <StoreProductCategories /> */}
            { !loading && paginate[0]==undefined && (
                <b className="flex justify-center items-center w-full m-10 text-center">
                    not Found
                </b>
            )}

            {
                loading ?
                    <div className='flex flex-col'>

                        <div className='grid lg:grid-cols-3  grid-cols-1 space-x-4'>
                            {Array.from({ length: 3 }, (_, i) =>
                                <div class="w-full h-96 sm:h-120 border-2 rounded-xl mx-auto mt-8">
                                    <div class="flex animate-pulse flex-col items-center h-full justify-center space-x-5 p-2">
                                        <div class=" lg:w-80 bg-gray-300 h-full rounded-lg ">
                                        </div>
                                        <div class="flex flex-col space-y-3 w-full mt-3 ">
                                            <span class="sm:w-72 bg-gray-300 h-6 rounded-md text-right">
                                            </span>
                                            <span class="sm:w-36 bg-gray-300 h-6 rounded-md ">
                                            </span>
                                            <div className='flex flex-row space-x-5'>
                                                <span class="w-20 bg-gray-300 h-6 rounded-md ">
                                                </span>
                                                <span class="w-20 bg-gray-300 h-5 rounded-md ">
                                                </span>
                                                <span class="w-20 bg-gray-300 h-5 rounded-md ">
                                                </span>
                                            </div>
                                            <div className='flex flex-row space-x-5'>

                                                <span class="w-24 bg-gray-300 h-4 rounded-md ">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    : null
            }
            {

                // !true && paginate && paginate[0] && (
                !loading && paginate && paginate[0] && (

                    <InfiniteScroll
                        pageStart={page}
                        loadMore={nextPage}
                        hasMore={true || false}
                        loader={<div className='flex flex-col'>

                            <div className='grid sm:grid-cols-3 grid-cols-1 space-x-4 m-2'>
                                {Array.from({ length: 3 }, (_, i) =>
                                    <div class="w-full h-96 sm:h-120 border-2 rounded-xl mx-auto mt-8">
                                        <div class="flex animate-pulse flex-col items-center h-full justify-center space-x-5 p-2">
                                            <div class=" sm:w-80 bg-gray-300 h-full rounded-lg ">
                                            </div>
                                            <div class="flex flex-col space-y-3 w-full mt-3 ">
                                                <span class="sm:w-72 bg-gray-300 h-6 rounded-md text-right">
                                                </span>
                                                <span class="sm:w-36 bg-gray-300 h-6 rounded-md ">
                                                </span>
                                                <div className='flex flex-row space-x-5'>
                                                    <span class="w-20 bg-gray-300 h-6 rounded-md ">
                                                    </span>
                                                    <span class="w-20 bg-gray-300 h-5 rounded-md ">
                                                    </span>
                                                    <span class="w-20 bg-gray-300 h-5 rounded-md ">
                                                    </span>
                                                </div>
                                                <div className='flex flex-row space-x-5'>

                                                    <span class="w-24 bg-gray-300 h-4 rounded-md ">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>}

                    >
                        {
                            paginate.map(item =>
                                <ProductListings products={item} />
                            )
                        }

                    </InfiniteScroll>
                )}

        </div>
    )
}

export default IndexPage
