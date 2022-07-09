import axios from "axios"
import axiosconfig from '@/hooks/AxiosConfig'
import useAxios from "@/hooks/AxiosConfig"

import useAxiosPublic from "@/hooks/AxiosConfigPublic"
export const useProductsApis = () => {
    var qs = require('qs');
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const { instance } = useAxios()
    const { axiosPublic } = useAxiosPublic()


    async function callApi(api, params) {
        const fetchUrl = `${baseUrl}/${api}`
        var url = new URL(fetchUrl)
        url.search = new URLSearchParams(params).toString()
        const fetchOptions = {
            endpoint: fetchUrl,
            // method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ params }),
        }

        try {
            const data = await fetch(url, fetchOptions).then(response =>
                response.json(),
            )
            return data
        } catch (error) {
            throw new Error(error)
            // throw new Error('Could not fetch products!')
        }
    }

    const allProducts = async ({
        setErrors,
        setStatus,
        setLoading,
        setPaginate,
        attribute,
        ...props
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus(null)
        setPaginate(null)
        // console.log(`api/v1/products?`, attribute?.attribute, { ...props })
        callApi('products', attribute?.attribute, { ...props })
            .then(res => {
                setPaginate(res)

            })
            .catch(error => {

                // if (error.response.status != 422) throw error
                setErrors(error)
            })
            .finally(() => setLoading(false))
    }


    const getProduct = async ({
        setErrors,
        setStatus,
        setLoading,
        setProductData,
        ...props
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus(null)
        setProductData(null)
        axiosPublic.get(`/products/${props.id}`, { ...props })
            .then(res => {
                setProductData(res.data.data)
                console.log('[get data]', res.data.data);
            })
            .catch(error => {

                // if (error.response.status != 422) throw error
                setErrors(error)
            })
            .finally(() => setLoading(false))
    }

    const getAdditionalInformation = async ({
        setErrors,
        setStatus,
        setLoading,
        setProductInformation,
        ...props
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus(null)
        setProductInformation(null)
        axiosPublic.get(`/product-additional-information/${props.id}`, {
            ...props,
        })
            .then(res => {
                setProductInformation(res.data.data)
            })
            .catch(error => {
                console.log(error)
                // if (error.response.status != 422) throw error
                setErrors(error)
            })
            .finally(() => setLoading(false))
    }

    const createReview = async ({
        setErrors,
        setStatus,
        setLoading,
        setCloseModal,
        reveiw,
        img,
        productId,
        ...props
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus('')
        setCloseModal(false)
        instance.post(baseUrl + `/reviews/${productId}/create`, img, { headers: { "Content-Type": "multipart/form-data" } }).then(res => {

            setStatus(res.data.message)
        })
            .catch(error => {
                console.log(error)
                // if (error.response.status != 422) throw error
                setErrors(error)
            })
            .finally(() => {
                setCloseModal(true)
                setLoading(false)
            }
            )
    }

    const getProductPaginate = async ({
        setErrors,
        setStatus,
        setLoading,
        setPaginate,
        attribute,
        page,
        ...props
    }) => {
        // await csrf
        setLoading(true)
        // setErrors([])
        // setStatus(null)
        // setPaginate(null)
        // axiosconfig.get(`/api/v1/products?page=${page}&${attribute?.attribute}&token=true`, { ...props },{
        instance.get(`/products?page=${page}&${attribute?.attribute}`, { ...props })
            .then(res => {
                setPaginate(res.data)

            })
            .catch(error => {

                // if (error.response.status != 422) throw error
                setErrors(error)
            })
            .finally(() => setLoading(false))
    }
    const getProductPaginateFilter = async (attribute, page, limit) => {
        console.log("[dddsad]", attribute);

        // return axiosPublic.get(`/api/v1/products`, { params: attribute.q.map(e=>e) })

        // return axiosPublic.get(`/products?${attribute.q // 👈 null and undefined check
        //     && Object.keys(attribute.q).length !== 0 ? attribute.q.map(e => e + '&') : ''}`, { params: { page ,limit} })

        // return axiosPublic.get(`/products?${attribute // 👈 null and undefined check
        //     && Object.keys(attribute).length !== 0 ? attribute.map(e => e.filter + '&') : ''}`, { params: { page, limit } })

return axiosPublic.get(`/products?${attribute}`, { params: { page, limit } })


    }

    const getSearchSuggest = async (name, limit) => {
        console.log("[dddsad]", limit);
        console.log("[dddsad attr]", name);
        return axiosPublic.get(`/products?name${name}`, { params: { limit } })

    }


    const productReview = async ({
        setErrors,
        setStatus,
        setLoading,
        productId,
        ...props
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus('')
        instance.get(baseUrl + `/reviews`, { params: { limit: 10 } }).then(res => {

            setStatus(res.data)

        })
            .catch(error => {

                // if (error.response.status != 422) throw error
                setErrors(error)
            })
            .finally(() => {
                setLoading(false)
            }
            )
    }

    const addToWhishlist = async (productId) => {
        return instance.get(`/wishlist/add/${productId}`)

    }

    const addToWhishlistAllRugs = async (productId) => {
        return axiosPublic.get(`/wishlist/add/${productId}`)

    }

    const getWhishlist = async ({
        setErrors,
        setStatus,
        setLoading,
        ...props
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus([])

        instance.get(`/wishlist`)
            .then(res => {

                setStatus(res.data.data)

            })
            .catch(error => {
                // if (error.response.status == 401) {
                //     goAuth()
                // }
                setErrors(error)
            })
            .finally(() => {

                setLoading(false)


            }
            )
    }

    const getWhishlistCount = async () => {
        // await csrf
        return axiosPublic.get(`/wishlist`)
    }

    const getAttrebutes = async () => {
        // await csrf
        return axiosPublic.get(`/attributes`, { params: { pagination: 0 } })
    }

    const createAddress = async (address) => {
        // await csrf
        return instance.post(`/addresses/create`, address)
    }
    const getAddresses = async () => {
        // await csrf
        return axiosPublic.get(`/addresses`)
    }

    const delAddresses = async (id) => {
        // await csrf
        return instance.delete(`/addresses/${id}`)
    }

    const editeAddresses = async (address) => {
        // await csrf
        console.log(address);
        return instance.put(`/addresses/${address.id}`,address)
    }
  const choosePayAddress = async (address) => {
        // await csrf
        console.log(address);
        return instance.post(`/checkout/save-address`,address)
    }
    const choosePayAddressGest = async (address) => {
        // await csrf
        console.log(address);
        return axiosPublic.post(`/checkout/save-address`,address)
    } 
    const getGeustOrderStatus = async (data) => {
        // await csrf
        console.log(data);
        return axiosPublic.post(`/order-status`,data)
    }


    return {
        allProducts,
        getProduct,
        getAdditionalInformation,
        createReview,
        getProductPaginate,
        productReview,
        addToWhishlist,
        getWhishlist,
        getWhishlistCount,
        getAttrebutes,
        getProductPaginateFilter,
        getSearchSuggest,
        createAddress,
        getAddresses,
        delAddresses,
        editeAddresses,
        choosePayAddress,
        addToWhishlistAllRugs,
        choosePayAddressGest,
        getGeustOrderStatus
    }
}
