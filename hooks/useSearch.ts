import { useQueryData } from "@/hooks/useQueryData";
import { searchUsers } from "@/lib/actions/user/search-users";
import React, { useEffect, useState } from "react";

type User = {
  id: string;
  subscription: { plan: "PRO" | "FREE" } | null;
  username: string | null;
  profileImage: string | null;
  email: string;
};

export const useSearch = (key: string, type: "USERS") => {
  const [query, setQuery] = useState("");
  const [debounce, setDebounce] = useState("");
  const [onUsers, setOnUsers] = useState<User[]>([]);

  const onSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebounce(query);
    }, 1000);

    return () => clearTimeout(delayInputTimeoutId);
  }, [query]);

  const { refetch, isFetching } = useQueryData(
    [key, debounce],
    async ({ queryKey }) => {
      if (!queryKey[1]) return [];

      if (type === "USERS") {
        const users = await searchUsers(queryKey[1] as string);
        if (users.status === 200 && users.data) {
          setOnUsers(users.data);
          return users.data;
        }
      }
      return [];
    },
    false
  );

  useEffect(() => {
    if (debounce) {
      refetch();
    } else {
      setOnUsers([]);
    }
  }, [debounce, refetch]);

  return {
    onSearchQuery,
    query,
    isFetching,
    onUsers,
    hasResults: onUsers.length > 0,
  };
};
