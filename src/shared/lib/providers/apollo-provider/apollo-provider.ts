import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization:
        'Bearer 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', // expired on 8 Aug 2023
    },
  };
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
