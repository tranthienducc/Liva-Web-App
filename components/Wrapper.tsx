"use client";
import { Header } from "@/components/shared";
import { usePathname } from "next/navigation";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname() || "";

  const isAuthRoute =
    ["/auth/sign-in", "/auth/sign-up"].includes(pathname) ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/preview");
  return (
    <div className="wrapper relative">
      {!isAuthRoute && <Header />}
      {children}
    </div>
  );
};

export default Wrapper;
