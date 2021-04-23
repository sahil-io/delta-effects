import {GetServerSideProps} from "next";
import Page from "@/layouts/Page";
import React from "react";
import {allResources, IResource} from "@/lib/models/Resource";
import Link from "next/link";
import styles from "@/styles/pages/resources.module.scss"
import {allFaqs, IFaq} from "@/lib/models/FAQ";
import Accordion from "@/components/Accordion";

declare interface Resources_Props {
    resources: IResource[]
    faqs: IFaq[]
}

const Resources = ({resources, faqs}: Resources_Props) => {

    return (
        <Page>
            <section className={"section section-dark-gray"}>
                <div className="container text-center">
                    <h1 className={"mb-4"}>
                        Resources
                    </h1>
                </div>
            </section>
            <section className={"section section-default"}>
                <div className="container max-w-6xl">
                    <div className="panel">
                        <h4>External Links</h4>
                        <hr className={"my-4"}/>
                        <div className={"flex justify-center flex-wrap -m-4"}>
                            {resources.map(resource => {
                                return (
                                    <div className={styles.link_card} key={resource.id}>
                                        <Link href={resource.externalUrl}>
                                            <a target={"_blank"}>
                                                <p>
                                                    {resource.title}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <Accordion questionsAnswers={faqs}/>
        </Page>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await allResources()
    const faqs = await allFaqs()

    return {
        props: {
            resources: data,
            faqs
        },
    }
}


export default Resources
