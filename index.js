import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './schema';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () =>
  /* eslint-disable-next-line no-console */
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
