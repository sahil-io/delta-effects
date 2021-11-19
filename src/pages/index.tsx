import React from "react";
import Page from "@/layouts/Page";
import Image from "next/image";
import styles from '@/styles/pages/Home.module.scss'
import cn from 'classnames'
import {Parallax, ParallaxProvider} from 'react-scroll-parallax'
import Link from "next/link";
import Head from "next/head";
import {allPages, IPage} from "@/lib/models/Page";
import CTA from "@/partials/CTA";
import ReactPlayer from "react-player";
import {allFaqs, IFaq} from "@/lib/models/FAQ";
import Accordion from "@/components/Accordion";

declare interface Home_Props {
    services: IPage[]
    faqs: IFaq[]
}

const Home = ({services, faqs}: Home_Props) => {


    return (
        <ParallaxProvider>
            <Page title={`Boulder Bookkeeping, Accountants & Accounting Firm | Delta Effects, LLC`}
            description={`Delta Effects' Boulder accountants provide a wide variety of accounting, tax, bookkeeping and financial management services.`}
            >
                <Head>
                    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                </Head>
                <section
                    className={cn("section section-default relative min-h-screen", styles.top_a, styles.align_middle)}>
                    <Image
                        src="/static/assets/images/home_header.jpg"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={styles.overlay}></div>
                    <div className="w-full">
                        <div className="container">
                            <div className="panel text-center text-white max-w-2xl mx-auto">
                                <Parallax y={["80px", "-40px"]}>
                                    <h1 className={"font-heading text-6xl"}>
                                        Empowering You.
                                    </h1>

                                    <p className={"mt-8 text-xl"}>

                                        We provide accounting and tax services for individuals and small businesses, so
                                        that they can make better, more informed decisions. <b>See what we can do for
                                        you!</b>

                                    </p>
                                    <div className={"mt-8"}>
                                        <Link href={"/contact"}>
                                            <a className={"button button-secondary"}>
                                                Get In Touch <svg className={"w-3 ml-2"}
                                                                  xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                  viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                            </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </Parallax>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section section-default">
                    <div className="container">
                        <div className="panel text-center">
                            <h2 className={"font-heading"}>
                                Choose the service that's right for you
                            </h2>
                            <div className={"mt-16"}>
                                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-16 gap-4">
                                    {services.map(({title, graphic, shortDescription, intro, slug, id}) => {
                                        return (
                                            <div key={id}>
                                                <div className={styles.thumb}>
                                                    <Image width={95} height={95} src={graphic.url}/>
                                                </div>
                                                <h3 className={"text-2xl font-heading"}>
                                                    {title}
                                                </h3>
                                                <p className={cn("mt-4 block", styles.service_content)}>
                                                    {shortDescription}
                                                </p>
                                                <div className={"mt-6"}>
                                                    <Link href={`/${slug}`}>
                                                        <a className={"button button-primary"}>Learn More</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={"container"}/>
                <section className={"section section-default"}>
                    <div className="container">
                        <h2 className={"mb-8 text-center text-lg text-gray-400 tracking-wider font-normal uppercase"}>
                            Hundreds Of Small Business Owners Trust Delta's Team With Their Books
                        </h2>
                        <div className="elfsight-app-a042daa2-999a-49c8-bc44-81aeaa213b2f"/>
                    </div>
                </section>
                <section className={"section section-default"}>
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-x-12 items-center gap-y-8">
                            <div>
                                <Image className={"rounded-lg"} src="/static/assets/images/now_open.jpg"
                                       objectFit={"cover"} width={800}
                                       height={500}/>
                            </div>
                            <div>
                                <div className="panel lg:max-w-xl mx-auto relative">
                                    <h2>Why Delta Effects?</h2>
                                    <p className={"mt-4 lg:mt-8"}>
                                        We are a local company with a community focus. Founded out of Boulder, Colorado,
                                        we wanted to get away from companies that treat clients like nameless faces or
                                        dollar signs. We conduct business honestly, guided by lasting core values with a
                                        focus on providing high quality, fairly priced services to our clients.
                                    </p>
                                    <div className={styles.graphic}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"bg-gray-100 py-20"}>
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8 items-center">
                            <div className={"lg:order-last"}>
                                <ReactPlayer controls={true} width='100%'
                                             height={440}
                                             url={`https://www.youtube-nocookie.com/embed/PSoqVhwls7A?rel=0`}/>
                            </div>
                            <div>
                                <div className="panel lg:max-w-xl mx-auto relative">
                                    <h2>Who We Are?</h2>
                                    <p className={"mt-4 lg:mt-8"}>
                                        Delta Effects, LLC is one of the leading firms in the area. By combining our
                                        expertise, experience and the energy of our staff, each client receives close
                                        personal and professional attention. Our high standards, service and specialized
                                        staff spell the difference between our outstanding performance and that of other
                                        firms. We make sure that every client is served by the expertise of our whole
                                        firm.
                                    </p>
                                    <div className={styles.graphic}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <CTA/>
                <Accordion questionsAnswers={faqs}/>
            </Page>
        </ParallaxProvider>
    )
}

export async function getStaticProps() {

    const res = await allPages(true)
    const faqs = await allFaqs()


    return {
        props: {
            services: res,
            faqs
        }
    }
}

export default Home
