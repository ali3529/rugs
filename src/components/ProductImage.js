import { useEffect, useRef, useState } from 'react'
import ProductFullImage from './ProductFullImage'
import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import HorizantalSlider from './Elements/HorizantalSlider'

function ProductImage({ images, className, alt }) {
    const [mainImg, setMainImg] = useState(null)
    // const [openFull, setopenFull] = useState(false)
    const ref = useRef()

    useEffect(() => {
        if (images.length > 0) {
            setMainImg(images[0])
        }
    }, [images])

    return (
        <div >
            <Popover>
                {({ close }) => (
                    <>

                        <Popover.Button className={`${className}`}>
                            <div className="bg-white rounded-xl overflow-hidden">
                                <img
                                    src={mainImg?.url}
                                    loading="lazy"
                                    alt={alt}
                                    className="object-contain transform duration-500 ease-in-out hover:scale-125 cursor-pointer w-full h-120"
                                />
                            </div>
                            <Popover.Overlay className="bg-black opacity-30 fixed inset-0" />
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
                                    <ProductFullImage images={images} alt={alt} closeModal={close} />
                                </div>


                            </Popover.Panel>
                        </Transition>
                    </>
                )}


            </Popover>
            <div className="relative sm:flex border-t border-palette-lighter hidden">
                <div
                    ref={ref}
                    style={{ scrollBehavior: 'smooth' }}
                    className="space-x-1 space-y-2 text-center w-full border-t border-palette-lighter">
                    {images &&
                        images.map((imgItem, index) => (
                            <button
                                key={index}
                                className="relative flex-shrink-0 rounded-sm "
                                onClick={() => setMainImg(imgItem)}>
                                {/* <HorizantalSlider> */}
                                    <img
                                        src={imgItem.url}
                                        alt={imgItem.alt}
                                        className=" w-16 h-16"
                                    />
                                {/* </HorizantalSlider> */}
                            </button>
                        ))}
                </div>
            </div>
            <div className="relative flex border-t border-palette-lighter  sm:hidden">
            <HorizantalSlider>
                <div
                    ref={ref}
                    style={{ scrollBehavior: 'smooth' }}
                    className="space-x-1 space-y-2 text-center w-full border-t border-palette-lighter flex flex-row ">
                    {images &&
                        images.map((imgItem, index) => (
                            <button
                                key={index}
                                className="relative flex-shrink-0 rounded-sm border-2     "
                                onClick={() => setMainImg(imgItem)}>
                                {/* <HorizantalSlider> */}
                                    <img
                                        src={imgItem.url}
                                        alt={imgItem.alt}
                                        className=" w-16 h-16"
                                    />
                                {/* </HorizantalSlider> */}
                            </button>
                        ))}
                </div>
                </HorizantalSlider>
            </div>
        </div>
    )
}

export default ProductImage
