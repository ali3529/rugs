import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useContext } from 'react'
import WishListContext from '@/context/WishListContext'
import { useProductsApis } from '@/hooks/productApis'
import { useMutation, useQuery, } from 'react-query'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';

function ProductCard({ product, index }) {
   
    const [handle] = useState(`${product.url_key}-p${product.id}`)
    const title = product.name
    const [price, setPrice] = useState(null)
    const [image, setImage] = useState(null)
    const [tinyImages, setTinyImages] = useState([])
    const { addToWhishlistAllRugs } = useProductsApis()
    const router = useRouter()
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

            //get tinyImages :: only configurable type
            if (product.type === 'configurable') {
                var groupBy = function (xs, key) {
                    return xs.reduce(function (rv, x) {
                        ; (rv[x[key]] = rv[x[key]] || []).push(x)
                        return rv
                    }, {})
                }
                let colors = groupBy(product.variants, 'main_color')
                let items = []
                Object.entries(colors).forEach(([key, values]) => {
                    let img = product.base_image.large_image_url
                    if (values[0].images.length > 0) {
                        img = values[0].images[0].url
                    }
                    items.push({
                        url: img,
                        main_color: key,
                        product_id: values[0].id,
                    })
                })
                setTinyImages(items)
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

    function getOffPercent() {
        // let reqular = Number(
        //     formated_regular_price.replace(/\$/g, '').replace(/,/g, ''),
        // )
        // let pay = Number(
        //     formated_pay_price.replace(/\$/g, '').replace(/,/g, ''),
        // )
        // let def = reqular - pay
        // let percent = (100 * def) / reqular

        const tremaind = product.regular_price - product.price;
        const offer = tremaind / product.regular_price

        let percent = offer * 100

        return percent.toFixed(0) + '% off'
    }
    const wishListContext = useContext(WishListContext)
    const { whishListCount, wishdispatch } = wishListContext


    const addTowish = useMutation(async () => addToWhishlistAllRugs(product.id), {
        onSuccess: (res) => {
            if (res.data.message == "Item Successfully Added To Wishlist") {
                wishdispatch({ type: 'ADD', whishListCount: whishListCount + 1 })
            } else {
                wishdispatch({ type: 'ADD', whishListCount: whishListCount - 1 })
            }
            toastMassage(res.data.message, 1)


        },
        onError: (e) => {
            console.log("[dvsdvsdvdsv]", e.response);
            if (e.response.status === 401) {
                toastMassage("Please Login To Your Account", 2)
            }

        }
    });
    const addWhishlist = () => {
        addTowish.mutate()
    }
    const tt = () => {

    }


    const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }

    return (
        // <Link href={``} passHref>
        <>
            <Toaster />
            <div className={`bg-white w-full rounded-xl ${index % 2 === 1 ? 'pl-2' : 'pr-2'
                } md:mx-2 md:w-auto md:p-4 md:shadow md:my-2 md:hover:shadow-xl md:hover:mx-1 border-2
                 md:hover:border-gray-800 transform duration-300 sm:mx-0 sm:my-0 mx-2 my-4 `}>

                <div
                    onClick={() => router.push(`/products/${handle}`)}
                >
                    {image && (
                        // <div className="h-48 w-full md:h-112">
                        <div className='flex flex-col  justify-center items-center'   >
                            {/* <div className='fixed rounded-[40pxl top-20 left-20  w-64 h-52 text-center  flex flex-col justify-center   p-4' style={{ background: '  rgba(0,112,244,0.5)' }}><p className='text-2xl font-bold text-white'>Sold Out</p></div> */}
                            {
                                !product.in_stock ? <div className='fixed top-2 left-2 rounded-xl text-center  flex flex-col justify-center
                                z-50   p-4'
                                    style={{ background: '  rgba(0,30,150,0.5)' }}>
                                    <p className='text-2xl  text-white'>Sold Out</p></div>
                                    :
                                    null

                                //     <div className='fixed rounded-3xl w-2/3 h-1/3 text-center  flex flex-col justify-center
                                // z-50   p-4'
                                //     style={{ background: '  rgba(0,112,244,0.5)' }}>
                                //     <p className='text-2xl  text-white'>Sold Out</p></div>
                            }

                            <div className="sm:h-48 w-full md:h-96 overflow-hidden ">
                                {/* <img
                                src={image}
                                alt={product.name}
                               
                                className="w-full h-full rounded-2xl object-contain"
                            />  */}
                                <Image
                                    src={image}
                                    alt={product.name}
                                    height={'400px'}
                                    width={'384px'}
                                    quality={100}
                                    className="h-48 w-full rounded-2xl  object-contain "

                                />
                                {/* <Image
                                    src={image}
                                    alt={product.name}
                                   layout='fill'
                                    quality={30}
                                    className="h-48 w-full rounded-2xl"
                                /> */}
                            </div>

                        </div>
                    )}

                    <div className="md:flex hidden mt-5 space-x-2">
                        {tinyImages &&
                            tinyImages.map((image, index) => (
                                <img
                                    key={index}
                                    className="w-11 h-11"
                                    src={image.url}
                                />
                            ))}
                    </div>

                    <div className="relative flex items-center justify-center md:items-start flex-col">
                        <div className="text-gray-900 text-lg md:text-xl font-semibold text-center my-2 leading-5 md:text-left">
                            {title}
                        </div>

                    </div>
                </div>
                <div className='flex w-full flex-row justify-between px-3 sm:px-0'>


                    <div className="font-extrabold text-blue-900 text-lg flex flex-wrap flex-row space-x-3 items-center  md:text-2xl py-1 text-center">
                        <span>{price}</span>
                        <span className='text-lg text-gray-500 line-through'>{product.formated_regular_price}</span>
                        <span className='font-bold text-lg text-indigo-500 mx-2 self-start'>{product.regular_price != undefined ? getOffPercent() : null}</span>
                    </div>
                    <div className='  self-end z-50 sm:mx-0 sm:my-0 mx-4 my-4' onClick={addWhishlist}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`sm:h-7 h-7 w-7 ${addTowish.isSuccess ? 'text-red-500 fill-current' : ''}   rounded-full ring-indigo-400 ${product.is_wishlisted ? 'text-red-500 fill-current' : 'text-indigo-500'} ${addTowish.isLoading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>

            </div>
        </>


        // </Link>
    )
}

export default ProductCard
