import { gql, useMutation, useQuery } from "@apollo/client";
import { GlobalStyles } from "./theme/GlobalStyles";
import { Suspense } from "react";
import Button from "./components/common/Button/Button";
import { ButtonType } from "./components/common/Button/ButtonTypes";

import { Vortex } from "react-loader-spinner";
import { useAuth } from "./components/common/hooks/auth";
function App() {
  const auth = useAuth();
  // const GET_ALL_USERS = gql`
  //   query GetAllUsers {
  //     users {
  //       id
  //       name
  //       email
  //       password
  //       skills
  //       bio
  //     }
  //   }
  // `;
  const LOGIN_MUTATION = gql`
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
  // const { loading, error, data } = useQuery(GET_ALL_USERS);
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  console.log(data);

  if (loading)
    return (
      <Vortex
        colors={["yellow", "black", "yellow", "black", "black", "yellow"]}
      />
    );
  if (error) return <p>Error: {error.message}</p>;

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await loginMutation({ variables: { email, password } });
      auth.login(response.data.loginUser.user);
      // Handle the token and user data from the response however you wish
    } catch (err) {
      console.error("Error logging in:", err);
    }
  };
  return (
    <>
      <GlobalStyles />
      <Suspense
        fallback={
          <Vortex
            colors={["yellow", "black", "yellow", "black", "black", "yellow"]}
          />
        }
      >
        <div>
          <button onClick={() => handleLogin("hej@se.se", "hejhejhej")}>
            {auth?.user ? auth.user.name : "login"}
          </button>
        </div>
      </Suspense>
    </>
  );
}

export default App;
