// import 'tailwindcss/tailwind.css'
import Layout from '@/components/Layouts/Layout'
import SEO from '@/components/Layouts/SEO'
import '@/styles/globals.css'
import React from 'react'
import Router from "next/router"
import { useState } from "react"
import TopBarProgress from "react-topbar-progress-indicator"

function MyApp({ Component, pageProps }) 

{TopBarProgress.config({
    barColors: {
      "0": "#fff",
      "1.0": "#fff"
    },
    shadowBlur: 5
  })
    const [progress, setProgress] = useState(false)
    Router.events.on("routeChangeStart", () => {
        setProgress(true) 
        //function will fired when route change started
     })
  
     Router.events.on("routeChangeComplete", () => {
        setProgress(false) 
        //function will fired when route change ended
     })

    return (
            <Layout>
                  {progress && <TopBarProgress  />}
                <SEO title={process.env.siteTitle} />
                <Component {...pageProps} />
            </Layout>
    )
}

export default MyApp
