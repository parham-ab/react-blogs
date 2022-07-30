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

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        title
        slug
      }
    }
  }
`;
export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR };
