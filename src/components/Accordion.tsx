import React, { useState } from "react";
import Faq from 'react-faq-component';

const Accordion = ({ questionsAnswers }) => {



    const data = {
        title: "FAQs",
        rows: questionsAnswers.map(q => ({
            title: q.question,
            content: q.answer.html
        }))
    }


    return (
        <section className={"bg-gray-100 py-20"}>
            <div className="container max-w-4xl">

        <div className="faq prose lg:prose-xl">
            <Faq data={data}
                 styles={{
                     bgColor: "transparent",
                     titleTextColor: "#48482a",
                     rowTitleColor: "#174579",
                     rowTitleTextSize: 'large',
                     rowContentColor: "#48484a",
                     arrowColor: "black",
                 }}
            />
        </div>
            </div>
        </section>
    );
};

export default Accordion;
