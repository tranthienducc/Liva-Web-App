"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";

export interface User {
  id: string;
  email: string;
  name?: string | null;
  username?: string | null;
  profileImage?: string | null;
  subscription?: boolean | null;
  createdAt: Date;
  updatedAt: Date;
}

interface UserContextType {
  users: User | null;
  loading: boolean;
  error: string | null;
  refetchUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const {
    data: users,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const response = await getCurrentUser();
      console.log("API Response:", response);
      if (!response.success) throw new Error(response.error);
      return response.user;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return (
    <UserContext.Provider
      value={{
        users: users || null,
        loading: isLoading,
        error: error ? error.message : null,
        refetchUser: refetch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
