import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export default gql`
  type Query {
    hello: String
  }
`;
