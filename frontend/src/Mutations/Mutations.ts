import { gql } from "@apollo/client";

export const CHANGE_PROFILE_INFO = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      bio
      weight
      length
      instagram
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
  query Users {
    users {
      name
      bio
      position
      skills
      length
      weight
      instagram
      lastName
      teamMember
    }
  }
`;
