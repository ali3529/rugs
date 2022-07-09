import { useEffect, useState } from "react"
import { authUser } from '@/hooks/authUser'
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from "react-google-recaptcha";
import Captch from "@/components/Elements/Captch";
import {
    faFacebook,

} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Login = () => {
    const { loginUser } = authUser()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [errors, setErrors] = useState(null)
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const [captcha, setcaptcha] = useState(false)
    const submitLogin = (e) => {
        e.preventDefault();
        const loginData = { email, password }
        captcha ?
            loginUser({
                setErrors,
                setStatus,
                setLoading,
                loginData,
                toastMassage

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
        <section className="mx-auto max-w-7xl body-font relative mt-8 ">
            <Toaster />
          
            <div className="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">

                {/* Login */}
                
                <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full  mt-8 md:mt-0">

                    <span className="text-xl font-bold text-green-500 ">
                        {loading ? status : ''}
                    </span>
                    <h1 className="text-xl font-bold text-gray-600 mb-3">REGISTERED CUSTOMERS</h1>

                    <form onSubmit={(e) => submitLogin(e)}>

                        <span className="text-md text-gray-500 font-bold">
                            If you have an account, sign in with your email address.
                        </span>
                        <div className="relative mb-4 flex flex-col">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-400">
                                Email*
                            </label>
                            <input
                                type="email"
                                id="name"
                                name="name"
                                required
                                className="w-full sm:w-3/4 rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setemail(e.target.value)} value={email}
                            />
                        </div>
                        <div className="relative mb-4 flex flex-col">
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
                                className="w-full sm:w-3/4 rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setpassword(e.target.value)} value={password}
                            />
                        </div>
                        <div className="flex flex-row space-x-5 items-center">
                            <button className="text-white bg-indigo-500 border-0 py-2 px-6   focus:outline-none
 hover:bg-indigo-600 rounded text-lg"
                                type="submit"
                            >
                                {
                                    loading ? "Siging In ..." : "Sign In"
                                }


                            </button>

                            <a href="/forget-password"><p className="underline text-gray-500">Forgot Your Password?</p></a>
                        </div>
                       <div className="flex"> <Captch cp={res => setcaptcha(res)} /></div>
                    </form>
                    <a href="https://back.rug100.com/customer/social-login/google">
                        <button className="text-black bg-white-300 mt-6  py-2 px-6 w-full sm:w-3/4 focus:outline-none
                                            border-2 rounded text-lg"

                        >
                            <div className="flex flex-row justify-center items-center space-x-4">
                                <img src="/images/google.svg" className="w-8" />
                                <span>Continue With Google</span>
                            </div >


                        </button>

                    </a>
                    <a href="https://back.rug100.com/customer/social-login/facebook">
                        <button className="text-black bg-white-300 mt-1  py-2 px-6 w-full sm:w-3/4 focus:outline-none
                                            border-2 rounded text-lg"

                        >
                            <div className="flex flex-row justify-center items-center space-x-4">
                                <FontAwesomeIcon icon={faFacebook} className='w-10 h-10 text-blue-500' />
                                <span>Continue With Facebook</span>
                            </div >


                        </button>

                    </a>



                </div>
                {/* register */}
                <div className="lg:w-1/2 md:w-1/2 sm:mr-10 py-8 sm:py-0 ">
                    <span className="text-xl font-bold text-gray-600">NEW CUSTOMERS</span>
                    <p className="my-6 text-sm text-gray-500">
                    Creating an account has many benefits: check out faster, keep more than one address, track orders and more.
                    </p>
                
                    <a href="/register">
                        <button className="w-50 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Create An Account
                        </button>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Login
