import { ArrowLeftIcon } from '@heroicons/react/outline'
import Input from './Input'
import React, { useState, useRef, useEffect } from 'react'

import { useProductsApis } from '@/hooks/productApis'
import { useMutation, useQuery, } from 'react-query'
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
function SearchBar({ className, props, onSearchClick }) {
    const router = useRouter();
    const [Suggest, setSuggest] = useState([])
    const [showSuggest, setshowSuggest] = useState(false)
    const { getSearchSuggest } = useProductsApis()
    const search = useMutation(async (data) => getSearchSuggest(`=${data}`, 5), {
        onSuccess: (res) => {
            setSuggest(res.data.data)

        },
        onError: (err) => {
            console.log("[cjasckn]", err);
        }
    });

    const serachSuggest = (data) => {
        // setsearchdata(data)
        if (data == "") {
            setshowSuggest(false)
        } else {
            setshowSuggest(true)
            search.mutate(data)
        }

    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            router.push({ pathname: '/rugs', query: { q: 'name=' + e.target.value } }, null, { shallow: false })
            setshowSuggest(false)
        } else {
            null
        }


    }

    const more = (e) => {
        console.log("asdvasvasv", e);
        router.push({ pathname: '/rugs', query: { q: 'name=' + e } }, null, { shallow: false })
        setShowClose()
    }

    const wrapperRef = useRef(null);
    const setShowClose = () => {
        setshowSuggest(false)
    }
    useOutsideAlerter(wrapperRef, setShowClose);

    return (
        <div
            className={`${className} bg-white w-full p-0 m-0 z-50 md:hidden flex items-center justify-center content-center shadow-lg absolute h-full`}>
            <ArrowLeftIcon
                className="w-6 h-6 mx-2 flex-none"
                aria-hidden="true"
                onClick={() => onSearchClick(false)}
                {...props}
            />
            <div className="w-full mx-2   flex-row items-center">
                <Input
                    className="text-sm mr-2 px-5 flex-grow shadow-none"
                    placeholder="Search"
                    onChange={(e) => serachSuggest(e.target.value)}
                    onKeyPress={(e) =>
                        handleEnter(e)
                    }
                />
                {/* <Input
                    placeholder="Search"
                    className="border-indigo-400 border rounded-full px-4 py-1 w-full shadow-none "
                    onChange={(e) => serachSuggest(e.target.value)}
                    onKeyPress={(e) =>
                        handleEnter(e)
                    }
                /> */}
                

            </div>
            {
                    search.isLoading ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-10 animate-spin" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg> : null
                }
            {
                // showSuggest ?
                <Transition

                    show={showSuggest}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    onMouseEnter={() => setshowSuggest(true)}
                    // onMouseLeave={() => setTimeout(() => {
                    //     setshowSuggest(false)
                    // }, 5000)}
                    className='z-40 absolute bg-white rounded-xl grid grid-cols-1 w-full '
                >

                    {/* <div onMouseDown={(e) => setshowSuggest(false)}> */}
                    <div ref={wrapperRef} >
                        <div className="px-1 w-full z-50 absolute top-14  bg-white py-1   " >
                            <div className='flex flex-col'>
                                {Suggest.map((item, index) =>
                                    // <a href={`${item.url_key}-p${item.id}`}>
                                    <a href={`/products/${item.url_key}-p${item.id}`}>

                                        <div className='flex flex-row space-x-5  rounded-lg p-2 cursor-pointer
                         m-2 border-2 hover:border-gray-800
                              transform duration-300'>
                                            <img src={item.images[0].url} className='w-12 h-20 ' />
                                            {/* <img src={item.base_image.large_image_url} /> */}
                                            <div className='flex flex-col flex-nowrap'>
                                                <span className=''>{item.name}</span>
                                                <div className=' flex flex-col mt-2'>
                                                    <span className=''>{item.sku}</span>
                                                    <span className='text-gray-500 font-bold'>{item.formated_price}</span>

                                                </div>
                                            </div>
                                        </div>
                                    </a>


                                )}

                            </div>
                            <div className='w-full flex justify-center'>
                                <button className='p-1 text-indigo-400 bg-white rounded-lg' onClick={(e) => more(Suggest)}>Show All Result</button>
                                {/* <a href={{ pathname: '/rugs', query: { q: 'name=' + Suggest}}} className='p-1 bg-indigo-400 text-white rounded-lg' >Show All Result</a> */}
                            </div>
                        </div>
                    </div>

                </Transition>
                // : ""
            }
        </div>
    )
}
function useOutsideAlerter(ref, setShowClose) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                //   alert("You clicked outside of me!");
                setShowClose()
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
export default SearchBar
