import React, {PureComponent} from "react";
import styles from '@/styles/partials/Footer.module.scss'
import Link from "next/link";
import {COMPANY_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL} from "@/lib/constants";
import cn from 'classnames'
import {event} from "@/lib/gtag";
import Logo from "@/components/Logo";

const RESOURCES = [
    {
        "id": "ckm1n6fqw4t460b19ewnyfcks",
        "title": "Track Refunds",
        "externalUrl": "https://www.irs.gov/refunds",
        "stage": "DRAFT"
    },
    {
        "id": "ckm1n72w84u1y092015qeog98",
        "title": "Request Transcript",
        "externalUrl": "https://www.irs.gov/individuals/get-transcript",
        "stage": "DRAFT"
    },
    {
        "id": "ckm1n7j3k4t780b19auie0sgc",
        "title": "Pay Taxes By Credit Card",
        "externalUrl": "https://www.irs.gov/payments/pay-your-taxes-by-debit-or-credit-card",
        "stage": "DRAFT"
    },
    {
        "id": "ckm1n802o4u3u0920xxbfvgju",
        "title": "HealthCare.gov",
        "externalUrl": "https://www.healthcare.gov/",
        "stage": "DRAFT"
    }

]

const SERVICES = [
    {
        "id": "ckkwd9948dwhz0b74saiuztbi",
        "slug": "payroll-processing",
        "title": "Payroll Processing"
    },
    {
        "id": "ckkwdj754dwum0b74uc52oa50",
        "slug": "bookkeeping",
        "title": "Bookkeeping"
    },
    {
        "id": "ckkwdnfx4dxvh0977x1mgt16f",
        "slug": "tax-preparation",
        "title": "Tax Preparation"
    },
    {
        "id": "ckkwdx9bcdy9b0977srfknzt1",
        "slug": "start-up-solutions",
        "title": "Start-Up Solutions"
    }
]

class Footer extends PureComponent {

    render() {
        return (
            <footer className="py-10 md:py-20 md:pb-12 bg-muted border-t" style={{borderTopColor: '#eaeaea'}}>
                <div className="container">
                    <div className="overflow-hidden">
                        <div className="flex justify-between py-8 flex-wrap -my-8 md:-my-0 -mx-6">
                            <div className={cn(styles.first, styles._block, styles.block_mobile)}>
                                <Link href={"/company"}>
                                    <Logo/>
                                </Link>
                                <hr className={"my-4"}/>
                                <div>
                                    <p className="text-sm">
                                        Delta Effects, LLC is one of the leading firms in the area. By combining our
                                        expertise, experience and the energy of our staff, each client receives close
                                        personal and professional attention. Our high standards, service and specialized
                                        staff spell the difference between our outstanding performance and that of other
                                        firms. We make sure that every client is served by the expertise of our whole
                                        firm.
                                    </p>
                                </div>
                                <div className={"overflow-hidden mt-3"}>
                                    <div className="flex -mx-1">
                                        {SOCIAL.map(({name, link, icon}) => <Link key={name} href={link}><a
                                            className={"px-1 text-secondary hover:text-secondary-700"} target="_blank"
                                            ref="nofollow nopopener">
                                            <span dangerouslySetInnerHTML={{__html: icon}}></span>
                                        </a></Link>)}
                                    </div>
                                </div>

                            </div>

                            <div className={cn(styles._block, styles.block_mobile)}>
                                <h4 className={styles.block_title}>Services</h4>
                                <hr className={"mb-3"}/>
                                <ul>
                                    {SERVICES.map(service => <li className={styles.item}><Link
                                        href={`/${service.slug}`}>{service.title}</Link></li>)}


                                </ul>
                            </div>
                            <div className={cn(styles._block, styles.block_mobile)}>
                                <h4 className={styles.block_title}>Resources</h4>
                                <hr className={"mb-3"}/>
                                <ul>
                                    {RESOURCES.map(resource => <li className={styles.item}><a
                                        href={resource.externalUrl} target={"_blank"}>{resource.title}</a></li>)}

                                </ul>
                            </div>
                            <div className={cn(styles._block, styles.block_mobile)}>
                                <h4 className={styles.block_title}>Contact Us</h4>
                                <hr className={"mb-3"}/>
                                <div>
                                    <a onClick={() => event({
                                        action: 'Click',
                                        category: 'Directions',
                                        label: COMPANY_ADDRESS[0] + ' Footer'
                                    })} className={styles.link}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                             fill="currentColor"
                                             width="20">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                        </svg>

                                        <div>{COMPANY_ADDRESS.map((line, idx) => <div key={idx}>{line}</div>)}</div>
                                    </a>

                                    <a onClick={() => event({
                                        action: 'Click',
                                        category: 'Call',
                                        label: CONTACT_PHONE + ' Footer'
                                    })} className={styles.link} href={`tel:+${CONTACT_PHONE}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                             fill="currentColor"
                                             width="20">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path
                                                d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                                        </svg>
                                        <div>{CONTACT_PHONE}</div>
                                    </a>

                                    <a onClick={() => event({
                                        action: 'Click',
                                        category: 'Email',
                                        label: CONTACT_EMAIL + ' Footer'
                                    })} className={styles.link} href={`mailto:${CONTACT_EMAIL}`}>
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
                    </div>

                    <hr className="my-8"/>
                    <div className={"overflow-hidden"}>
                        <div className={styles.legal_grid}>
                            <div className={"p-4"}>
                                <Link href={"/company/terms"}>
                                    Terms & Conditions
                                </Link>
                            </div>
                            <div className={"p-4"}>

                                <Link href={"/company/privacy-policy"}>
                                    Privacy Policy
                                </Link>
                            </div>
                            <div className={"p-4"}>
                                <Link href={"/company/copyright-policy"}>
                                    Copyright Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
