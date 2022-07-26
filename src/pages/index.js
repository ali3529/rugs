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
import { React, useEffect } from 'react'
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
        console.log = () => { }
        console.error = () => { }
        console.debug = () => { }
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
                        className="w-full lg:h-auto h-72  object-cover lg:object-contain my-28 rounded-md"
                        src="/images/inner_banner.webp"
                        alt="affirm-block"
                    />
                    <LastBlog />
                    <div className="flex lg:flex-row flex-col justify-between items-center px-6 py-8 bg-[#F5F5F5] 
                    rounded-lg shadow">
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
                        {/* <h2 className="text-2xl">We’re so much more than rugs.</h2> */}

                        <p className="my-3">

                            If you are looking for a place to find rugs for sale, and that offer high-quality decor rugs for you and your family to enjoy, you do not need to seek no more "area rugs near me" on Google Maps, because the answer you will find is purchasing the rug online. No more local rug stores: Magic Rug is the perfect ally for your home decor and interior decor plans.
                        </p>
                        {/* <h2 className='text-2xl'>
                            Unique vintage finds.
                        </h2> */}
                        <p className="my-3">
                            Magic Rugs is definitely the best site to find the perfect rug to fit your needs. We have curated a comprehensive collection of the most beautiful rugs of all kinds, shapes, sizes, patterns, and styles, so you can find the rug that will best fit your home. And the best part of all is that we have made them affordable: you will find discount rugs as they must fit not only your aesthetic expectations but also your pocket.
                            From the most unique Oriental rugs, such as the Turkomen Persian rugs, to the favorites among interior designers and homeowners, all those modern, bold, and colorful rugs. We offer several deals on both vintage, rather antique rugs, and contemporary new rugs.
                        </p>
                        {/* <h2 className='text-2xl'>
                            We believe value matters.
                        </h2> */}
                        <p className="my-3">
                            In our very comprehensive catalog, you will find floor rugs for every purpose around the house: You will find office rugs to embellish your workspace and make it more welcoming for new clients; hallway rugs to work as a connection between the public and the private, and for your to feel as if you had a red carpet in your home.
                        </p>
                        {/* <h2 className='text-2xl'>
                            We ensure 100% customer satisfaction.
                        </h2> */}
                        <p className="my-3">
                            Kitchen rugs to render your culinary spaces and your kitchen floors as tidy as they can be; bedroom rugs to never have to feel the cold floor when you wake up ever again; living room rugs, to be the envy of all your friends and family, and many, many more.
                            Regarding colors and patterns, you can find all shades and colors you can imagine: dark rugs, in daring colors to be the centerpiece of your room, as well as rather neutral rugs, to perfectly blend into the surroundings and still provide the coziness only a rug can.
                            All the colors of the palette are available for you in the web catalog. Be it red rugs, to contrast a light hardwood floor; blue rugs, to match a beach-styled house and bring the sea home or green rugs, to remind you and your visitors of the sweetness of spring, and bring a part of the grass to your living room. These and many other colors are options for you to find the perfect color match for your rooms.
                        </p>

                        <p className="my-3">
                            You will find the variety of shapes and sizes we have collected so far in our online catalog is more than impressive; you will find we have gathered rectangular-shaped rugs, runner rugs, square rugs, and even round rugs. Furthermore, you will find all rug shapes possible, from the tiny 3 x 5 rugs to the palatial 9x12 rugs. No room, small or spacious shall remain without a rug to complement it.
                        </p>

                        <p className="my-3">
                            We would like to help you complement your living space as exquisitely as they need to be complemented, and you can do this with the different rugs Magic Rugs has to offer. You will find a very detailed and well-divided category division, with which you will make sure to find especially what you are looking for.
                            Welcome and good shopping!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage
