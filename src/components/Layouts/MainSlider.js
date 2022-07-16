import { useCoreApis } from '@/hooks/coreApis'
import { useState, useEffect } from 'react'
import Slider from '../Elements/Slider'

function MainSlider() {
    const { getMainSliders } = useCoreApis()
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const [mainSlides, setMainSlides] = useState(null)
    const [firstSlides, setFirstSlides] = useState(null)
    const [secondSlides, setSecondSlides] = useState(null)
    const [sliders, setSliders] = useState(null)

    useEffect(() => {
        getMainSliders({
            setLoading,
            setErrors,
            setStatus,
            setSliders: setMainSlides,
        })
    }, [])

    useEffect(() => {
        if (mainSlides && mainSlides.length > 3) {
            setFirstSlides(mainSlides[0])
            setSecondSlides(mainSlides[1])
            delete setSliders[0]
            delete setSliders[1]
            console.log("",mainSlides);
            // mainSlides.id=="5"?'':mainSlides.id=="6"?'':
            // indexx !== index
            setSliders(mainSlides.filter((item,index)=>index!=0 &&index!=1 ))
        }
    }, [mainSlides, errors, status, loading])

    console.log(mainSlides);
    return (
        <div className="my-2 mb-32 sm:mb-0" >
            {firstSlides && secondSlides && sliders && (
                <div className=" lg:flex lg:mt-10 space-y-6 sm:space-y-0">
                    <div className="lg:w-3/5 w-full sm:h-120  rounded-2xl border-white border-2  mx-2">
                      
                            <Slider
                                slides={sliders}
                                slideInterval={30}
                                inContainer
                                className="md:hover:shadow-xl md:hover:mx-1 md:border-2 md:hover:border-gray-800
                            transform duration-300 cursor-pointer overflow-hidden rounded-2xl"
                        />

                    </div>
                    <div className="lg:w-2/5 w-full lg:my-0 my-4 lg:h-120 md:h-60 h-40 flex flex-col  mx-2 space-y-2 mb-80 md:mb-64 sm:mb-0 space-y-6 sm:space-y-0">
                        <div className="relative w-full lg:mb-2 mr-2 rounded-2xl border-white border-2 ">
                            
                            <a href={firstSlides.title}>


                                <img
                                    className="object-fill w-full sm:h-56 md:hover:shadow-xl md:hover:mx-1 md:border-2 md:hover:border-gray-800
                                transform duration-300 cursor-pointer rounded-2xl"
                                    alt={firstSlides.title}
                                    src={firstSlides.image_url}
                                />
                            </a>
                        </div>

                        <div className="relative w-full lg:mb-2 mr-2 rounded-2xl border-white border-2 ">
                            {/* <div className="absolute w-full h-full flex justify-center items-center rounded-md px-4"> */}

                                {/* { secondSlides.title==''?"":
                                <div className="rounded-lg bg-gray-901 w-full text-center py-2 px-3">
                                    <b className="text-yellow-500 sm:text-2xl text-lg font-bold font-mono uppercase">
                                   
                                        {secondSlides.title}
                                    </b>
                                    <p className="slider text-yellow-500 sm:text-lg text-sm leading-5 font-mono uppercase">
                                        {secondSlides.content.replace(
                                            /<[^>]*>?/gm,
                                            '',
                                        )}
                                    </p>
                                </div>} */}
                            {/* </div> */}
                            <a href={secondSlides.title}>
                                <img
                                    className="object-fill w-full  sm:h-56  mt-2 md:hover:shadow-xl md:hover:mx-1 md:border-2 md:hover:border-gray-800
                                transform duration-300 cursor-pointer rounded-2xl"
                                    alt={secondSlides.title}
                                    src={secondSlides.image_url}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MainSlider
