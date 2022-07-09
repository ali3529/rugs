import useAxios from "@/hooks/AxiosConfig"
import axios from "axios"
import { useRouter } from 'next/router'
import useAxiosPublic from "@/hooks/AxiosConfigPublic"

export const useCardApi = () => {
    const { instance } = useAxios()
    const { axiosPublic } = useAxiosPublic()
    const addTocard = async ({
        setErrors,
        setStatus,
        setLoading,
        product_id,
        quantity,
    }) => {
        // await csrf
        setLoading(true)

        setStatus('waiting....')
        instance.post(`checkout/cart/add/${product_id}`, {}, { params: { quantity, product_id } })
            .then(res => {

                setStatus(res.data.message)
                console.log("[dddddddd]", res.data);
                if (res.data?.error.code == 0) {
                    setErrors(res.data.error.message)
                }


            })
            .catch(error => {

                console.log(error.respons);
                try {

                } catch (error) {

                }

            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 4000);

            }
            )
    }
    const addTocardApi = async (

        product_id,
        quantity,
    ) => {
        // await csrf

        // return instance.post(`checkout/cart/add/${product_id}`, {}, { params: { quantity, product_id } })
        return axiosPublic.post(`checkout/cart/add/${product_id}`, {}, { params: { quantity, product_id } })
    }
    const minezTocardApi = async (

        product_id,
        quantity,
    ) => {
        // await csrf

        // return instance.post(`checkout/cart/add/${product_id}`, {}, { params: { quantity, product_id } })
        return axiosPublic.post(`checkout/cart/update/${product_id}`, {}, { params: { qty:{cart_item_id:quantity}, product_id } })
    }

    const getCardItem = async ({
        setErrors,
        setStatus,
        setLoading,
        setitems
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        instance.get(`checkout/cart`,)
            .then(res => {
                if (res.data.data != null) {
                    setStatus(res.data.data)
                    setitems(res.data.data.items)
                } else {
                    setStatus(null)
                }
                console.log("[get card]", res.data.data);
                console.log("[get card]", res);
            })
            .catch(error => {

                console.log("[get card]", error);

                // if (error.response.status == 401) {
                //     goAuth()
                // }


            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 4000);

            }
            )
    }

    const getCardItemQ = async () => {

        return axiosPublic.get(`checkout/cart`)


    }

    const removeCartItem = async ({
        setErrors,
        setStatus,
        setLoading,
        cartItemId,
        qqqc

    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus('waiting....')

        instance.get(`checkout/cart/remove-item/${cartItemId}`)
            .then(res => {

                setStatus(res.data.message)
                qqqc()
            })
            .catch(error => {

                try {

                } catch (error) {

                }

            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 4000);

            }
            )
    }


    const getCartItemCount = async () => {
        // await csrf
        return axiosPublic.get(`checkout/cart`)
    }
    const saveShipingMethod = async (s) => {
        // await csrf
        return axiosPublic.post(`checkout/save-shipping`, s)
    }
    const saveOrder = async (s) => {
        // await csrf
        return axiosPublic.post(`checkout/save-order`, s, { withCredentials: true })
    }
    const captureOrder = async (s) => {
        // await csrf
        return axios.get('https://back.rug100.com' + '/paypal/smart-button/create-order')
        // return axiosPublic.get(`checkout/create-order`,s)
    }
    const savePaymentMethod = async (s) => {
        // await csrf
        return axiosPublic.post(`checkout/save-payment`, s)
    }

    const setCoupon = async (code) => {
        console.log("lubfdbilsuil",code);
        return axiosPublic.post(`checkout/cart/coupon`, {code})
    }

    const removeCoupon = async () => {

        return axiosPublic.delete(`checkout/cart/coupon`)
    }

    return {
        addTocard,
        getCardItem,
        removeCartItem,
        getCartItemCount,
        addTocardApi,
        getCardItemQ,
        saveOrder,
        saveShipingMethod,
        savePaymentMethod,
        captureOrder,
        setCoupon,
        removeCoupon,
        minezTocardApi
    }

}

