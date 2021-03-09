import {graphQLClient} from "@/../clients/_read_client";

const ALL_RESOURCES_QUERY = `
query {
  resources{
    id
    title
    externalUrl
  }
}
`;


export interface IResource {
    id: string
    title: string
    externalUrl: string
}


const allResources = async (): Promise<IResource[]> => {

    const res = await graphQLClient.request(ALL_RESOURCES_QUERY);
    return res.resources
}


export {
    allResources,
}
