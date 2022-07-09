import { useProductsApis } from '@/hooks/productApis'
import React, { useEffect, useState } from 'react'
import HorizantalSlider from '../Elements/HorizantalSlider'
import RecommendedProductCard from '../RecommendedProductCard'

function Recommended() {
    const { allProducts } = useProductsApis()

    const [paginate, setPaginate] = useState(null)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const [refresh] = useState(false)
    const [page] = useState(1)
    const [perPage] = useState(12)

    useEffect(() => {
        allProducts({
            setErrors,
            setStatus,
            setLoading,
            setPaginate,
            page,
            perPage,
        })
    }, [refresh])

    useEffect(() => { }, [errors, status, refresh])

    return (
        <div className="flex flex-col lg:my-40 md:my-20 my-10">
            <div className="w-full flex flex-col justify-center items-center  my-4">
                <h2 className="font-bold text-2xl text-center">
                    New Arrivals
                </h2>
                <p className="font-thin text-gray-700">
                    Check out these styles we think you'll love!
                </p>
            </div>
            <HorizantalSlider>
                {/* <ul className="flex flex-row  whitespace-nowrap  w-full">
                    {!loading &&
                        paginate &&
                        paginate.data &&
                        paginate.data.map((product, index) => (
                            <RecommendedProductCard
                                key={index}
                                index={index}
                                product={product}
                            />
                        ))}
                </ul> */}

                <ul className="flex flex-row  whitespace-nowrap w-full">
                    {!loading &&
                        paginate &&
                        paginate.data &&
                        paginate.data.map((product, index) => (
                            <RecommendedProductCard
                                key={index}
                                index={index}
                                product={product}
                            />
                        ))}
                </ul>
            </HorizantalSlider>
        </div>
    )
}

export default Recommended
