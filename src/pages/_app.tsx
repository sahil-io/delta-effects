import React, {useEffect} from "react";
import '@/styles/index.scss'
import {useRouter} from "next/router";

import {pageview} from "@/lib/gtag";
import Head from "next/head";
import {DEV_MODE} from "@/lib/constants";

function MyApp({Component, pageProps}) {

    const router = useRouter()

    useEffect(() => {

        if (!DEV_MODE) {
            const handleRouteChange = (url) => {
                pageview(url)
            }
            router.events.on('routeChangeComplete', handleRouteChange)
            return () => {
                router.events.off('routeChangeComplete', handleRouteChange)
            }
        }


    }, [router.events])


    return (
        <>
            <Head>

                {/*<link rel="manifest" href="/manifest.json"/>*/}
                {/*<link href='/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16'/>*/}
                {/*<link href='/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32'/>*/}
                {/*<link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png"></link>*/}
                <meta name="theme-color" content="#1A73E8"/>
                <link rel="shortcut icon" type="image/jpg" href="/static/assets/images/favicon.png"/>

                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}


export default MyApp
