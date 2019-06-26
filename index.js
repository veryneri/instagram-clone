import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import config from './config';
import mongoose from 'mongoose';
import resolvers from './resolvers';
import typeDefs from './schema';

mongoose.Promise = global.Promise;
const {
  db: {
    port: dbPort,
    schema: dbSchema,
    server: dbServer,
  },
} = config;
const mongoUri = `mongodb://${dbServer}:${dbPort}/${dbSchema}`;

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 4000;

mongoose.connect(mongoUri, { useNewUrlParser: true }).then(() => {
  /* eslint-disable-next-line no-console */
  console.log('DB connection established');

  app.listen({ port }, () =>
    /* eslint-disable-next-line no-console */
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
});
