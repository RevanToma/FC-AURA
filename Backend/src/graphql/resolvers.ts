import { DateResolver } from "graphql-scalars";
import UserResolvers from "./resolvers/Users/UserResolvers";

const resolvers = {
  Query: {
    ...UserResolvers.Query,
  },
  Mutation: {
    ...UserResolvers.Mutation,
  },
  Date: DateResolver,

  // ... you can add more resolvers as needed
};

export default resolvers;
