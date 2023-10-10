import { gql } from "@apollo/client";

export const CHANGE_PROFILE_INFO = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      bio
      weight
      length
      instagram
      position
      image
      setupCompleted
    }
  }
`;
export const SETUP_COMPLETED = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      setupCompleted
    }
  }
`;
export const GET_PROFILE_INFO = gql`
  query CurrentUser {
    me {
      bio
      weight
      length
      instagram
      position
      image
    }
  }
`;

export const ADD_SKILLS = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      skills
    }
  }
`;

export const GET_USER_SKILLS = gql`
  query GetUserSkills {
    me {
      skills
    }
  }
`;
export const CHANGE_EMAIL = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      email
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      password
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      status
      user {
        email
        lastName
        name
        password
        passwordConfirm
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      status
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    me {
      id
      name
      email
      lastName
      weight
      length
      instagram
      bio
      skills
      position
      image
      setupCompleted
      registrationStatus
      role
      teamMember
    }
  }
`;
export const LOGOUT_USER_MUTATION = gql`
  mutation logout {
    logout
  }
`;

export const GET_TEAMMEMBERS = gql`
  query Users($offset: Int!, $limit: Int!) {
    users(offset: $offset, limit: $limit) {
      name
      bio
      position
      skills
      length
      weight
      instagram
      lastName
      teamMember
      id
      image
      registrationStatus
    }
  }
`;

export const GET_ALL_TEAMMEMBERS = gql`
  query TeamMembers {
    teamMembers {
      name
      id
      email
      teamMember
      registrationStatus
    }
  }
`;

export const GET_USER = gql`
  query GetUser($getUserId: ID!) {
    getUser(id: $getUserId) {
      id
      name
      lastName
      weight
      length
      instagram
      bio
      skills
      position
      image
      teamMember
      setupCompleted
    }
  }
`;
export const UPLOAD_FILE = gql`
  mutation UploadFile($file: String!) {
    uploadFile(file: $file)
  }
`;

export const GET_IMAGE = gql`
  query GetUser($getUserId: ID!) {
    getUser(id: $getUserId) {
      image
    }
  }
`;

export const UPDATE_USER_REGISTRATION = gql`
  mutation UpdateUserRegistrationStatus(
    $input: UpdateUserRegistrationStatusInput!
  ) {
    updateUserRegistrationStatus(input: $input) {
      id
      registrationStatus
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage($content: String!, $createdAt: String!) {
    sendMessage(content: $content, createdAt: $createdAt) {
      content
      createdAt
    }
  }
`;
export const GET_MESSAGES = gql`
  query ChatMessages {
    chatMessages {
      content
      createdAt
      time
      id

      sender {
        name
        id
      }
      reactions {
        emoji
      }
    }
  }
`;

export const MESSAGE_ADDED_SUBSCRIPTION = gql`
  subscription OnMessageAdded {
    messageAdded {
      content
      sender {
        name
      }
    }
  }
`;
