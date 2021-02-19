import {GraphQLClient} from "graphql-request"

const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
    credentials: "include",
    headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_QUERY_TOKEN}`
    }
});

export {graphQLClient}
