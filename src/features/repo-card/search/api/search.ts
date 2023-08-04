import { gql } from '@apollo/client';

export const GET_REPO_BY_NAME = gql(`
  query ($queryString: String!, $first: Int, $last: Int, $afterCursor: String, $beforeCursor: String) {
    search(
      query: $queryString
      type: REPOSITORY
      first: $first
      last: $last
      after: $afterCursor
      before: $beforeCursor
    ) {
      totalCount: repositoryCount
      repositoryList: nodes {
        ... on Repository {
          owner {
            id
            login
          }
          id
          createdAt
          name
          pushedAt
          url
          stargazerCount
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
`);

export const GET_REPO_OF_CURRENT_USER = gql(`
  query ($first: Int, $last: Int, $afterCursor: String, $beforeCursor: String) {
    viewer {
      search: repositories(
        first: $first
        last: $last
        after: $afterCursor
        before: $beforeCursor
        affiliations: [OWNER]
      ) {
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
        repositoryList: nodes {
          owner {
            id
            login
          }
          id
          createdAt
          name
          pushedAt
          url
          stargazerCount
        }
      }
     }
   }
`);
