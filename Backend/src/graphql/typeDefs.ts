import { gql } from "apollo-server-express";
import UserType from "./resolvers/Users/UserType";

// Base type definitions
const Base = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const typeDefs = [UserType, Base];

export default typeDefs;
