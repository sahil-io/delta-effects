import React from "react";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames"
import styles from "@/styles/pages/Home.module.scss"
import {GetStaticProps} from 'next'
import {allPages, IPage, singlePage} from "@/lib/models/Page";
import Page from "@/layouts/Page";
import CTA from "@/partials/CTA";
import Image from 'next/image'
import {allFaqs, IFaq} from "@/lib/models/FAQ";
import Accordion from "@/components/Accordion";

const PageSlug = ({page, faqs}: { page: IPage, faqs: IFaq[] }) => {

    const {title, intro, featuredImage} = page

    return (
        <ParallaxProvider>
            <Page title={`${title} Services in Boulder, CO | Delta Effects, LLC`}>
                <section className={cn("section-default flex-wrap relative min-h-screen", styles.top_a)}>
                    <div className={"relative w-full md:w-1/2 z-10 md:z-0"}>
                        <Image
                            src={featuredImage.url}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className={"w-full md:w-1/2 flex items-center px-6 justify-center"}>
                        <div className={styles.slanted_bg}></div>
                        <svg viewBox="0 0 1440 432">
                            <g fill="#CCBDB2" fillRule="evenodd">
                                <path
                                    d="M0 0h1440C886.741 0 382.155 108.936 0 288V0z"
                                    opacity="0.1"
                                ></path>
                                <path
                                    d="M1440 266V0H0v50c595.29 0 1121.488 85.363 1440 216"
                                    opacity="0.1"
                                ></path>
                                <path d="M0 0h864C545.887 0 249.4 158.55 0 432V0z" opacity="0.1"></path>
                            </g>
                        </svg>
                        <div className="panel text-center max-w-2xl mx-auto relative z-10">
                            <Parallax y={["80px", "-40px"]}>
                                <h1 className={"font-heading text-6xl"}>
                                    {title}
                                </h1>

                                <p className={"mt-8 text-xl"}>
                                    {intro}
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
                </section>
                <section className={"section section-default"}>
                    <div className="container max-w-5xl">
                        <div className={"raw_content"} dangerouslySetInnerHTML={{
                            __html:
                            page.content.html
                        }}></div>
                    </div>
                </section>
                <CTA/>
                <Accordion questionsAnswers={faqs}/>
            </Page>
        </ParallaxProvider>
    )
}

export async function getStaticPaths() {
    const pages = await allPages(true);
    const allPagePaths = pages.map(({slug}) => {
        return {
            params: {pageSlug: slug}
        }
    })
    return {
        paths: allPagePaths,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {pageSlug} = params
    const page = await singlePage(pageSlug)

    if (!page) {
        return {
            notFound: true,
        }
    }
    const faqs = await allFaqs()
    return {
        props: {
            page,
            faqs
        },
    }
}

export default PageSlug
