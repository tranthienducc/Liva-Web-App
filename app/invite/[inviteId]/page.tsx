import { acceptInvite } from "@/lib/actions/invite/accept-invite";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    inviteId: string;
  };
};

const page = async ({ params: { inviteId } }: Props) => {
  const invite = await acceptInvite(inviteId);

  if (invite.status === 404) return redirect("/auth/sign-in");

  if (invite.status === 401) {
    <div className="h-screen container flex flex-col gap-y-2 justify-center items-center">
      <h2 className="text-6xl font-bold text-white">Not authorized</h2>
      <p>You are not authorized to accept this invite</p>
    </div>;
  }

  if (invite.status === 200) return redirect("/");
};

export default page;
