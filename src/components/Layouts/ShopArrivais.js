import { useCoreApis } from '@/hooks/coreApis'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function ShopArrivais() {
    const { getAttributeById } = useCoreApis()
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const [mainColorAttribute, setMainColorAttribute] = useState(null)

    useEffect(() => {
        getAttributeById({
            setErrors,
            setStatus,
            setLoading,
            setAttribute: setMainColorAttribute,
            id: 40,
        })
    }, [])

    useEffect(() => { }, [status, errors])

    return (
        <div className="flex flex-col lg:my-40 md:my-20 my-10">
            <div className="w-full flex flex-col justify-center items-center  my-4">
                <h2 className="font-bold text-2xl text-center">
                    Rugs by arrivais
                </h2>
                <p className="font-thin text-gray-700">
                    shop your rug whit arrivais
                </p>
            </div>
            <ul className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 flex-row flex-wrap w-full">
                {!loading &&
                mainColorAttribute &&
                mainColorAttribute.data.options.map((item, index) => {
                    if (index < 12) {
                        return (
                            <li
                                key={item.id}
                                className="w-full cursor-pointer px-2 my-3">
                                <Link href={{
                                    pathname: '/rugs',
                                    // query: { attribute: "arrivais=" + item.label }
                                    query:   {arrivais : item.id ,lable:item.label}
                                }}>
                                    <div className="flex flex-col justify-center items-center">
                                        <img
                                            className="w-full rounded-lg"
                                            src={`${process.env.imgPath}/${item.swatch_value}`}
                                            // src={`http://141.11.182.239:9000/local/product/74/VkTXQdcb2Z5ypDiQ7xxRfc4oj4n2SPEhCmDVD5RV.webp`}
                                            alt={item.label}
                                        />
                                        <div className="flex flex-col justify-center items-center">
                                            <header className="font-bold text-lg my-2">
                                                {item.label}
                                            </header>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default ShopArrivais
