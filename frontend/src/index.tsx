import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./context/auth/auth";
import { createUploadLink } from "apollo-upload-client";
// const link = createUploadLink({
//   uri: process.env.REACT_APP_URL,
//   credentials: "include",
// });
const client = new ApolloClient({
  uri: process.env.REACT_APP_URL,
  cache: new InMemoryCache(),
  credentials: "include",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
