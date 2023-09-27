import { gql } from "apollo-server-express";

const UserType = gql`
  scalar Date

  type User {
    id: ID!
    name: String!
    email: String!
    lastName: String!
    createdAt: Date!
    weight: Float
    length: Float
    instagram: String
    password: String
    passwordConfirm: String
    googleId: String
    method: String
    position: String
    bio: String
    skills: [String]
    teamMember: Boolean
    image: String
  }

  input CreateUserInput {
    name: String!
    lastName: String!
    email: String!
    password: String!
    passwordConfirm: String!
    weight: Float
    length: Float
    instagram: String
    method: String
    googleId: String
    position: String
    bio: String
    skills: [String]
    teamMember: Boolean
    image: String
  }
  input UpdateUserInput {
    id: ID!
    email: String
    password: String
    weight: Float
    length: Float
    instagram: String
    bio: String
    skills: [String]
  }

  type AuthPayload {
    status: String!
    token: String!
    user: User!
  }

  input UserLoginInput {
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): AuthPayload
    loginUser(input: UserLoginInput!): AuthPayload
    updateUser(input: UpdateUserInput!): User
    getSignedUrl(filename: String!, filetype: String!): String!
    updateUserImage(userId: ID!, imageUrl: String!): User!
  }

  type Query {
    getUser(id: ID!): User
    users: [User!]
  }
`;

export default UserType;
