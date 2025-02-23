import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const SidebarItem = ({
  href,
  icon,
  title,
  selected,
  notifications,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
  selected: boolean;
  notifications?: number;
}) => {
  return (
    <li className="cursor-pointer my-[5px]">
      <Link
        href={href}
        className={cn(
          "flex items-center flex-row group rounded-lg hover:bg-[#1d1d1d]",
          selected ? "bg-[#1d1d1d" : ""
        )}
      >
        <div className="flex items-center gap-2 transition-all p-[5px] cursor-pointer">
          {icon}
          <span
            className={cn(
              "font-medium group-hover:text-[#9d9d9d] transition-all truncate w-32 text-sm",
              selected ? "text-[#9d9d9d]" : "text-[#545454]"
            )}
          >
            {title}
          </span>
        </div>
        {}
      </Link>
    </li>
  );
};

export default SidebarItem;
