import React from "react";

import {FONT_FAMILY_SANS} from '@/styles/css-config';
import {NextSeo} from "next-seo";
import {useRouter} from "next/router";
import {ORG_NAME, SITE_URL} from "@/lib/constants";
import {SEO_Props} from "@/lib/SEOMetaData";


const PageContainer = ({title, description, thumbnail, shouldIndex, children}: SEO_Props) => {

    const {asPath} = useRouter()

    return (
        <div>
            <NextSeo titleTemplate="%s" title={title} description={description}
                     noindex={!shouldIndex}
                     openGraph={{
                         url: `${SITE_URL}${asPath}`,
                         title: title,
                         images: [
                             {
                                 url: thumbnail,
                             },
                         ],
                         description: description,
                         site_name: ORG_NAME,
                     }}
                     canonical={`${SITE_URL}${asPath}`}
                     nofollow={!shouldIndex}/>
            {children}
            <style jsx global>
                {`
          html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
            height: 100%;
            box-sizing: border-box;
            touch-action: manipulation;
            font-feature-settings: 'case' 1, 'rlig' 1, 'calt' 0;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            position: relative;
            min-height: 100%;
            margin: 0;
            line-height: 1.65;
            font-family: ${FONT_FAMILY_SANS};
            font-size: 16px;
            font-weight: 400;
            min-width: 320px;
            direction: ltr;
            font-feature-settings: 'kern';
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            scroll-behavior: smooth;
          }
          html,
          body {
            background-color: #fff;
            color: #111;
          }
          ::selection {
            background-color: #0070f3;
            color: #fff;
          }
         
          svg {
            shape-rendering: crispEdges;
          }

          svg path,
          svg circle {
            shape-rendering: geometricprecision;
          }
        `}
            </style>
            <div className={'hidden'} dangerouslySetInnerHTML={{
                __html: `<svg>
    <defs>
        <g id="add-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>add-circle</title><line class="a" x1="12" y1="7.5" x2="12" y2="16.5"></line><line class="a" x1="7.5" y1="12" x2="16.5" y2="12"></line><circle class="a" cx="12" cy="12" r="11.25"></circle></svg>
        </g>
        <g id="custom-check-round">
            <svg viewBox="0 0 15 15" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0C3.36455 0 0 3.36455 0 7.5C0 11.635 3.36455 15 7.5 15C11.6355 15 15 11.635 15 7.5C15 3.36455 11.6355 0 7.5 0Z" fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5471 4.57982L6.23123 9.75527L3.45305 7.05073C3.3285 6.92982 3.12941 6.93255 3.00805 7.05709C2.88714 7.18164 2.88986 7.38027 3.01441 7.50164L6.01214 10.4198C6.03168 10.4394 6.05623 10.4503 6.07941 10.4635C6.09077 10.4698 6.10077 10.4803 6.11305 10.4853C6.15077 10.5007 6.19123 10.5089 6.23123 10.5089C6.27123 10.5089 6.31168 10.5007 6.34941 10.4853C6.36168 10.4803 6.37168 10.4698 6.38305 10.4635C6.40623 10.4503 6.43077 10.4394 6.45032 10.4198L11.9858 5.03073C12.1103 4.90936 12.113 4.71073 11.9917 4.58618C11.8703 4.46164 11.6712 4.45891 11.5471 4.57982Z" fill="white"></path>
            </svg>
        </g>
        <g id="arrow-right">
            <svg viewBox="0 0 20 20" fill="currentColor"><path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"></path></svg>
        </g>
        <g id="remove">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>remove</title><line class="a" x1="4.5" y1="19.5" x2="19.5" y2="4.5"></line><line class="a" x1="4.5" y1="4.5" x2="19.5" y2="19.5"></line></svg>
        </g>
        <g id="subtract-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>subtract-circle</title><line class="a" x1="7.5" y1="12" x2="16.5" y2="12"></line><circle class="a" cx="12" cy="12" r="11.25"></circle></svg>
        </g>
        <g id="rocket">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100.01" fill="currentColor"><path d="M28.25,51.12,7.81,49.46l15.6-15.61a10.27,10.27,0,0,1,8.08-3l7.49.61C34.53,38.86,30.27,47.11,28.25,51.12ZM69.12,68.51,68.51,61c-7.37,4.45-15.62,8.71-19.63,10.73l1.66,20.44,15.61-15.6A10.27,10.27,0,0,0,69.12,68.51Zm5-42.6a9.34,9.34,0,1,0,0,13.21A9.34,9.34,0,0,0,74.09,25.91ZM88.52,11.48a59.61,59.61,0,0,1,8.83,11.23,63,63,0,0,1-20.06,29c-9,7.51-32.06,18.79-32.06,18.79L29.54,54.77S40.82,31.71,48.33,22.71a63,63,0,0,1,29-20.06A59.61,59.61,0,0,1,88.52,11.48ZM76.29,23.71a12.45,12.45,0,1,0,0,17.6A12.45,12.45,0,0,0,76.29,23.71ZM90.48,9.52a63.05,63.05,0,0,1,7.9,9.61A53.64,53.64,0,0,0,99.69.31,53.64,53.64,0,0,0,80.87,1.62,63.05,63.05,0,0,1,90.48,9.52ZM21.82,59.38l18.8,18.8,2.81-5.55L27.37,56.57Z"/><path d="M.07,99.94a.22.22,0,0,1,0-.3c7-8.42,18.22-21,20.12-23,2.23-2.3,4.88-5.1,7.77-5.12a.45.45,0,0,1,.35.14h0a.5.5,0,0,1,.15.38,7,7,0,0,1-1.34,3.64c-.32.45-1.32,1.55-1.68,1.94-3.26,3.54-5.1,4.82-10.07,9.33S5,96.11.37,100a.22.22,0,0,1-.3,0Z"/><path d="M10.71,99.88a.15.15,0,0,1,0-.21C15.45,94,23.07,85.42,24.36,84.09c1.54-1.58,3.36-3.51,5.35-3.48a.16.16,0,0,1,.11,0l.11.11a.14.14,0,0,1,.05.1,4.74,4.74,0,0,1-.91,2.57c-.22.31-.9,1-1.14,1.31-2.22,2.41-3.47,3.28-6.84,6.34s-7,6.18-10.17,8.8a.15.15,0,0,1-.21,0Z"/><path d="M.13,89.3a.15.15,0,0,1,0-.21c4.75-5.71,12.36-14.25,13.66-15.58C15.31,71.93,17.14,70,19.13,70a.16.16,0,0,1,.11,0l.11.11a.12.12,0,0,1,0,.1,4.61,4.61,0,0,1-.91,2.57c-.22.3-.9,1-1.14,1.31a92,92,0,0,1-6.84,6.34c-3.41,3.09-7,6.18-10.17,8.8a.15.15,0,0,1-.2,0Z"/></svg>
        </g>
        <g id="chevron-right-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.2,19.8l7.1-7.1a1,1,0,0,0,0-1.4L11.2,4.2a1,1,0,0,0-1.4,0L8.2,5.8a1,1,0,0,0,0,1.4L13,12,8.2,16.8a1,1,0,0,0,0,1.4l1.6,1.6a1,1,0,0,0,1.4,0ZM24,12a11.75,11.75,0,0,1-1.61,6A11.9,11.9,0,0,1,18,22.39,11.75,11.75,0,0,1,12,24a11.75,11.75,0,0,1-6-1.61A11.9,11.9,0,0,1,1.61,18,11.75,11.75,0,0,1,0,12,11.75,11.75,0,0,1,1.61,6,11.9,11.9,0,0,1,6,1.61,11.75,11.75,0,0,1,12,0a11.75,11.75,0,0,1,6,1.61A11.9,11.9,0,0,1,22.39,6,11.75,11.75,0,0,1,24,12Z"/></svg>
        </g>
    </defs>
</svg>`
            }}></div>

        </div>
    );
}


export default PageContainer
