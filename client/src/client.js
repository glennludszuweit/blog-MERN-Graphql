import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:2021/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: JSON.parse(localStorage.getItem('graphqlBlog')),
    'client-name': 'WidgetX Ecom [web]',
    'client-version': '1.0.0',
  },
});

export default client;
