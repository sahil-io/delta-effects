import React, {memo} from "react";
import styles from '@/styles/layout.module.scss'
import {CONTACT_PHONE} from "@/lib/constants";

import {event} from "@/lib/gtag";

const Toolbar = () => {

    return (
        <div className={styles.toolbar}>
            <div className="container">
                <div className="flex justify-end">
                    <div className="flex items-center">
                        <div>
                            <a target="_blank" rel="nofollow noopener" href="https://nativerank.com/user/login">
                                Sign In
                            </a>
                        </div>
                        <div className={styles.phone_col}>
                            <a onClick={(e) => {
                                event({
                                    action: 'Click',
                                    category: 'Call',
                                    label: CONTACT_PHONE + ' Navbar'
                                })
                            }}
                               href={`tel:+${CONTACT_PHONE}`}>
                                <svg width={20} viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                          d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                                </svg>
                                {CONTACT_PHONE}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default memo(Toolbar)
