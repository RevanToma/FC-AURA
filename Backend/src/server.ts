import express, { Request } from "express";
import { ApolloServer } from "apollo-server-express";
import { connectToMongoDB } from "./db/db";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import cookieParser from "cookie-parser";
import cors from "cors";

import bodyParser from "body-parser";
import expressSession from "express-session";
import { setupPassport } from "./utils/passportConfig";

import routes from "./route/routes";
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
    return { req, res, user: req.user };
  },
});

app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.CLIENT_SECRET!,
    resave: false,
    saveUninitialized: false,
  })
);
setupPassport(app);
app.use(routes);

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
