import Price from '@/components/Elements/Price'
import Button from './Elements/Button'
import ButtonProductSize from './Elements/ButtonProductSize'
import parse from 'html-react-parser'
import ButtonProductColor from './Elements/ButtonProductColor'
import { useContext, useEffect, useState } from 'react'
import { useProductsApis } from '@/hooks/productApis'
import { useCardApi } from '@/hooks/CardApi'
import { useQueryClient } from 'react-query'
import CardContext from '@/context/CardContext'
import WishListContext from '@/context/WishListContext'
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import {
    FacebookShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
} from "react-share";
import {
    FacebookIcon,
    TelegramIcon,
    PinterestIcon,
    TwitterIcon,

} from "react-share";
import { useMutation, useQuery, } from 'react-query'
function ProductInfo({
    product,

    short_description,
    timeLeft,
    tinyImages,
    sizes,
    onChangeProductSize,
    onChangeProductColor,
}) {
    const router = useRouter()
    const { addToWhishlist } = useProductsApis()
    const { addTocardApi } = useCardApi()
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const [qty, setQty] = useState(null)
    console.log("[proooooo]", product);
    useEffect(() => {
        let q = 0
        for (let index = 0; index < product.inventories?.length; index++) {
            q += product.inventories[index].qty
        }
        setQty(q)
    }, [product])

    const wishListContext = useContext(WishListContext)
    const { whishListCount, wishdispatch } = wishListContext


    const addTowish = useMutation(async () => addToWhishlist(product.id), {
        onSuccess: (res) => {
            // setStatus(res.data.message)
            toastMassage(res.data.message,1)
            console.log("[vasvasv]", res.data);
            if (res.data.message == "Item Successfully Added To Wishlist") {
                wishdispatch({ type: 'ADD', whishListCount: whishListCount + 1 })
            } else {
                wishdispatch({ type: 'ADD', whishListCount: whishListCount - 1 })
            }


        }
    });

    const addWhishlist = () => {
        addTowish.mutate()
    }

    const cardContext = useContext(CardContext)
    const { cardCount, dispatch } = cardContext

    const addToCard = useMutation(async () => addTocardApi(product.id, 1), {
        onSuccess: (res) => {


            console.log("assculi", res.data);

            if (res.data.message == 'Item was successfully added to cart.') {
                // setStatus(res.data.message)
                toastMassage(res.data.message,1)
                console.log("dsvsdvdsv", res.data.message);
                // setErrors('')
                dispatch({ type: 'ADD', cardCount: cardCount + 1 })
            } else {
                if (res.data.error)
                    console.log("[sacsac]", res.data.error.message);
                // setStatus('')
                // setErrors(res.data.error.message)
                toastMassage(res.data.error.message,2)
                console.log("dsvsdvdsv", res.data);

            }
        }
    });

    const addPrudoctToCard = () => {
        setStatus("ading to card ...")
        addToCard.mutate()

    }

    const getSHareUrl = () => {
        return process.env.app_url + router.asPath
    }

    const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }

    return (
        <div className=" font-primary">
            <Toaster />
            <div className="flex flex-row w-full space-x-5">
                <Price
                    formated_regular_price={product.formated_regular_price}
                    formated_pay_price={product.formated_price}
                    regular_price={product.regular_price}
                    pay_price={product.price}
                    timeLeft={timeLeft}
                    sku={product.sku}
                />
            </div>

            <p className="my-2 text-justify">{parse(short_description)}</p>
            <div className="my-8">
                <div className="w-full flex flex-wrap py-2 my-2 space-x-2 ">
                    {tinyImages &&
                        tinyImages.map((image, index) => (
                            <ButtonProductColor
                                key={index}
                                index={index}
                                main_color={product.main_color}
                                image={image}
                                onChangeProductColor={onChangeProductColor}
                            />
                        ))}
                </div>

                <div className="flex flex-row flex-wrap">
                    {sizes.map((item, index) => {
                        return (
                            <ButtonProductSize
                                className="my-1 mx-1"
                                key={index}
                                item={item}
                                selected={product.size}
                                onChangeProductSize={onChangeProductSize}
                            />
                        )
                    })}
                </div>
            </div>
            {/* <div>
                {qty && qty > 0 ? (
                    <div className="flex flex-row justify-start items-center my-2">
                        <span className="mx-2 whitespace-nowrap">
                            {' '}
                            Quantity :
                        </span>
                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base">
                            {[...Array(qty > 10 ? 10 : qty)].map(
                                (item, index) => (
                                    <option key={index + 1}>{index + 1}</option>
                                ),
                            )}
                        </select>
                    </div>
                ) : (
                    <spam>Unavailable</spam>
                )}
            </div> */}

            {/* social share */}
            <h2 className='text-xl text-black font-bold mb-4'>Share Rug</h2>
            <div className='flex flex-row space-x-4 mb-3'>

                <div >
                    <FacebookShareButton url={getSHareUrl()} >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>

                <div >
                    <PinterestShareButton url={getSHareUrl()}>
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
                </div>

                <div >
                    <TwitterShareButton url={getSHareUrl()} >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                </div>

            </div>

            <div className='flex flex-row space-x-5'>
                {
                    product.is_item_in_cart
                        ? <Button className="bg-indigo-500 w-full" onClick={addPrudoctToCard}>In your Cart</Button>
                        : product.in_stock
                            ? <Button className="bg-indigo-500 w-full" onClick={addPrudoctToCard}>
                                {
                                    addToCard.isLoading ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg> : "Add to Cart"
                                }

                            </Button>
                            : <div className="bg-gray-300 w-full flex  justify-center rounded-xl " ><p className='self-center'>Unavailable</p></div>
                }


                <span className="ring-2 ring-indigo-500 rounded-full p-2 cursor-pointer "
                    onClick={addWhishlist}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 text-indigo-500 ${addTowish.isLoading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </span>
            </div>

            {/* {addToCard.isLoading ?
                <div className='flex justify-center mt-10'>

                    <span className='bg-green-300 p-3 rounded-xl text-white'>{status}</span>

                </div>
                : null} */}
            {/* {addTowish.isLoading ?
                <div className='flex justify-center mt-10'>

                    <span className='bg-green-300 p-3 rounded-xl text-white'>adding item to whish</span>

                </div>
                : null} */}

            {addToCard.isSuccess ? status == 'Item was successfully added to cart.' ?
                <div className='flex justify-center mt-6'>

                    <span className='bg-green-400 p-2 px-2 rounded-xl text-white'>{status}</span>

                </div>
                : null : null}
            {addToCard.isSuccess ? errors == 'The requested quantity is not available, please try again later.' ?
                <div className='flex justify-center mt-10'>

                    <span className='bg-red-300 p-3 rounded-xl text-white'>{errors}</span>

                </div>
                : null : null}


            {/* not auth */}
            {addToCard.isSuccess ? status == 'please Login for add Product to card' ?
                <a href='/login' className='flex justify-center mt-6 '>

                    <span className='bg-indigo-300 p-2 px-2 rounded-xl text-white underline'>{status}</span>

                </a>
                : null : null}

            {/* <div className="flex flex-col space-x-1 items-center my-2">
                                    <b className="font-extrabold text-lg text-gray-800">
                                        Free Shipping
                                    </b>
                                    <span className="text-sm">
                                        Estimated Delivery Date :undefined
                                    </span>
                                    <span className="text-sm">
                                        Ship to :Change
                                    </span>
                                </div> */}
        </div>
    )
}

export default ProductInfo
