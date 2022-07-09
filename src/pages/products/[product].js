import ProductDetails from '@/components/ProductDetails'
import { useProductsApis } from '@/hooks/productApis'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Product = () => {
    const { getProduct } = useProductsApis()
    const router = useRouter()
    const [productId, setProductId] = useState(null)
    const [productData, setProductData] = useState(null)

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const [refresh] = useState(false)

    useEffect(() => {
        if (productId)
            getProduct({
                setErrors,
                setStatus,
                setLoading,
                setProductData,
                id: productId,
            })
    }, [refresh, productId])

    useEffect(() => { }, [errors, status, refresh])

    useEffect(() => {
        if (router.query.product?.length > 0) {
            let productDetails = router.query.product.split('-')
            if (productDetails.length > 0) {
                setProductId(
                    productDetails[productDetails.length - 1].replace(/p/g, ''),
                )
                // setRefresh(true)
            }
        }
    })

    return (
        <div className="max-w-7xl mx-auto">
            {/* {loading && ( */}
            {loading && (
     
                <div class="w-full h-120 flex flex-col rounded-xl mt-8 ">
                    <span class="w-2/3 bg-gray-300 h-6 rounded-md mx-16 mt-6 mb-6">
                    </span>
                    <span class="mx-4 bg-gray-300 h-112 flex sm:hidden rounded-md text-right">
                                </span>
                    <div class="sm:flex animate-pulse flex-row  h-full justify-center mx-48 hidden  space-x-5 p-2">

                        <div class="w-80 bg-gray-300 h-full rounded-lg ">
                        </div>

                        <div className='flex flex-col justify-between'>
                            <div class="flex flex-col space-y-3 w-full mt-3 pl-28 ">
                            <div className='flex flex-row space-x-5'>
                                    <span class="w-20 bg-gray-300 h-6 rounded-md ">
                                    </span>
                                    <span class="w-20 bg-gray-300 h-5 rounded-md ">
                                    </span>
                                    <span class="w-20 bg-gray-300 h-5 rounded-md ">
                                    </span>
                                </div>
                                <span class="w-96 bg-gray-300 h-24 rounded-md text-right">
                                </span>
                               
                                <div className='flex flex-row space-x-3 '>
                                <span class="w-96 bg-gray-300 h-10 rounded-md  mt-32">
                                    </span>
                                    <span class="w-12 h-12 bg-gray-300 rounded-full  mt-32">
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            )}
            {!loading && productData && (
                <ProductDetails productData={productData} />
            )}
            {!loading && !productData && (
                <b className="flex justify-center items-center w-full m-10 text-center">
                    Not find
                </b>
            )}
        </div>
    )
}

export default Product
