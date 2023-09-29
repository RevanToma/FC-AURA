import { gql, useMutation } from "@apollo/client";
import { GlobalStyles } from "./theme/GlobalStyles";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Button from "./components/common/Button/Button";
// import { ButtonType } from "./components/common/Button/ButtonTypes";

import { Vortex } from "react-loader-spinner";
import { useAuth } from "./context/auth/auth";
import Input from "./components/common/Input/Input";
import { InputType } from "./types/types";
import Home from "./routes/Home/Home";
import VortexSpinner from "./components/common/Vortex/Vortex";
const SignUp = lazy(() => import("./routes/Signup/Signup"));

function App() {
  // const auth = useAuth();

  // const LOGIN_MUTATION = gql`
  //   mutation Login($email: String!, $password: String!) {
  //     loginUser(input: { email: $email, password: $password }) {
  //       status
  //       token
  //       user {
  //         id
  //         name
  //         email
  //       }
  //     }
  //   }
  // `;

  // const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);

  // if (loading)
  //   return (
  //     <Vortex
  //       colors={["yellow", "black", "yellow", "black", "black", "yellow"]}
  //     />
  //   );
  // if (error) return <p>Error: {error.message}</p>;

  // const handleLogin = async (email: string, password: string) => {
  //   try {
  //     const response = await loginMutation({ variables: { email, password } });
  //     auth.login(response.data.loginUser.user);
  //     // Handle the token and user data from the response however you wish
  //   } catch (err) {
  //     console.error("Error logging in:", err);
  //   }
  // };
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<VortexSpinner />}>
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
