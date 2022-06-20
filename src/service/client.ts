import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';

/* const httpLink = createHttpLink({
  uri:
    `${process.env.NEXT_PUBLIC_URL_API}/graphql` ||
    'http://localhost:2002/graphql',
  fetch,
}); */

/* const authLink = setContext((_, { headers }) => {
  // Read storag
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
}); */

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  uri:
    `${process.env.NEXT_PUBLIC_URL_API}/graphql` ||
    'http://localhost:2002/graphql',
  // link: authLink.concat(httpLink),
});

export default client;
