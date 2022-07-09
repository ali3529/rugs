import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function RecommendedProductCard({ product }) {
    const [handle] = useState(`${product.url_key}-p${product.id}`)
    const title = product.name
    const [price, setPrice] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        if (product) {
            // get product image
            if (product.type === 'configurable') {
                let defaultVariantId = product?.additional?.default_variant_id
                let filtered = product.variants.filter(value => {
                    return value.id == defaultVariantId
                })
                if (filtered.length > 0 && filtered[0].images.length > 1) {
                    setImage(filtered[0].images[1].url)
                } else {
                    setImage(product.base_image.large_image_url)
                }
            } else {
                if (product.images.length > 0) {
                    setImage(product.images[0].url)
                } else {
                    setImage(product.base_image.large_image_url)
                }
            }

            //get price
            if (product.type === 'configurable') {
                product.variants.sort(function (a, b) {
                    return Number(a.pay_price) - Number(b.pay_price)
                })
                let least_price = product.variants[0].formated_pay_price
                let most_price =
                    product.variants[product.variants.length - 1]
                        .formated_pay_price
                if (least_price === most_price) {
                    setPrice(least_price)
                } else {
                    setPrice(`${least_price} - ${most_price}`)
                }
            } else {
                setPrice(product.formated_price)
            }
        }
    }, [product])

    return (
        <Link href={`/products/${handle}`} passHref>
            <a className=" cursor-pointer px-5 my-3 border-2 w-64 border-white hover:border-gray-800 
            duration-500 transition-all mx-2 rounded-xl overflow-hidden ">
                {image && (
                    <div className=" w-full  overflow-hidden ">
                        <Image
                            src={image}
                            alt={product.name}
                            height={'400px'}
                            width={'384px'}
                            quality={100}
                            className="h-48 w-full rounded-2xl  object-contain "
                        />
                        {/* <img
                            src={image}
                            alt={product.name}
                         
                            className="sm:w-52 w-full h-full rounded-lg "
                        /> */}
                    </div>
                )}

                <div className="relative flex items-center justify-center md:items-start flex-col ">
                    <div className="text-gray-900 text-sm md:text-lg font-bold text-center my-2 whitespace-pre-wrap leading-4 md:text-left">
                        {title}
                    </div>

                    <div className="font-extrabold text-blue-900 text-sm  md:text-lg py-1 text-center">
                        {price}
                    </div>

                    {/* <div className="font-primary text-gray-900 text-xl my-1 font-bold">
                        <span className="flex items-center ">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 text-green-600"
                                viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 text-green-600"
                                viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 text-green-600"
                                viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 text-green-600"
                                viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 text-green-600"
                                viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </span>
                    </div>

                    <div className="text-teal-900 text-xs font-thin mb-2 md:mb-4">
                        Free Shipping
                    </div> */}
                </div>
            </a>
        </Link>
    )
}

export default RecommendedProductCard
