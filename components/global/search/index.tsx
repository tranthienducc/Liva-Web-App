"use client";

import { Spinner } from "@/components/spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useMutationData } from "@/hooks/useMutationData";
import { useSearch } from "@/hooks/useSearch";
import { inviteMembers } from "@/lib/actions/user/invite-member";
import { User } from "lucide-react";

const Search = ({ workspaceId }: { workspaceId: string }) => {
  const { query, onSearchQuery, isFetching, onUsers, hasResults } = useSearch(
    "get-users",
    "USERS"
  );

  const { isPending, mutate } = useMutationData(
    ["invite-member"],
    (data: { recieverId: string; email: string }) =>
      inviteMembers(workspaceId, data.email)
  );
  return (
    <div className="flex flex-col gap-y-5">
      <Input
        onChange={onSearchQuery}
        value={query}
        className="bg-transparent border-2 outline-none"
        placeholder="Search for your workforce"
        type="text"
      />

      {isFetching ? (
        <div className="flex flex-col gap-y-2">
          <Skeleton className="w-full h-8 rounded-xl" />
        </div>
      ) : !hasResults ? (
        <p className="text-center text-sm text-[#a4a4a4">No users found</p>
      ) : (
        <div>
          {onUsers?.map((user) => (
            <div
              key={user.id}
              className="flex gap-x-3 items-center border-2 w-full p-3 rounded-xl"
            >
              <Avatar>
                <AvatarImage
                  src={user.profileImage || "/assets/images/avatar-user.png"}
                ></AvatarImage>
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <div className="flex items-start flex-col">
                <h3 className="font-bold text-lg capitalize">
                  {user.username}
                </h3>
                <p className="lowercase text-xs font-medium bg-white px-2 rounded-lg text-[#1e1e1e]">
                  {user.subscription?.plan}
                </p>
              </div>
              <div className="flex-1 flex justify-end items-center">
                <Button
                  onClick={() =>
                    mutate({ recieverId: user.id, email: user.email })
                  }
                  variant={"default"}
                  className="w-5/12 font-bold"
                >
                  {isPending ? <Spinner /> : <p>Invite</p>}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
