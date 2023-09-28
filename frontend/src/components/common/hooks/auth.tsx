import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Spinner from "../Spinner/Spinner";
import { gql, useApolloClient } from "@apollo/client";
import { AuthContextType, AuthProviderProps, User } from "../../../types/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
  const client = useApolloClient();

  const CURRENT_USER_QUERY = gql`
    query CurrentUser {
      me {
        id
        name
        email
      }
    }
  `;

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      await fetch("/logout", { method: "POST" });
      setUser(null);
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        console.log("DATA FROM CONTEXT", user);
        const { data } = await client.query({
          query: CURRENT_USER_QUERY,
          fetchPolicy: "network-only",
        });

        if (data && data.me) {
          setUser(data.me);
        }
      } catch (err) {
        console.error("Error fetching current user:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrentUser();
  }, [CURRENT_USER_QUERY, client]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
