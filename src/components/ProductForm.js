import { useState } from 'react'
import Button from './Elements/Button'
import Input from './Elements/Input'
import parse from 'html-react-parser'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { useCartContext, useAddToCartContext } from '@/context/Store'

function ProductForm({ productInformation, product, description }) {
    const [selectedTab, setSelectedTab] = useState(3)
    // const [quantity, setQuantity] = useState(1)
    // const [variantId, setVariantId] = useState(variants[0].node.id)
    // const [variant, setVariant] = useState(variants[0])
    // const isLoading = useCartContext()[2]
    // const addToCart = useAddToCartContext()

    // const atcBtnStyle = isLoading
    //     ? `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex
    //                   justify-center items-baseline  hover:bg-palette-dark opacity-25 cursor-none`
    //     : `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex
    //                   justify-center items-baseline  hover:bg-palette-dark`

    // function handleSizeChange(e) {
    //     setVariantId(e)
    //     // send back size change
    //     const selectedVariant = variants.filter(v => v.node.id === e).pop()
    //     setVariantPrice(selectedVariant.node.price)

    //     // update variant
    //     setVariant(selectedVariant)
    // }

    // async function handleAddToCart() {
    //     const varId = variant.node.id
    //     // update store context
    //     if (quantity !== '') {
    //         addToCart({
    //             productTitle: title,
    //             productHandle: handle,
    //             productImage: mainImg,
    //             variantId: varId,
    //             variantPrice: variant.node.price,
    //             variantTitle: variant.node.title,
    //             variantQuantity: quantity,
    //         })
    //     }
    // }

    // function updateQuantity(e) {
    //     if (e === '') {
    //         setQuantity('')
    //     } else {
    //         setQuantity(Math.floor(e))
    //     }
    // }
    const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }

    const [fmale, setfmale] = useState('')
    const [email, setemail] = useState('')
    const [massage, setmassage] = useState('')
    const [name, setname] = useState('')
    const [subject, setsubject] = useState('')
    const share = useMutation(async (data) => axios.post('/api/share_rug_mail', data), {
        onSuccess: (res) => {
            toastMassage("Rug Share Whit Your Friend",1)
        },
        onError: (err) => console.log("dsvdv", err)
    });


    const shareRugs = () => {
        share.mutate({ email, massage, name, subject, femail: fmale })
    }

    return (
        <>
<Toaster />
            <div className="w-full md:w-full md:pl-4">
                <div className="flex mb-4 text-center">
                    <a
                        onClick={() => setSelectedTab(4)}
                        className={`flex-grow py-2 text-sm px-1 cursor-pointer  ${selectedTab === 4
                            ? 'text-indigo-500 border-b-4 border-indigo-500'
                            : 'border-b-2 border-gray-300'
                            }`}>
                        Description

                    </a>
                    <a
                        onClick={() => setSelectedTab(3)}
                        className={`flex-grow py-2 text-sm px-1 cursor-pointer  ${selectedTab === 3
                            ? 'text-indigo-500 border-b-4 border-indigo-500'
                            : 'border-b-2 border-gray-300'
                            }`}>
                        Rug Overview
                    </a>
                    {/* <a
                        onClick={() => setSelectedTab(1)}
                        className={`flex-grow py-2 text-sm px-1 cursor-pointer ${selectedTab === 1
                            ? 'text-indigo-500 border-b-4 border-indigo-500'
                            : 'border-b-2 border-gray-300'
                            }`}>
                        Ask A Question
                    </a> */}
                    <a
                        onClick={() => setSelectedTab(2)}
                        className={`flex-grow py-2 text-sm px-1 cursor-pointer ${selectedTab === 2
                            ? 'text-indigo-500 border-b-4 border-indigo-500'
                            : 'border-b-2 border-gray-300'
                            }`}>
                        Share
                    </a>
                    <a
                        onClick={() => setSelectedTab(5)}
                        className={`flex-grow py-2 text-sm px-1 cursor-pointer ${selectedTab === 5
                            ? 'text-indigo-500 border-b-4 border-indigo-500'
                            : 'border-b-2 border-gray-300'
                            }`}>
                        Rug Pad
                    </a>
                    <a
                        onClick={() => setSelectedTab(6)}
                        className={`flex-grow py-2 text-sm px-1 cursor-pointer ${selectedTab === 6
                            ? 'text-indigo-500 border-b-4 border-indigo-500'
                            : 'border-b-2 border-gray-300'
                            }`}>
                        Note
                    </a>
                </div>
                <div className={`leading-relaxed ${selectedTab === 3 ? 'block' : 'hidden'}`}>
                    <table className="text-sm w-full bg-white">
                        {productInformation &&
                            productInformation.map((item, index) => {
                                if (item.value) {
                                    return (
                                        <tr
                                            key={index}
                                            className="border-t border-b">
                                            <td className="py-1 bg-gray-100 px-3">
                                                <b>{item.label}</b>
                                            </td>
                                            <td className="px-3">
                                                {item.value}
                                            </td>
                                        </tr>
                                    )
                                }
                            })}
                    </table>
                </div>
                {/* <div className={`${selectedTab === 1 ? 'block' : 'hidden'} w-full flex justify-center `}>
                    <div className='w-2/3'>
                        <label className="flex flex-col space-y-2 text-gray-900 my-2">
                            Name
                            <Input placeholder="Name" className="px-1 py-2 my-2" />
                        </label>
                        <label className="flex flex-col space-y-2 text-gray-900 my-2">
                            Email
                            <Input placeholder="Email" className="px-1 py-2 my-2" />
                        </label>
                        <label className="flex flex-col space-y-2 text-gray-900 my-2">
                            Phone Number
                            <Input
                                placeholder="Phone Number"
                                className="px-1 py-2 my-2"
                            />
                        </label>
                        <label className="flex flex-col space-y-2 text-gray-900 my-2">
                            Question
                            <textarea
                                rows={7}
                                placeholder="Message"
                                className="px-1 py-2 my-2"
                            />
                        </label>
                        <Button className="w-full text-green-500 border-green-700">
                            Ask Question
                        </Button>
                    </div>
                </div> */}
                <div className={`${selectedTab === 2 ? 'block' : 'hidden'} w-full flex justify-center `}>
                    <div className='w-2/3'>
                        <label className="flex flex-col space-y-2 text-gray-900 my-2">
                            Your Name
                            <Input
                                placeholder="Your Name"
                                className="px-1 py-2 my-2"
                                onChange={(e) => setname(e.target.value)} value={name}
                            />
                        </label>
                        <label className="flex flex-col space-y-2 text-gray-900 my-2">
                            Friend`s Email
                            <Input
                                placeholder="Friend`s Email"
                                className="px-1 py-2 my-2"
                                onChange={(e) => setfmale(e.target.value)} value={fmale}
                            />
                        </label>
                        <label className="flex flex-col space-y-2 text-gray-900 my-2">
                            Your Email
                            <Input
                                placeholder="Your Email"
                                className="px-1 py-2 my-2"
                                onChange={(e) => setemail(e.target.value)} value={email}
                            />
                        </label>
                        <label className="flex flex-col space-y-2 text-gray-900 my-2">
                            Subject
                            <Input
                                placeholder="Subject"
                                value={`Check out this ${product.name}!`}
                                className="px-1 py-2 my-2"
                                onChange={(e) => setsubject(e.target.value)} value={subject}
                            />
                        </label>
                        <label className="flex flex-col space-y-2 text-gray-900 my-2">
                            Message
                            <textarea
                                rows={7}
                                placeholder="Message"
                                className="px-1 py-2 my-2"
                                onChange={(e) => setmassage(e.target.value)} value={massage}>
                                Hi, I found this rug and I think it would be great
                                for your home!
                            </textarea>
                        </label>
                        <Button className="w-full text-indigo-500 border-indigo-400" onClick={shareRugs}>
                            {share.isLoading ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg> : "Send to Friend"}
                        </Button>
                    </div>
                </div>

                <div className={`${selectedTab === 4 ? 'block' : 'hidden'}  w-full flex `}>
                    <p className="my-2 text-justify w-2/3">{parse(description)}</p>
                </div>

                <div className={`${selectedTab === 5 ? 'block' : 'hidden'}  w-full flex flex-col`}>
                    <p className="my-2 text-justify w-2/3">We offer two types of rug pads to compliment your one-of-a-kind rug. If you're not sure whether you need a rug pad, check out this article to help you decide. We always encourage customers to use rug pads. They offer protection for your investment, as well as for your floors. When you buy a rug pad from us, it will come to you custom-sized to fit your purchase.</p>
                    <div className='my-5'>
                        <p className='text-indigo-400 text-xl'>Eco-Friendly Skid-Proof Regular Rug Pad for Area Rugs & Runners</p>
                        <p className="my-2 text-justify w-2/3">This is a great choice for an entry-level rug pad. You'll get a layer of protection for both your rug and your floors. Made of vinyl-coated polyester, this rug pad provides skid-proof technology without causing damage to fabric and color dyes. Pricing starts at $18.</p>
                    </div>
                    <div className='my-5'>
                        <p className='text-indigo-400 text-xl'>
                            Eco-Friendly Non-Slip Extra Cushioned Superloc Rug Pad for Area Rugs & Runners</p>
                        <p className="my-2 text-justify w-2/3">The extra cushion of the Superloc Rug Pad is well worth the investment, especially if you expect a lot of foot traffic or desire a high level of protection for your one-of-a-kind. This rug pad is designed with a combination of high quality felt and rubber to achieve skid-proof and breathable cushioning under your rug. Pricing starts at $31.</p>
                    </div>
                </div>

                <div className={`${selectedTab === 6 ? 'block' : 'hidden'}  w-full flex flex-col`}>

                    <div className='my-5'>
                        <p className='text-xl font-bold text-black'>
                            Shipping</p>
                        <p className="my-2 text-justify w-2/3">
                            Always free shipping in the continental U.S. Our rugs arrive to customers on average 3 to 5 business days after order confirmation. Estimate your specific shipping rates directly in your cart or get more info about shipping on our FAQ page.
                        </p>
                    </div>
                    <div className='my-5'>
                        <p className='text-xl font-bold text-black'>
                            Returns & Cancellations</p>
                        <p className="my-2 text-justify w-2/3">
                            Customer satisfaction is very important to us! That's why we offer free returns for defective, damaged or wrongly shipped products. If you wish to cancel your order, contact us immediately. If your item has not yet shipped, we will be happy to adjust or cancel it. Find out more about returns and cancellations on our Returns & Cancellations page.
                        </p>
                    </div>
                    <div className='my-5'>
                        <p className='text-xl font-bold text-black'>

                            Color</p>
                        <p className="my-2 text-justify w-2/3">
                            We work hard to make sure you are confident in your shopping experience. We never "filter" or adjust our product images. But sometimes your own device settings may alter the colors on the screen. We are happy to send additional images or assist you in other ways so you can be sure about your rug.
                        </p>
                    </div>
                    <div className='my-5'>
                        <p className='text-xl font-bold text-black'>

                            Condition</p>
                        <p className="my-2 text-justify w-2/3">
                            Always check the product details for a description of your rug's condition. Our rug experts carefully assess each rug for authenticity and provide a detailed description of both age and condition. Each rug is professionally cleaned before it arrives on our floor. You can learn more about these topics in our FAQ page, About Our Rugs.
                        </p>
                    </div>
                    <div className='my-5'>
                        <p className='text-xl font-bold text-black'>
                            Rug Sizing & Styling
                        </p>
                        <p className="my-2 text-justify w-2/3">
                            Finding the perfect fit for your one-of-a-kind rug can be a challenge. Take a look at our Ultimate Rug Size Guide for guidance on how to size your rug for any room. We also offer rug design consultations for free. Just contact us.
                        </p>
                    </div>
                    <div className='my-5'>
                        <p className='text-xl font-bold text-black'>
                            Rewards Program
                        </p>
                        <p className="my-2 text-justify w-2/3">
                            We are a local, family-owned business and we appreciate your business! That's why we offer reward points with every purchase. You can use your reward points any time, just like cash, and reward yourself with a discount on future purchases. Sign up for the Magic Rugs Rewards Program.
                        </p>
                    </div>
                    <div className='my-5'>
                        <p className='text-xl font-bold text-black'>
                            Trade & Retailer Programs
                        </p>
                        <p className="my-2 text-justify w-2/3">
                            We value our trade and retailer partners within the business community. We offer exclusive savings, discounts and tailored one-on-one customer service for our business partners. Open an account today and enjoy the benefit of having professional rug experts on your team! Sign up for the Magic Rugs Trade Program or Retailer Program.
                        </p>
                    </div>
                </div>
            </div>
        </>
        // <div className="w-full">
        //     <div className="flex justify-start space-x-2 w-full">
        //         <div className="flex flex-col items-start space-y-1 flex-grow-0">
        //             <label className="text-gray-500 text-base">Qty.</label>
        //             <input
        //                 type="number"
        //                 inputMode="numeric"
        //                 id="quantity"
        //                 name="quantity"
        //                 min="1"
        //                 step="1"
        //                 value={quantity}
        //                 onChange={e => updateQuantity(e.target.value)}
        //                 className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
        //             />
        //         </div>
        //         <div className="flex flex-col items-start space-y-1 flex-grow">
        //             <label className="text-gray-500 text-base">Size</label>
        //             <select
        //                 id="size-selector"
        //                 name="size-selector"
        //                 onChange={event => handleSizeChange(event.target.value)}
        //                 value={variantId}
        //                 className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light">
        //                 {variants.map(item => (
        //                     <option
        //                         id={item.node.id}
        //                         key={item.node.id}
        //                         value={item.node.id}>
        //                         {item.node.title}
        //                     </option>
        //                 ))}
        //             </select>
        //         </div>
        //     </div>
        //     <button
        //         className={atcBtnStyle}
        //         aria-label="cart-button"
        //         onClick={handleAddToCart}>
        //         Add To Cart
        //         <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" />
        //     </button>
        // </div>
    )
}

export default ProductForm
