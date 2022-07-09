import Button from './Elements/Button'
import parse from 'html-react-parser'
import { useContext, useEffect, useState } from 'react'
import { useProductsApis } from '@/hooks/productApis'
import CardContext from '@/context/CardContext'
import { useMutation, useQuery, } from 'react-query'
import { useCardApi } from '@/hooks/CardApi'
import WishListContext from '@/context/WishListContext'
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link'

function WishlistProduct({ product, index, rmItem,id }) {

    const { addToWhishlist } = useProductsApis()
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const { addTocardApi } = useCardApi()
    
    const [handle] = useState(`${product.url_key}-p${product.id}`)

    const wishListContext = useContext(WishListContext)
    const { whishListCount, wishdispatch } = wishListContext
    const addTowish = useMutation(async () => addToWhishlist(product.id), {
        
        onSuccess: (res) => {
  
            if (res.data.message == "Item Successfully Added To Wishlist") {
                wishdispatch({ type: 'ADD', whishListCount: whishListCount + 1 })
            } else {
                wishdispatch({ type: 'ADD', whishListCount: whishListCount - 1 })
            }



        },
        onError:(err)=>{
            console.log(err);
        }
    });



    const removeWhish = () => {

        addTowish.mutate()
        rmItem(index,id)
    }

    const cardContext = useContext(CardContext)
    const { cardCount, dispatch } = cardContext

    const addToCard = useMutation(async (id) => addTocardApi(id, 1), {
        onSuccess: (res) => {
            
         

            setStatus(res.data.message)
            if(res.data.message==="Item was successfully added to cart."){
                dispatch({ type: 'ADD', cardCount: cardCount + 1 })
                toastMassage(res.data.message,1)
            }
           
            
            if(res.data.error){
                toastMassage(res.data.error.message,2)
            }
        }
     
    });

    const adTOCard = (id) => {
        addToCard.mutate(id)
    }


    const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }
    return (
        
        <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-md w-full px-4 py-3">
             <Toaster />
            <img
                className="h-60"
                src={product.images[0].url}
            />

            <div className="w-full flex flex-col items-center justify-center md:justify-start md:items-start md:px-8">
                <div className="underline w-full text-center md:text-left text-2xl">
                    <b>{product.type}</b>
                    <br />
                    <Link href={`/products/${handle}`} passHref>
                    <b className='cursor-pointer'> {product.name}</b>
                    </Link>
                </div>
                <small>{product.sku.toUpperCase()}</small>
                <p className="text-center md:text-left my-3">
                    {parse(product.short_description)}
                </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center md:w-80">
                <b className="text-green-800 text-3xl my-2">{product.formated_price}</b>
                <Button className="bg-indigo-500 w-full" onClick={() => adTOCard(product.id)}>
                    {
                        addToCard.isLoading ? "added to card .." : "Add to Cart"

                    }
                </Button>
                <small className="underline my-2 cursor-pointer" onClick={removeWhish}>Remove item</small>
                <div className='flex justify-center mt-10'>
                    {loading ?
                        <span className='bg-green-300 p-3 rounded-xl text-white'>{status}</span>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default WishlistProduct
