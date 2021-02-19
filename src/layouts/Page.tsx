import React from "react";
import PageContainer from "@/layouts/PageContainer";
import Header from "@/layouts/Header";
import Footer from "@/partials/Footer";
import {SEO_Props} from "@/lib/SEOMetaData";


class Page extends React.Component<SEO_Props> {

    render() {
        const {title, description, children} = this.props

        return (
            <PageContainer shouldIndex={true} title={title} description={description}>
                <Header/>
                {children}
                <Footer/>
            </PageContainer>
        )
    }

}

export default Page
