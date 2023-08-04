import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

const tk =
  '11ARIOO4Y0hPJzLvZSUDaf_PkY6S7mfr5oish8lew134sPkmcTDQRAMe5ZkLA1ldlnNJ76MGQ5XymbKHPX';

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer github_pat_${tk}`, // expired on 11 Aug 2023
    },
  };
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
