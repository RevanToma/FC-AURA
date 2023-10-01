import React, { createContext, useContext, useState, useEffect } from "react";
import Spinner from "../../components/common/Spinner/Spinner";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { AuthContextType, AuthProviderProps, User } from "../../types/types";

const AuthContext = createContext<AuthContextType | null>(null);

const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    me {
      id
      name
      email
      teamMember
    }
  }
`;
const LOGOUT_USER_MUTATION = gql`
  mutation logout {
    logout
  }
`;
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [logoutMutation] = useMutation(LOGOUT_USER_MUTATION);

  const client = useApolloClient();

  const login = (userData: User) => {
    console.log("Login", user);
    setUser(userData);
    console.log("Login after set", user);
  };

  const logout = async () => {
    try {
      await logoutMutation();
      console.log("LOGOUT BEFORE SETUSERN ULL", user);
      setUser(null);
      console.log("logout after setuser null", user);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const { data } = await client.query({
          query: CURRENT_USER_QUERY,
          fetchPolicy: "network-only",
        });

        if (data && data.me) {
          setUser(data.me);
          console.log(data.me);
        }
      } catch (err) {
        console.error("Error fetching current user:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrentUser();
  }, [client]);

  const isLoggedIn = () => {
    return !user;
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
