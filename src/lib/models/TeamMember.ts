import {graphQLClient} from "@/../clients/_read_client";

const All_TEAM_MEMBERS_QUERY: string = `{
  teamMembers(orderBy: createdAt_DESC) {
    id
    createdAt
    updatedAt
    picture {
      id
      url
      width
      height
    }
    name
    bio {
      html
    }
  }
}
`

export interface ITeamMember {
    id: string
    picture: {
        url: string
        width: Number
        height: Number
    }
    name: string
    bio: {
        html: string
    }
}

const allTeamMembers = async (): Promise<ITeamMember[]> => {
    const res = await graphQLClient.request(All_TEAM_MEMBERS_QUERY);
    return res.teamMembers
}

export {allTeamMembers}
