"use client";
import ModeToggle from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { signOut } from "@/lib/actions/user/SignOutUser";
import { useUser } from "@/providers/user-provider";
import { Search, Upload, Video } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const InfoBar = () => {
  const { users } = useUser();
  const router = useRouter();
  const handleLogout = async () => {
    await signOut();
    router.refresh();
  };

  return (
    <header className="pl-20 md:pl-[265px] fixed p-4 w-full flex items-center justify-between gap-4 bg-[#161616]">
      <div className="flex gap-4 justify-center items-center border-2 rounded-full px-4 w-full max-w-lg">
        <Search size={25} className="text-[#707070]" />
        <Input
          className="bg-transparent border-none !placeholder-neutral-500"
          placeholder="Search for people, projects, tags & folders"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button className="bg-[#9d9d9d] flex items-center gap-2">
          <Upload size={20} />
          <span className="flex items-center gap-2">Upload</span>
        </Button>
        <Button className="bg-[#9d9d9d] flex items-center gap-2">
          <Video size={20} />
          <span className="flex items-center gap-2">Record</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={users?.profileImage || "/assets/images/client-1.png"}
              />
              <AvatarFallback>{users?.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ModeToggle />
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default InfoBar;
