import {graphQLClient} from "@/../clients/_read_client";

const ALL_PAGES_QUERY = `
query AllPages($exclude: String!, $featuredService: Boolean!){
  pages(where: {title_not: $exclude, featuredService: $featuredService}) {
    id
    slug
    title
    featuredService
    intro
    shortDescription
    featuredImage {
      height
      size
      width
      url
      fileName
    }
    graphic {
      height
      size
      width
      url
      fileName
    }
    content {
      html
    }
  }
}
`;


const SINGLE_PAGE_QUERY = `
query($slug: String!){
  page(where:{slug: $slug}){
     id
    slug
    title
    featuredService
    intro
    featuredImage {
      height
      size
      width
      url
      fileName
    }
    graphic {
      height
      size
      width
      url
      fileName
    }
    content {
      html
    }
  }
}
`

export interface IPage {
    id: string
    title: string
    label: string
    slug: string
    intro?: any
    content?: any
    faqs?: any
    graphic?: any
    featuredImage?: any
    shortDescription?: string
}


const allPages = async (featuredService: boolean = null): Promise<IPage[]> => {

    const filters: any = {exclude: 'Home'}

    if (featuredService === true) {
        filters.featuredService = true
    }

    const res = await graphQLClient.request(ALL_PAGES_QUERY, filters);
    return res.pages
}


const singlePage = async (slug: string | string[]): Promise<IPage> => {
    if (Array.isArray(slug)) {
        slug = slug[0]
    }
    const res = await graphQLClient.request(SINGLE_PAGE_QUERY, {slug});
    return res.page
}


export {
    allPages,
    singlePage
}
