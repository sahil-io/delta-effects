import React from "react";
import Page from "@/layouts/Page";
import Head from "next/head";
import {InlineWidget} from "react-calendly";
import Logo from "@/components/Logo";
import {COMPANY_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE} from "@/lib/constants";
import styles from "@/styles/pages/Contact.module.scss"


const Contact = () => {
    return (
        <Page title={"Contact Delta Effects | Book An Appointment"}
              description={`Book an appointment with Delta Effects' Boulder accountants. Delta Effects provide a wide variety of accounting, tax, bookkeeping and financial management services.`}
        >
            <section className={"section section-default pb-0"}>
                <style
                    jsx>{`@media (min-width: 800px) {.calendly-inline-widget {height: 751px!important;min-width:320px;}}`}</style>
                <div className="panel">
                    <div className={"text-center bg-white"}>
                        <div className={"text-center inline-block mb-8"}>
                            <Logo/>
                        </div>
                        <h1>
                            Book An Appointment With Delta
                        </h1>
                        <p className={"mt-4 text-xl text-gray-500"}>
                            Get started by selecting a date and time
                        </p>
                        <div className={"mt-2"}>
                            <InlineWidget
                                styles={{
                                    height: '751px',
                                    padding: '0 0 60px 0',
                                    backgroundImage: 'linear-gradient(180deg, #fff 50%, rgb(68,68,68) 50%)'
                                }}
                                url="https://calendly.com/website-appointment/15min" pageSettings={{
                                hideEventTypeDetails: true,
                                hideLandingPageDetails: true,
                                primaryColor: "174579"
                            }}/>
                        </div>
                    </div>

                </div>
            </section>
            <section className={"section section-muted"}>

                <div className={"container"}>
                    <div className={"panel text-center"}>
                        <h4>
                            Contact Details
                        </h4>
                        <hr className={"my-4"}/>
                        <div className={styles.links}>
                        <a className={styles.link}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                 fill="currentColor"
                                 width="20">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>

                            <div>{COMPANY_ADDRESS.map((line, idx) => <div key={idx}>{line}</div>)}</div>
                        </a>

                        <a className={styles.link} href={`tel:+${CONTACT_PHONE}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                 fill="currentColor"
                                 width="20">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                            </svg>
                            <div>{CONTACT_PHONE}</div>
                        </a>

                        <a className={styles.link} href={`mailto:${CONTACT_EMAIL}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                 fill="currentColor"
                                 width="20">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            <div>{CONTACT_EMAIL}</div>
                        </a>
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export default Contact
