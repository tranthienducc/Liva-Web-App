"use client";
import ModeToggle from "@/components/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/providers/user-provider";
import { signOut } from "@/lib/actions/user/SignOutUser";
import { useRouter } from "next/navigation";

const navItems = [
  {
    title: "Platform",
    url: "/platform",
  },
  {
    title: "Resources",
    url: "/resources",
  },
  {
    title: "Customer",
    url: "/customer",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },
];

const Header = () => {
  const { users } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.refresh();
  };

  return (
    <header className="sticky top-0 border-b border-b-white/10 z-[50] bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-12 pt-2">
      <div className="mx-auto w-full">
        <div className="mx-auto flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              <Image
                src="/assets/icons/logo-backup.svg"
                alt="logo"
                className="size-[24px]"
                width={24}
                height={24}
              />
              <span className="text-xl font-semibold whitespace-nowrap">
                liva
              </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
              <ul className="flex flex-row gap-4">
                {navItems.map((item) => (
                  <NavigionMenu key={item.title} item={item} />
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between gap-[0.7rem] md:justify-end">
            <nav className="flex items-center gap-2">
              {users ? (
                <>
                  <Link
                    href="/dashboard"
                    className="border border-white/10 bg-inherit rounded-lg px-4 py-1"
                  >
                    <span className="text-sm font-medium text-white">
                      Dashboard
                    </span>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage
                          src={
                            users.profileImage ||
                            "/assets/images/avatar-user.png"
                          }
                        />
                        <AvatarFallback>
                          {users.name?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                        <Link href="/profile">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ModeToggle />
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout}>
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <Link
                  href="/auth/sign-in"
                  className="border border-white/10 bg-inherit rounded-lg px-4 py-1"
                >
                  <span className="text-sm font-medium text-white">Log in</span>
                </Link>
              )}
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

interface DataMenuProps {
  title: string;
  url: string;
}

interface NavigationMenuProps {
  item: DataMenuProps;
}

function NavigionMenu({ item }: NavigationMenuProps) {
  return (
    <li className="list-none">
      <Link href={item.url} className="text-sm font-normal text-[#fafafacc]">
        {item.title}
      </Link>
    </li>
  );
}
