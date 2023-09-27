import express from "express";
import { gql, ApolloServer } from "apollo-server-express";
import { connectToMongoDB } from "./db/db";

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

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  try {
    //  Connect to MongoDB.
    await connectToMongoDB();
    console.log("MongoDB connected...");

    // Start the Apollo Server.
    await server.start();
    server.applyMiddleware({ app });
    console.log(`Apollo Server started at ${server.graphqlPath}`);

    //  Start listening for HTTP requests.
    const PORT = 4000;
    app.listen(PORT, () =>
      console.log(
        `Express server listening on http://localhost:${PORT}${server.graphqlPath}`
      )
    );
  } catch (error: any) {
    console.error("Error starting the server:", error.message);
  }
};
startServer();
