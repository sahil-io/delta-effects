import React from "react";
import Image from "next/image";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames"
import styles from "@/styles/pages/Home.module.scss"
import {GetStaticProps} from 'next'
import {allPages, IPage, singlePage} from "@/lib/models/Page";
import Page from "@/layouts/Page";
import CTA from "@/partials/CTA";

const PageSlug = ({page}: { page: IPage }) => {

    const {title, intro, featuredImage} = page

    return (
        <ParallaxProvider>
            <Page>
                <section className={cn("section section-default relative min-h-screen", styles.top_a)}>
                    <Image
                        src={featuredImage.url}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={styles.overlay}></div>
                    <div className="w-full">
                        <div className="container">
                            <div className="panel text-center text-white max-w-2xl mx-auto">
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
    return {
        props: {
            page,
        },
    }
}

export default PageSlug
