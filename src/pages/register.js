import Captch from '@/components/Elements/Captch'
import { authUser } from '@/hooks/authUser'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const { registerUser } = authUser()
    const clientId = "734526491749-hrfbabe94rq76mqaoblmtvlubjl64iq8.apps.googleusercontent.com"
    const [email, setemail] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [password, setpassword] = useState('')
    const [confrimPass, setconfrimPass] = useState('')

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const [captcha, setcaptcha] = useState(false)

    const googleButton = useRef(null);
    const handleRegisterUser = (e) => {
        e.preventDefault();
        const registerData = { first_name: firstName, last_name: lastName, email: email, password: password, password_confirmation: confrimPass }
        captcha ?
            registerUser({
                setErrors,
                setStatus,
                setLoading,
                registerData

            })
            : toastMassage('Please Submit Captcha', 2)
    }

    const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }

    return (

        <section className="mx-auto max-w-7xl body-font relative">
            <Toaster />
            <h1 className="text-4xl mx-4">Create Account</h1>
            <form onSubmit={(e) => handleRegisterUser(e)}>
                <div className="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 sm:mr-10 p-10">
                        <small className="font-normal">
                            <span className="font-bold">Note:</span>All fields are
                            required. Also, your password is case-sensitive (RUGS is
                            different from rugs)
                        </small>
                        <div className="relative mb-4">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-400"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full rounded border  focus:border-indigo-500 focus:ring-2
                            focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8
                            transition-colors duration-200 ease-in-out"
                                onChange={(e) => setfirstName(e.target.value)} value={firstName}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-400">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setlastName(e.target.value)} value={lastName}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-400"
                            >
                                Email Address
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
                        <div className="relative mb-4">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-400">
                                Password
                            </label>
                            <input
                                type="password"
                                id="name"
                                name="name"
                                required
                                type='password'
                                className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setpassword(e.target.value)} value={password}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-400">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="name"
                                name="name"
                                type='password'
                                required
                                className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setconfrimPass(e.target.value)} value={confrimPass}
                            />
                        </div>
                        <div className='flex my-2'>
                            <Captch cp={res => setcaptcha(res)} />
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none
                    hover:bg-indigo-600 rounded text-lg"
                            type='submit'>
                            {
                                loading ? "Creating Account ..." : "Create Account"
                            }

                        </button>

                    </div>
                    <div>


                        <div className='flex flex-col justify-center h-full'>
                            {/* <p className='text-green-500 text-center font-bold text-xl'>{status}</p> */}

                            {errors != null ?
                                <span className="text-xl font-bold text-red-500 ">
                                    {errors}
                                </span>
                                :
                                <span className="text-xl font-bold text-green-500 ">
                                    {status}
                                </span>

                            }
                        </div>

                    </div>
                </div>
            </form>

        </section>







    )
}

export default Register
