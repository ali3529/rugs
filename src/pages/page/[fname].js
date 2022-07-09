import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactHtmlParser from "react-html-parser";
import { useRouter } from 'next/router'

function faq() {
    const [data, setdata] = useState({})
    const [loading, setloading] = useState(false)
    const router = useRouter()
    const { fname } = router.query
    // const query=`query cmspage {
    //     cmsPage(id:10) {


    //       translations {
    //         id
    //         urlKey
    //         metaDescription
    //         metaTitle
    //         pageTitle
    //         metaKeywords
    //         htmlContent


    //       }

    //       success
    //     }
    //   }
    //   `;

    // const setQ = () => fname == "faq" ? 12 : fname == "privacy-policy" ? 11 :
    //     fname == "about-vintage-rugs" ? 13 :
    //         fname == "shipping-policy" ? 10 :
    //             fname == "why-buy-from-magic-rugs" ? 15 :
    //                 fname == "rewards" ? 14 :
    //                     fname == "trade-program" ? 17 :
    //                         fname == "buyers-retailers-program" ? 18 : 
    //                         fname == "cutomer-service" ? 7 : ''  
                            
                            
                            const setQ = () => fname == "faq" ? '62c971778b7536772a213c51' : fname == "privacy-policy" ? '62c972458b7536772a213c6d' :
        fname == "about-vintage-rugs" ? '62c971ac8b7536772a213c59' :
            fname == "shipping-policy" ? '62c9718b8b7536772a213c55' :
                fname == "why-buy-from-magic-rugs" ? '62c9722a8b7536772a213c69' :
                    fname == "rewards" ? '62c971cc8b7536772a213c5d' :
                        fname == "trade-program" ? '62c971ec8b7536772a213c61' :
                            fname == "buyers-retailers-program" ? '62c971ff8b7536772a213c65' : 
                            fname == "cutomer-service" ? 7 : ''
    // fname == "about-us" ? 1 : 


    const options = {
        method: 'POST',
        url: 'https://back.rug100.com/graphql',
        headers: {
            'content-type': 'application/json',
        },
        data: {
            query: ` query cmspage {
                    cmsPage(id:${setQ()}) {
                  
                      
                      translations {
                        id
                        urlKey
                        metaDescription
                        metaTitle
                        pageTitle
                        metaKeywords
                        htmlContent
                       
                    
                      }
                    
                      success
                    }
                  }
                  `
        }
    };
    useEffect(() => {
        if (fname != undefined) {
            setloading(true)
            axios.get('/api/blogapi/' +setQ() ).then(res => {
                setdata(res.data.data)
                setloading(false)
                console.log("sevdsvsd", res.data)
            }).catch((e) => console.log("sevdsvsd_err", e))
        }
    }, [fname])

   
    return (
        <div className='flex flex-col items-center justify-center py-8 mx-auto max-w-7xl sm:px-0 px-5'>
            {
                loading ? <p>Loading...</p>
                    : <div className='w-full'>
                        <h1 className='text-lg font-bold'>{data?.title}</h1>
                        <span className='mt-8 w-full'>
                            {ReactHtmlParser(data?.discription)}
                        </span>

                    </div>
            }

        </div>
    )
}

export default faq