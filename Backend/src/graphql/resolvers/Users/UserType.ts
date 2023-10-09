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
    setupCompleted: Boolean
    registrationStatus: String
    role: String
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
    setupCompleted: Boolean
  }
  input UpdateUserInput {
    id: ID
    email: String
    password: String
    weight: Float
    length: Float
    instagram: String
    bio: String
    skills: [String]
    position: String
    image: String
    setupCompleted: Boolean
  }
  input UpdateUserRegistrationStatusInput {
    id: ID!
    registrationStatus: String!
  }

  type Chat {
    id: ID!
    users: [User!]!
    messages: [Message!]!
    createdAt: Date!
    updatedAt: Date!
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
  type Reaction {
    emoji: String!
  }

  type Message {
    id: ID!
    content: String!
    sender: User!
    createdAt: Date!
    updatedAt: Date!
    time: String!
    reactions: [Reaction!]
  }

  type Mutation {
    createUser(input: CreateUserInput!): AuthPayload
    loginUser(input: UserLoginInput!): AuthPayload
    updateUser(input: UpdateUserInput!): User
    getSignedUrl(filename: String!, filetype: String!): String!
    updateUserImage(userId: ID!, imageUrl: String!): User!
    logout: Boolean
    uploadFile(file: String!): Boolean
    updateUserRegistrationStatus(
      input: UpdateUserRegistrationStatusInput!
    ): User
    sendMessage(content: String!, createdAt: String!): Message!
    createChatRoom: Chat!
    addReactionToMessage(messageId: ID!, emoji: String!): Message!
  }

  type Query {
    getUser(id: ID!): User
    users(registrationStatus: String, offset: Int, limit: Int): [User!]
    me: User
    teamMembers: [User!]
    chatMessages: [Message!]
  }
`;

export default UserType;
