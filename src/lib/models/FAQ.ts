// @ts-ignore
import {graphQLClient} from "@/../clients/_read_client";

const ALL_FAQS_QUERY = `
query{
  faqs{
    id
    question
    answer{
      html
    }
  }
}
`;


export interface IFaq {
    id: string
    question: string
    answer: {
        html: string
    }
}


const allFaqs = async (): Promise<IFaq[]> => {

    const res = await graphQLClient.request(ALL_FAQS_QUERY);
    return res.faqs
}


export {
    allFaqs,
}
