import { gql } from '@apollo/client';

export const GET_DETAIL_INFO = gql(`
  query ($id: ID!) {
    repository: node(id: $id) {
      ... on Repository {
        id
        name
        stargazerCount
        pushedAt
        url
        owner {
          avatarUrl
          login
          url
        }
        languages(first: 100) {
          items: nodes {
            name
          }
        }
        shortDescriptionHTML
      }
    }
  }
`);
