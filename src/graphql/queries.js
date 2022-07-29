import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  {
    posts {
      author {
        ... on Author {
          name
          avatar {
            url
          }
        }
      }
      id
      title
      slug
      coverPhoto {
        url
      }
    }
  }
`;

export { GET_BLOGS_INFO };
