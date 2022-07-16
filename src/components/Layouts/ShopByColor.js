import { useCoreApis } from '@/hooks/coreApis'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useQuery, } from 'react-query'

function ShopByColor() {
    const { getAttributeByIdUrl } = useCoreApis()
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const [mainColorAttribute, setMainColorAttribute] = useState('')

    // useEffect(() => {
    //     getAttributeById({
    //         setErrors,
    //         setStatus,
    //         setLoading,
    //         setAttribute: setMainColorAttribute,
    //         id: 23,
    //     })
    // }, [])

    const color = useQuery('attr_color', async () => getAttributeByIdUrl(23), {
        onSuccess: (res) => {
            setMainColorAttribute(res.data)
            
        },
        onError: (err) => console.log("dsvdv", err)
    });


    useEffect(() => { }, [status, errors])
    return (
        <div className="flex flex-col lg:my-40 md:my-20 my-10">
            <div className="w-full flex flex-col justify-center items-center  my-4">
                <h2 className="font-bold text-2xl text-center">
                     RUGS BY COLOR
                </h2>
                <p className="font-thin text-gray-700">
                Find the perfect matching rug by browsing in the color section. The only limit is your imagination. 
                </p>
            </div>
            <ul className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 flex-row flex-wrap w-full">
                {
                    mainColorAttribute ?
                        mainColorAttribute.data?.options.map((item, index) => {

                            if (index < 15) {
                                return (
                                    <li
                                        key={item.id}
                                        className="w-full cursor-pointer px-2 my-3 md:hover:shadow-xl md:hover:mx-1 md:border-2 md:border-white rounded-xl md:hover:border-gray-800
                                transform duration-300">
                                        {/* <Link href={`/rugs?color=${item.label}`}> */}
                                        <Link href={{
                                pathname: '/rugs',
                                query:   {color : item.id ,lable:item.label}
                            }}>
                                        {/* <a href={{
                                            pathname: '/rugs',
                                            query: { q: 'color=' + item.label }
                                        }, null}> */}
                                            <div className="flex flex-col justify-center items-center">
                                                <img
                                                  loading='lazy'
                                                    className="w-full"
                                                    src={`${process.env.imgPath}/${item.swatch_value}`}
                                                    alt={item.label}
                                                />
                                                <div className="flex flex-col justify-center items-center ">
                                                    <div className="font-bold text-md sm:text-lg  my-2 ">
                                                       <p> {item.label}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            }
                        })
                        : null
                }
            </ul>
        </div>
    )
}

export default ShopByColor
