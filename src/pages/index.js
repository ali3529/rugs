// import { useAuth } from '@/hooks/auth'
import LastBlog from '@/components/Layouts/LastBlog'
// import MainSlider from '@/components/Layouts/MainSlider'
// import Recommended from '@/components/Layouts/Recommended'
// import ShopByColor from '@/components/Layouts/ShopByColor'
// import ShopBySize from '@/components/Layouts/ShopBySize'
// import ShopByRoom from '@/components/Layouts/ShopByRoom'
// import ShopByRugsType from '@/components/Layouts/ShopByRugsType'
// import ShopByStyle from '@/components/Layouts/ShopByStyle'
import ShopArrivais from '@/components/Layouts/ShopArrivais'
import {React,useEffect} from 'react'
import dynamic from 'next/dynamic'

const MainSlider = dynamic(() => import('@/components/Layouts/MainSlider'))
const ShopBySize = dynamic(() => import('@/components/Layouts/ShopBySize'))
const ShopByColor = dynamic(() => import('@/components/Layouts/ShopByColor'))
const ShopByRoom = dynamic(() => import('@/components/Layouts/ShopByRoom'))
const ShopByRugsType = dynamic(() => import('@/components/Layouts/ShopByRugsType'))
const ShopByStyle = dynamic(() => import('@/components/Layouts/ShopByStyle'))
const Recommended = dynamic(() => import('@/components/Layouts/Recommended'))

function IndexPage() {
    if (process.env.NODE_ENV === 'production') {
        console.log = () => {}
        console.error = () => {}
        console.debug = () => {}
      }


  

    return (
        <div className="mx-auto ">
            <div className="my-4 lg:mx-8 mx-4">
                <div>
                    <MainSlider />
                    <ShopBySize />
                    <ShopByColor />
                    <ShopByRugsType />
                    <ShopByStyle />
                    <ShopByRoom />
                    {/* <ShopArrivais/> */}
                    <Recommended />
                    <img
                        className="w-full my-28 rounded-md"
                        src="/images/inner_banner.webp"
                        alt="affirm-block"
                    />
                    <LastBlog />
                    <div className="flex lg:flex-row flex-col justify-between items-center px-6 py-8 bg-[#F5F5F5] rounded-lg shadow">
                        {/* <div className=" flex flex-col lg:mx-2 my-4 lg:items-start items-center">
                            <b className="text-lg">Planting for the planet</b>
                            <span className="text-xs lg:text-left text-center text-gray-700">
                                Through our partnership with Eden Reforestation
                                Projects, we plant one tree for every purchase
                                made on Rugs.com
                            </span>
                        </div> */}
                        <img
                            className="mx-2"
                            src="/images/Banner_Mothers_Day_Sale_1200x300px.webp"
                            alt="eden"
                        />
                    </div>
                    <div className="lg:my-40 md:my-20 my-10">
                        <h2 className="text-2xl">We’re so much more than rugs.</h2>

                        <p className="my-3">

                            Area rugs have been around for thousands of years. Of course, they used to be made of animal hide and various raw materials. But rugs were practical and provided warmth and comfort to homes that were often nothing more than shelters.
                        </p>
                        <h2 className='text-2xl'>
                            Unique vintage finds.
                        </h2>
                        <p className="my-3">
                            Over time, construction techniques made rugs more durable. And the use of wool and silk allowed for intricate and impressive designs. Carpets very quickly became valuable family heirlooms that were passed on from generation to generation. In contemporary times, we look for unique area rugs to bring our living spaces together. But we still believe rugs bring family & friends together too.
                        </p>
                        <h2 className='text-2xl'>
                            We believe value matters.
                        </h2>
                        <p className="my-3">
                            E
                            We believe every purchase you make with Magic Rugs should add value to your home. We believe it is our job to ensure a rug is authentic and meets a quality standard above all other rug sellers out there. We work very hard to bring the finest rugs to our customers for the lowest possible cost. In doing so, we hope to make unique heirloom-quality carpets accessible to every home.
                        </p>
                        <h2 className='text-2xl'>
                            We ensure 100% customer satisfaction.
                        </h2>
                        <p className="my-3">
                            This is not just our goal - it is our expectation. Our team at Magic Rugs knows that 100% customer satisfaction is the standard. Just check out our customer reviews on Google, Facebook and Yelp. We go above and beyond. Our team is available to answer questions and help every customer before, during and after a purchase. In fact, we hope you are so happy with Magic Rugs, that you’ll join our community on social media and even stop in and see us in Charlotte, North Carolina if you are passing through!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage
