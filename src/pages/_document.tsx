import Document, {Head, Html, Main, NextScript} from "next/document";
import {NextWebVitalsMetric} from "next/app";
import React from "react";


class NextSite extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>

                </body>
            </Html>
        );
    }
}

export function reportWebVitals({id, name, label, value}: NextWebVitalsMetric) {
    window.gtag('event', name, {
        event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
        value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
        event_label: id,
        non_interaction: true,
    })
}


export default NextSite;
