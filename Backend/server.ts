import express from "express";
import { gql, ApolloServer } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

const resolvers = {
  //   Query: {
  //     getUser: (parent, args, context, info) => {
  //       // Fetch user from database using args.id
  //       // Return the user
  //     },
  //   },
  //   Mutation: {
  //     createUser: (parent, args, context, info) => {
  //       // Create a user in the database using args.name and args.email
  //       // Return the created user
  //     },
  //   },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

const startServer = async () => {
  // This will ensure that the ApolloServer is started before you continue.
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
