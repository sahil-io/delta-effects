import {DEV_MODE} from "./constants";

export const GA_TRACKING_ID = 'UA-12345678-5'


export const pageview = (url) => {
    if (!DEV_MODE) {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        })
    }
}


export const event = ({action, category, label, value}: { action: string, category: string, label: string, value?: number }) => {
    if (!DEV_MODE) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}
