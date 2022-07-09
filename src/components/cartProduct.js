import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import { useCardApi } from '@/hooks/CardApi'
import Button from './Elements/Button'
import { useMutation ,useQueryClient} from 'react-query'
import CardContext from '@/context/CardContext'
import WishListContext from '@/context/WishListContext'
import toast, { Toaster } from 'react-hot-toast';

function CartProduct({ product, removeItem, index, id, quantity }) {
    const qc=new useQueryClient();
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState([])
    const [loading, setLoading] = useState(false)

    const [addErrors, setAddErrors] = useState([])
    const [addStatus, setAddStatus] = useState(null)

    const [count, setcount] = useState(quantity)
    const [handle] = useState(`${product.url_key}-p${product.id}`)
    const { removeCartItem, addTocardApi ,minezTocardApi} = useCardApi()

    const removeItemm = async() => {
       await removeCartItem({
            setErrors,
            setStatus,
            setLoading,
            cartItemId: id,
            qqqc: removieItemFromCard
        })

       
     

    }
    const removieItemFromCard=()=>{
        console.log("sdkvjnsdkjv");
        removeItem(index)
        qc.refetchQueries({ queryKey: 'carddd' })
    }


    useEffect(() => {

    }, [count])

    const add = () => {
        addPrudoctToCard()

    }

    const minez = () => {
     
     
        setcount(count - 1)
        minezToCard.mutate()
        console.log("dvsdvdsvsd",count);
    }

    const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }

    const cardContext = useContext(CardContext)
    const { cardCount, dispatch } = cardContext

    const addToCard = useMutation(async () => addTocardApi(product.id, 1), {
        onSuccess: (res) => {

            console.log("assculi", res);
            

            if (res.data.message == 'Item was successfully added to cart.') {
                toastMassage(res.data.message, 1)
                setcount(count + 1)
                qc.refetchQueries({ queryKey: 'carddd' })
                // dispatch({ type: 'ADD', cardCount: cardCount + 1 })
            } else {
                if (res.data.error)
                    toastMassage(res.data.error.message, 2)


            }

            // } else {
            //     console.log("dsv;mdsvkmdsvmsd");
            //     setStatus('please Login for add Product to card')
            //     setErrors('')
            // }
        }
    });

    const minezToCard = useMutation(async () => minezTocardApi(product.id, 1), {
        onSuccess: (res) => {

            console.log("assculi", res);
            

            if (res.data.message == 'Item was successfully added to cart.') {
                toastMassage(res.data.message, 1)
                setcount(count + 1)
                qc.refetchQueries({ queryKey: 'carddd' })
                // dispatch({ type: 'ADD', cardCount: cardCount + 1 })
            } else {
                if (res.data.error)
                    toastMassage(res.data.error.message, 2)


            }
        }
    })

    const addPrudoctToCard = () => {
        setStatus("ading to card ...")
        addToCard.mutate()

    }

    return (
        <div className="flex flex-row md:flex-row justify-center items-start m-4 bg-white rounded-md w-full px-4 md:px-1 py-3 md:shadow-md">
            <Toaster />
            <img

                className="w-16 md:mr-2 lg:w-32 m-3"
                src={product.images[0].url}
            />
            <div className="flex flex-col flex-1 mx-4 md:mx-0 space-y-3 md:flex-row md:items-center">
                <div className="flex flex-col xl:w-96">
                    <small className="hidden md:block">Product</small>
                    <Link href={`/products/${handle}`} passHref>
                        <b className='cursor-pointer'> {product.name}</b>
                    </Link>
                    <small>{product.sku.toUpperCase()}</small>
                </div>
                <div className="flex w-full justify-start items-start">
                    <div className="flex flex-col  w-full items-center space-y-2">
                        <small className="hidden md:block">Quantity ({quantity})</small>
                        <div className='flex flex-row space-x-2'>
                            <button onClick={(e) => add()} >
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 cursor-pointer ${addToCard.isLoading ? 'animate-spin' : ''}`} viewBox="0 0 20 20" fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <input className='border-2 border-gray-500 rounded-md text-center w-11' value={count}></input>
                            <button
                            //  disabled={count <= 1 ? true : false}
                             onClick={(e) => minez()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>

                        </div>
                        <small className="cursor-pointer" onClick={() => removeItemm()}>REMOVE</small>
                        {/* {addToCard.isSuccess ? addStatus == 'Item was successfully added to cart.' ?
                            <div className='flex justify-center mt-6'>

                                <span className='bg-green-400 p-2 px-2 rounded-xl text-white'>{addStatus}</span>

                            </div>
                            : null : null}
                        {addToCard.isSuccess ? addErrors == 'The requested quantity is not available, please try again later.' ?
                            <div className='flex justify-center mt-10'>

                                <span className='bg-red-300 p-3 rounded-xl text-white'>{addErrors}</span>

                            </div>
                            : null : null} */}

                    </div>
                    <div className="md:flex flex-col w-full items-center space-y-2 justify-center hidden">
                        <small className="hidden md:block">Item Price</small>
                        <div className="flex md:flex-col lg:flex-row lg:space-x-2">
                            <span className="line-through text-lg">{product.formated_regular_price}</span>
                            <span className="text-lg">{product.formated_price}</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center space-y-2 justify-center">
                        <small className="hidden md:block">Total</small>
                        <b className="text-lg">{product.formated_price}</b>
                        <span className="md:hidden text-lg">({product.formated_price} per)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
