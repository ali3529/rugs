// import { useAuth } from '@/hooks/auth'
import Button from '@/components/Elements/Button'
import Input from '@/components/Elements/Input'
import WishlistProduct from '@/components/WishlistProduct'
import { useContext, useEffect, useState } from 'react'
import { useProductsApis } from '@/hooks/productApis'


function Wishlist() {
    const { getWhishlist } = useProductsApis()

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState([])
    const [loading, setLoading] = useState(false)
    // const { user } = useAuth({ middleware: 'guest' })

    // const cart = useCartContext()[0]
    // const [cartItems, setCartItems] = useState(0)

    // useEffect(() => {
    //     let numItems = 0
    //     cart.forEach(item => {
    //         numItems += item.variantQuantity
    //     })
    //     setCartItems(numItems)
    // }, [cart])
    useEffect(() => {
        getWhishlist({
            setErrors,
            setStatus,
            setLoading,
        })
    }, [])





    const removeItem = (index) => {
        setStatus(status.filter((item, indexx) => indexx !== index))


    }


    const [products] = useState([{ id: 1 }, { id: 2 }])

    return (
        <div className="mx-auto max-w-7xl">
            <div className="px-4 sm:px-6 lg:px-8 flex flex-col">
                <h1 className="font-bold text-4xl w-full text-center md:text-left">
                    Wishlist
                </h1>
                <div className="flex w-full text-center flex-col space-y-4 md:space-y-0 py-3 md:flex-row">
                    {/* <Button className="bg-green-500 w-full md:w-auto mb-5 md:mb-0 flex-shrink-0 md:px-8 lg:px-12">
                        Add Item to Cart
                    </Button> */}
                    {/* <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-end md:flex-1 md:content-end md:space-x-3">
                        <span className="text-center">Share WishList</span>
                        <Input
                            className="w-full  md:w-52 lg:w-80"
                            placeholder="Email address"
                        />
                        <Button className="border-indigo-500 text-indigo-500 w-full md:w-auto md:px-8 lg:px-12">
                            Send Email
                        </Button>
                    </div> */}
                </div>

                <div className="flex flex-col w-full space-y-3 my-5">

                    {status?.map((product, index) => (
                        <WishlistProduct
                            key={index}
                            index={index}

                            rmItem={(index, id) => removeItem(index, id)}
                            product={product.product}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wishlist
