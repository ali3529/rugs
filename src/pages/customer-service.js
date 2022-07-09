import axios from 'axios'
import React, { useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import toast, { Toaster } from 'react-hot-toast';
import SubmitedContact from '@/components/Layouts/SubmitedContact';

function customerService() {
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [text, settext] = useState('')

    const submit = (e) => {
        e.preventDefault();
        console.log(email, name, phone, text);
        SaveContactData({ email, name, phone, text })
    }

    const SaveContactData = (data) => {
        contactData.mutate(data)
    }

    const contactData = useMutation(async (data) => axios.post('/api/contact_us', data), {
        onSuccess: (res) => {
            console.log("ascasc", res.status);
            if(res.status==201){
                toastMassage("Your Data Saved We Call You",1)
                emptyInput()
            }
           
        }
    })

    const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }

    const emptyInput=()=>{
        setemail('')
        setname('')
        setphone('')
        settext('')
    }

    return (
        <div className="mx-auto max-w-7xl body-font relative">
            <Toaster />
            <div className='grid grid-rows-1 sm:grid-cols-2 space-x-4'>
                {/* contact us */}
                <div className='mx-4'>
                    <h1 className="text-4xl ">Contact Us</h1>
                    <h3 className='text-sm text-gray-500'>All fields are required.</h3>
                    <form onSubmit={(e) => submit(e)}>
                        <div>
                            <div className='flex flex-row space-x-3'>
                                <div className="relative mb-4 w-1/2">
                                    <label
                                        htmlFor="name"
                                        className="leading-7 text-sm text-gray-800 font-bold">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onChange={(e) => setname(e.target.value)} value={name}
                                    />
                                </div>

                                <div className="relative mb-4 w-1/2">
                                    <label
                                        htmlFor="name"
                                        className="leading-7 text-sm text-gray-800 font-bold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onChange={(e) => setemail(e.target.value)} value={email}
                                    />
                                </div>
                            </div>

                            <div className="relative mb-4">
                                <label
                                    htmlFor="name"
                                    className="leading-7 text-sm text-gray-800 font-bold">
                                    phone
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onChange={(e) => setphone(e.target.value)} value={phone}
                                />
                            </div>

                            <div className="relative mb-4">
                                <label
                                    htmlFor="name"
                                    className="leading-7 text-sm text-gray-800 font-bold">
                                    text
                                </label>
                                <textarea
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                                    onChange={(e) => settext(e.target.value)} value={text}
                                />
                            </div>

                            <button className="text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none
                     hover:bg-indigo-600 rounded text-lg"
                                type='submit'
                            >
                                {
                                    contactData.isLoading ? "submiting ..." : "submit"
                                }


                            </button>


                        </div>
                    </form>

                    {/* socail media */}
                    <div></div>
                    {/* mapp */}
                    <div></div>

                    {/* contact */}
                    <div></div>


                </div>

                {/* aboute us */}
                <div className='p-6'>
                    <span className="text-xl font-bold">About us</span>
                    <p className="my-6 text-sm">
                        Company Information
                    </p>
                    <p className="my-6 text-sm">
                        Phone (704) 763-1111
                    </p>
                    <p className="my-6 text-sm">
                        Email info@rug100.com
                    </p>
                    <p className="my-6 text-sm">
                        Address 9315-C Monroe Rd, Charlotte, NC 28270, USA
                    </p>
                    <p className="my-6 text-sm">
                        Magic Rugs is a family-owned importer and dealer of fine, handmade oriental rugs. We specialize in finding the best quality, one-of-a-kind rugs, and we bring them to you at the most affordable prices. We believe every home deserves an heirloom quality carpet
                    </p>
                </div>
            </div>


            {/* <div className='flex justify-center rounded-2xl mt-5'>
                    <iframe className='rounded-3xl' src="https://www.google.com/maps?ll=35.144375,-80.741276&z=15&t=m&hl=en&gl=IN&mapclient=embed&q=9315+Monroe+Rd+Charlotte,+NC+28270+USA"
                        width={1116} height={463} style={{ border: 0 }}
                        allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </div> */}
            <div className="row mt-10">
                <div class="col-md-12 map_sec">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6524.981887720811!2d-80.741276!3d35.144375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885421403663bd9f%3A0x41b6b49a0e43a417!2s9315%20Monroe%20Rd%2C%20Charlotte%2C%20NC%2028270%2C%20USA!5e0!3m2!1sen!2sin!4v1590670402045!5m2!1sen!2sin"
                        height={'300px'} frameborder="0"
                        className='w-full'
                        allowfullscreen="" aria-hidden="false" tabindex="0">
                    </iframe>
                </div>
            </div>

            <div className='border-t border-black mt-10'>
                <SubmitedContact/>

            </div>
        </div>
    )
}

export default customerService