import express from "express";
import { ApolloServer } from "apollo-server-express";
import { connectToMongoDB } from "./db/db";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
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
    const PORT = process.env.PORT || 4000;
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
