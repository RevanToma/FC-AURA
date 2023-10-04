import express from "express";
import { ApolloServer } from "apollo-server-express";
import { connectToMongoDB } from "./db/db";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import cookieParser from "cookie-parser";
import cors from "cors";

import { graphqlUploadExpress } from "graphql-upload";
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    credentials: true,
  })
);

const server = new ApolloServer({
  typeDefs,
  resolvers,

  context: ({ req, res }) => {
    return { req, res };
  },
});

const IMAGES_DIRECTORY = path.join(__dirname, "..", "photos");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.json());

app.use("/photos", express.static(IMAGES_DIRECTORY));

app.get("/check-dir", (req, res) => {
  fs.readdir(IMAGES_DIRECTORY, (err: any, files: any) => {
    if (err) {
      return res.send("Unable to read directory. Error: " + err.message);
    }
    res.send(files);
  });
});
const startServer = async () => {
  try {
    //  Connect to MongoDB.

    await connectToMongoDB();
    console.log("MongoDB connected...");

    // Start the Apollo Server.
    await server.start();
    server.applyMiddleware({ app, cors: false });
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
