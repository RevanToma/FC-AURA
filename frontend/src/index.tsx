import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./context/auth/auth";
// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         users: {
//           keyArgs: false, // disables the default behavior of treating each argument combination as a separate value
//           merge(existing = [], incoming) {
//             return [...existing, ...incoming];
//           },
//         },
//       },
//     },
//   },
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
