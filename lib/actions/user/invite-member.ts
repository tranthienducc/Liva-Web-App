"use server";

import { sendEmail } from "@/lib/actions/email/send-emai";
import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

type InviteResponse = {
  status: number;
  data?: string;
};

export const inviteMembers = async (
  workspaceId: string,
  email: string
): Promise<InviteResponse> => {
  try {
    if (!workspaceId || !email) {
      return { status: 400, data: "Missing required parameters" };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { status: 400, data: "Invalid email format" };
    }

    const currentUser = await getCurrentUser();
    if (!currentUser?.user?.id) {
      return { status: 401, data: "Unauthorized" };
    }

    const senderInfo = await client.user.findUnique({
      where: { id: currentUser.user.id },
      select: { id: true, username: true },
    });

    if (!senderInfo) {
      return { status: 404, data: "Sender not found" };
    }

    const receiverUser = await client.user.findUnique({
      where: { email },
      select: { id: true, username: true },
    });

    if (!receiverUser) {
      return { status: 404, data: "User with this email not found" };
    }

    const workspace = await client.workspace.findUnique({
      where: { id: workspaceId },
      select: { id: true, name: true },
    });

    if (!workspace) {
      return { status: 404, data: "Workspace not found" };
    }

    const existingInvite = await client.invite.findFirst({
      where: {
        senderId: senderInfo.id,
        recieverId: receiverUser.id,
        workSpaceId: workspaceId,
      },
    });

    if (existingInvite) {
      return { status: 400, data: "Invitation already sent" };
    }

    const invitation = await client.invite.create({
      data: {
        senderId: senderInfo.id,
        recieverId: receiverUser.id,
        workSpaceId: workspaceId,
        content: `You are invited to join ${workspace.name} Workspace, click accept to confirm`,
      },
      select: { id: true },
    });
    console.log("🟢 Invitation ID:", invitation.id);
    if (!invitation) {
      return { status: 500, data: "Failed to create invitation" };
    }

    await client.user.update({
      where: { id: currentUser.user.id },
      data: {
        notification: {
          create: {
            content: `${currentUser.user.username} invited ${receiverUser.username} into ${workspace.name}`,
          },
        },
      },
    });

    if (invitation) {
      const { transporter, mailOptions } = await sendEmail(
        email,
        "You got an invitation",
        `You are invited to join ${workspace.name} Workspace, click accept to confirm`,
        ` <a href="${process.env.NEXT_PUBLIC_HOST_URL}/invite/${invitation.id}" 
        style="background-color: #000; color: #fff; padding: 10px 20px; 
        border-radius: 5px; text-decoration: none; display: inline-block; 
         margin-top: 15px;">Accept Invitation</a>`
      );

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("🔴", error.message);
        } else {
          console.log("✅ Email sent", info);
        }
      });
    }

    return { status: 200, data: "Invite sent successfully" };
  } catch (error) {
    console.error("Invite error:", error);
    return { status: 500, data: "Internal server error" };
  }
};
