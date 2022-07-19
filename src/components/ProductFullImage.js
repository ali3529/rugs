import React, { useRef, useEffect, useState } from 'react'
import HorizantalSlider from './Elements/HorizantalSlider'
import MainSlider from './Layouts/MainSlider'
let pos = 0
function ProductFullImage({ images, closeModal, alt }) {
    const ref = useRef()
    const [mainImg, setMainImg] = useState(null)
    const [nessxt] = useState(null)
    const [hideSliderBar, sethideSliderBar] = useState(false)

    console.log("vksdbvjhbsdv", images);
    console.log("vksdbvjhbsdv", pos);
    useEffect(() => {

    }, [pos])

    useEffect(() => {
        if (images.length > 0) {
            setMainImg(images[0])
        }
    }, [images])

    const next = () => {
        if (pos > images.length - 2) return;
        pos++

        setMainImg(images[pos])

    }

    const prev = () => {
        if (pos <= 0) return;
        pos--

        setMainImg(images[pos])
    }

    const ArrowLeft = 'https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-left-512.png'
    const ArrowRight = 'https://img2.pngio.com/arrow-arrow-right-chevron-chevronright-right-right-icon-icon-arrow-right-png-512_512.png'

    return (
        <div className=''>
            {/* <!-- Extra Large Modal --> */}
            <div className="  fixed top-0 right-0 left-0 z-50 w-screen md:inset-0 h-full overflow-scroll">
                <div className=" w-full  h-full md:h-auto ">
                    {/* <!-- Modal content --> */}
                    <div className=" bg-white   dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 mx-4">
                            <button type="button" onClick={() => closeModal()} className="= bg-transparent bg-gray-200 text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">
                            <div className='flex flex-row'>
                                <div className='h-12 w-12 self-center bg-gray-200 rounded-full z-50 p-2 mx-3 cursor-pointer sm:flex hidden '>
                                    <img src={ArrowLeft} onClick={prev} />
                                </div>
                                <div className='flex'>
                                    <div className="bg-white relative rounded-xl overflow-hidden">

                                        <img
                                            src={mainImg?.url}
                                            loading="lazy"
                                            alt={alt}
                                            className="object-contain   transform duration-500 ease-in-out  cursor-move w-screen h-screen"
                                        />
                                    </div>
                                </div>

                                <div className='h-12 w-12 self-center bg-gray-200 z-50 rounded-full p-2 mx-3 cursor-pointer sm:flex hidden'>
                                    <img src={ArrowRight} onClick={next} />
                                </div>
                            </div>

                            <div className=" fixed   bottom-4 sm:bottom-32 left-0 right-0  flex justify-center ">
                                {/* <div className=" fixed   bottom-4 sm:bottom-32 left-0 right-0  flex  "> */}
                                <div className='flex flex-col transition-all delay-200 ease-in-out'>
                                    <div className='flex justify-end mx-24'>
                                        <button onClick={(e) => sethideSliderBar(!hideSliderBar)} >

                                            {
                                                hideSliderBar ? 'Show' : 'Hide'
                                            }
                                        </button>
                                    </div>
                                    <div className={`${hideSliderBar ? 'invisible' : 'block'}`}>
                                        <HorizantalSlider >
                                            <div
                                                ref={ref}
                                                style={{ scrollBehavior: 'smooth' }}
                                                className="space-x-1 space-y-2 text-center w-full flex flex-row ">
                                                {/* className="space-x-1 space-y-2 text-center w-full "> */}
                                                {images &&
                                                    images.map((imgItem, index) => (
                                                        <button
                                                            key={index}
                                                            className="relative flex-shrink-0 rounded-lg bg-transparent bg-teal-1 p-3 "
                                                            onClick={() => setMainImg(imgItem)}>
                                                            <img
                                                                src={imgItem.url}
                                                                alt={imgItem.alt}
                                                                className=" w-16 h-16 "
                                                            />
                                                        </button>
                                                    ))}
                                            </div>
                                        </HorizantalSlider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFullImage
