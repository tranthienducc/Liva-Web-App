import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const auth = await getCurrentUser();

  if (auth.status === 200) {
    const sanitizedUsername = auth.user?.username
      .replace(/\s+/g, "")
      .toLowerCase();
    return redirect(`/dashboard/${sanitizedUsername}`);
  }

  if (auth.status === 401 || auth.status === 403 || auth.status === 404) {
    return redirect("/auth/sign-in");
  }
};

export default DashboardPage;
