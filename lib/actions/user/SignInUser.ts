"use server";

import { client } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";

const SignInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInInput = z.infer<typeof SignInSchema>;

export async function signIn(data: SignInInput) {
  try {
    const validated = SignInSchema.safeParse(data);
    if (!validated.success) {
      return { success: false, error: "Invalid input data" };
    }

    const { email, password } = validated.data;
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Lấy user từ database
    const userWithPassword = await client.user.findUnique({
      where: { email },
      select: { password: true, id: true },
    });

    if (!userWithPassword) {
      return { success: false, error: "Invalid credentials" };
    }

    // Kiểm tra mật khẩu
    const isPasswordValid = await bcrypt.compare(
      password,
      userWithPassword.password
    );
    if (!isPasswordValid) {
      return { success: false, error: "Invalid credentials" };
    }

    const user = await client.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        username: true,
        profileImage: true,
        subscription: true,
      },
    });

    if (!user || !user.id || !user.email) {
      console.error("❌ User data is missing:", user);
      return { success: false, error: "User data is incomplete" };
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("🔴 JWT_SECRET is missing in environment variables");
    }

    // 🔥 Tạo Access Token (15 phút)
    const accessToken = jwt.sign(
      { sub: user.id, email: user.email },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h",
        algorithm: "HS256",
      }
    );

    // 🔥 Tạo Refresh Token (7 ngày)
    const refreshToken = jwt.sign({ sub: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
      algorithm: "HS256",
    });

    // 🗄 Lưu Refresh Token vào database
    await client.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });

    // 🍪 Set cookies
    const cookieStore = await cookies();
    cookieStore.set("auth-token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60, // 15 phút
      path: "/",
    });

    cookieStore.set("refresh-token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 ngày
      path: "/",
    });

    revalidatePath("/");
    return { success: true, user };
  } catch (error) {
    console.error("🔴 SignIn Error:", error);
    return { success: false, error: "An error occurred during sign in" };
  }
}
