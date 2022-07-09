import { useProductsApis } from '@/hooks/productApis'
import React, { useEffect, useState } from 'react'
import HorizantalSlider from './Elements/HorizantalSlider'
import RecommendedProductCard from './RecommendedProductCard'

function ProductSimilar() {
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
        <div className="w-full ">
            <h2 className="font-bold text-2xl my-2 text-gray-900">
                Similar items
            </h2>

            <HorizantalSlider>


                <ul className="flex flex-row whitespace-nowrap w-full">
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

                    {loading && <p>Loading...</p>}
                </ul>
            </HorizantalSlider>
        </div>
    )
}

export default ProductSimilar
