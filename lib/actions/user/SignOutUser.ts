"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { client } from "@/lib/prisma";

export async function signOut() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refresh-token")?.value;

    // Xóa refresh token trong database nếu tồn tại
    if (refreshToken) {
      await client.user.updateMany({
        where: { refreshToken },
        data: { refreshToken: null },
      });
    }

    // Xóa cookies
    cookieStore.delete("auth-token");
    cookieStore.delete("refresh-token");

    // Redirect về trang đăng nhập
    redirect("/auth/sign-in");
  } catch (error) {
    // Log error nếu cần
    console.error("Sign out error:", error);

    // Vẫn redirect về sign-in page trong trường hợp lỗi
    redirect("/auth/sign-in");
  }
}
