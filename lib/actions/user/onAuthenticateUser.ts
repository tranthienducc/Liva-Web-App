"use server";
import { client } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import _ from "lodash";

interface UserData {
  email: string;
  username: string;
  password: string;
  profileImage?: string;
}

export const onAuthenticateUser = async (userData: UserData) => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = await client.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
      include: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    const newWorkspace = await client.workspace.create({
      data: {
        name: `${newUser.username}'s Workspace`,
        type: "PERSONAL",
        userId: newUser.id,
      },
    });

    return {
      status: 201,
      data: {
        ..._.omit(newUser, ["password"]),
        workspace: newWorkspace,
      },
    };
  } catch (error) {
    console.error("❌ ERROR:", error);
    return { status: 500, error: "Internal Server Error" };
  }
};
