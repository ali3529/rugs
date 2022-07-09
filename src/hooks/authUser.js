import AuthContext from "@/context/AuthContext"
import axios from 'axios'
import useAxios from "@/hooks/AxiosConfig"
import useAxiosPublic from "@/hooks/AxiosConfigPublic"
import { useRouter } from 'next/router'
import { useContext } from "react"

export const authUser = () => {
    const { instance } = useAxios()
    const { axiosPublic } = useAxiosPublic()
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const router = useRouter()

    const authContext = useContext(AuthContext)
    const { authState, authDispatch } = authContext;


    const registerUser = async ({
        setErrors,
        setStatus,
        setLoading,
        registerData,
    }) => {
        // await csrf
        setLoading(true)
        setErrors([null])
        setStatus('Creating Account ...')
        console.log("dsvcjkdsjv", registerData);
        instance.post('/customer/register', registerData, {
            headers: {

                Accept: 'application/json',
                // 'Content-Type': 'application/json',
            }
        }, {
        }).then(res => {

            setStatus(res.data.message)
            setErrors([null])
            senRegisterMail(registerData.email, registerData.first_name, 'content', 'link');
            router.push('/login')
        })
            .catch(error => {

                // if (error.response.status != 422) throw error
                if (error != null && error.response) {
                    // console.log("[eeeeee]", error.response.data);
                    // console.log("[eeeeee]", error.response.data.errors[Object.keys(error.response.data.errors)[0]]);
                    setErrors(error.response.data.errors[Object.keys(error.response.data.errors)[0]])
                    console.log("dsvsdvsdv", error.response);
                }

                // setStatus('problme to Creating Account')
            })
            .finally(() => setLoading(false))
    }

    const loginUser = async ({
        setErrors,
        setStatus,
        setLoading,
        loginData,
        toastMassage
    }) => {
        // await csrf
        setLoading(true)
        setErrors(null)
        setStatus('Login ...')
        axiosPublic.post('/customer/login', loginData, {

        }).then(res => {

            setStatus(res.data.message)
            toastMassage(res.data.message, 1)
            setErrors(null)
            console.log("bbbbb", res.data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('data', JSON.stringify(res.data))

            authDispatch({ type: 'LOGIN', isAuth: true, userData: res.data })

            setTimeout(() => {
                router.push('/profile')
            }, 2000);
        })
            .catch((error, vv) => {

                if (error != null && error.response) {

                    setErrors(error.response.data.error)
                    toastMassage(error.response.data.error, 2)
                    setLoading(false)
                }

            })
            .finally(() => setLoading(false))
    }



    const getUserInfo = async () => {
        axiosPublic.get('/customer/get', {
        }).then(res => {
            // setisAuth(true)
            if (res.data != null && res.data.data.status) {
                authDispatch({ type: 'LOGIN', isAuth: true, userData: res.data })
                console.log("[getdddd]", res.data.data.status);
            }


        })
            .catch(error => {
                // if (error.response.status != 422) throw error
                console.log(error);
            })
    }
    const logOut = async ({
        setErrors,
        setStatus,
        setLoading,
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus('Login ...')
        instance.get('/customer/logout')
            .then(res => {

                // setStatus(res.data.message)
                localStorage.removeItem('token')
                localStorage.removeItem('data')
                authDispatch({ type: 'LOGIN', isAuth: false })
                router.push('/')
                setLoading(false)
                setStatus('logout success')

            })
            .catch(error => {
                console.log(error)
                // if (error.response.status != 422) throw error
                setErrors(error)
                setStatus('problme to Login')
            })
            .finally(() => setLoading(false))
    }

    const profile = async () => {
        // await csrf

        //   return  instance.get('/api/customer/profile')
        return instance.get('/customer/get')
    }

    const editeProfileApi = async (data) => {
        console.log("dsvsdv", data);
        return instance.put('/customer/profile', data)
    }
    const senRegisterMail = (email, name, content, link) => {
        axios.post('/api/registerMail', { email, name, content, link }).then((e) => console.log(e))
    }
    const getOrders = () => {
        return instance.get('/orders');
    }
    const getPayment = () => {
        return instance.get('/transactions');
    }

    return {
        registerUser,
        loginUser,
        getUserInfo,
        logOut,
        profile,
        editeProfileApi,
        getPayment,
        getOrders
    }
}
