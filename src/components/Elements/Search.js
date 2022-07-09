import React, { useState, useRef, useEffect } from 'react'
import Input from './Input'
import { useProductsApis } from '@/hooks/productApis'
import { useMutation, useQuery, } from 'react-query'
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
function Search() {
    const router = useRouter();
    const [keysearch, setkeysearch] = useState('')
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
            setkeysearch(data)
            setshowSuggest(true)
            search.mutate(data)
        }

    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            router.push({ pathname: '/rugs', query: { name: keysearch } })
            setshowSuggest(false)
        } else {
            null
        }


    }

    const more = (e) => {
        console.log("asdvasvasv", e);
        router.push({ pathname: '/rugs', query: { name: keysearch } })
        //  '/rugs?Clearance=16&lable=Clearance'
        setShowClose()
    }

    const wrapperRef = useRef(null);
    const setShowClose = () => {
        setshowSuggest(false)
    }
    useOutsideAlerter(wrapperRef, setShowClose);


    return (
        <div className='flex flex-col '>
            <div className="w-full mx-2  md:flex hidden  flex-row items-center">
                <Input
                    placeholder="Search"
                    className="border-indigo-400 border rounded-full px-4 py-1 w-full shadow-none "
                    onChange={(e) => serachSuggest(e.target.value)}
                    onKeyPress={(e) =>
                        handleEnter(e)
                    }
                />
                <div className='-ml-14 flex flex-row items-center justify-center'>
                   <div>
                   {
                        search.isLoading ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  animate-spin" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg> : null
                    }
                   </div>

                    <button onClick={more}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
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
                        <div className="px-1 w-2/5 z-50 absolute top-14  bg-white py-1   " >
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
                                               
                                                    <span className=''>

                                                        {item.sku.toUpperCase()}
                                                        </span>
                                                   
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

export default Search