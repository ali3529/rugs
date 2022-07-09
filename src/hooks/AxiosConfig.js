import axios from 'axios';
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL

import { useRouter } from 'next/router'

export const useAxios = () => {
    const router = useRouter();
    const goAuth = () => {

        router.push('/login')
        console.log("acljasnckjanckjbncjsancasnjcnasjnc");
    }

    const getToken = () => {
        const ISSERVER = typeof window === "undefined";
        let token;
        if (!ISSERVER) {
            // Access localStorage

            token = localStorage.getItem('token')
        }
        return token
    }

    const instance = axios.create({
        baseURL: baseUrl,
        // params: { token: true },
        headers: {

            // 'Authorization': 'Bearer ' + getToken(),
            Accept: 'application/json',
            'Content-Type': 'application/json',

        },


    })
    instance.defaults.withCredentials=true
    // instance.defaults.headers.common['Authorization'] = `Bearer ` + getToken();
    instance.interceptors.response.use(function (response) {
    // instance.defaults.withCredentials=true

        return response;
    }, function (error) {
        // Do something with request error
  
        if (error.response.status == 401) {
            console.log("[ressascascsacascss]", error);
            goAuth()
        }
        return Promise.reject(error);
    });

    return { instance }
}


export default useAxios;