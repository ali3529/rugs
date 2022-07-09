import axios from 'axios';
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL
export const useAxiosPublic = () => {
    
    // const getToken = () => {
    //     const ISSERVER = typeof window === "undefined";
    //     let token;
    //     if (!ISSERVER) {
    //         // Access localStorage

    //         token = localStorage.getItem('token')
    //     }
    //     return token
    // }

    const axiosPublic = axios.create({
        baseURL: baseUrl,
        // params: { token: true },
        headers: {

            // 'Authorization': 'Bearer ' + getToken(),
            Accept: 'application/json',
            'Content-Type': 'application/json',

        },


    })
    axiosPublic.defaults.withCredentials=true
    // axiosPublic.defaults.headers.common['Authorization'] = `Bearer ` + getToken();

    return { axiosPublic }
}


export default useAxiosPublic;