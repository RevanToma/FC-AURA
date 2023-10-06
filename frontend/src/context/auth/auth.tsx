import React, { createContext, useContext, useState, useEffect } from "react";

import { useApolloClient, useMutation } from "@apollo/client";
import { AuthContextType, AuthProviderProps, User } from "../../types/types";
import VortexSpinner from "../../components/common/Vortex/Vortex";
import {
  CURRENT_USER_QUERY,
  LOGOUT_USER_MUTATION,
} from "../../Mutations/Mutations";

const AuthContext = createContext<AuthContextType | null>(null);

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
    setUser(userData);
  };

  const logout = async () => {
    try {
      await logoutMutation();

      setUser(null);
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
  }, [user, client]);

  const isLoggedIn = () => {
    return !!user;
  };
  const isSetupCompleted = user?.setupCompleted;

  if (loading) {
    return <VortexSpinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn,
        isSetupCompleted,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
