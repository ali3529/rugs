import useAxiosPublic from "@/hooks/AxiosConfigPublic"
export const useCoreApis = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL
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

    const getAttributeById = async ({
        setErrors,
        setStatus,
        setLoading,
        setAttribute,
        ...props
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus(null)
        setAttribute(null)
        callApi(`attributes/${props.id}`)
            .then(res => {
                setAttribute(res)
            })
            .catch(error => {

                // if (error.response.status != 422) throw error
                setErrors(error)
            })
        // .finally(() => setLoading(false))
    }
    const getAttributeByIdUrl = async (attrId) => {

        return axiosPublic.get(`attributes/${attrId}`)

        // .finally(() => setLoading(false))
    }

    const getCategories = async ({
        setErrors,
        setStatus,
        setLoading,
        setCategories,
        ...props
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus(null)
        setCategories(null)
        callApi(`categories`, { ...props })
            .then(res => {
                setCategories(res)
            })
            .catch(error => {

                // if (error.response.status != 422) throw error
                setErrors(error)
            })
            .finally(() => setLoading(false))
    }

    const getMainSliders = async ({
        setErrors,
        setStatus,
        setLoading,
        setSliders,
        ...props
    }) => {
        // await csrf
        setLoading(true)
        setErrors([])
        setStatus(null)
        setSliders(null)
        callApi(`sliders?pagination=0&sort=sort_order`, { ...props })
            .then(res => {
                setSliders(res.data)
            })
            .catch(error => {

                // if (error.response.status != 422) throw error
                setErrors(error)
            })
            .finally(() => setLoading(false))
    }


    return {
        getCategories,
        getAttributeById,
        getMainSliders,
        getAttributeByIdUrl

    }
}
