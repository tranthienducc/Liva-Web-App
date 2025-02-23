"use client";
import GlobalCard from "@/components/global/global-card";
import InfoBar from "@/components/global/info-bar";
import Modal from "@/components/global/modal";
import Search from "@/components/global/search";
import SidebarItem from "@/components/global/sidebar/sidebar-item";
import WorkspacePlaceholder from "@/components/global/sidebar/WorkspacePlaceholder";
import PaymentButton from "@/components/PaymentButton";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MENU_ITEMS } from "@/constants";
import { useQueryData } from "@/hooks/useQueryData";
import { getNotifications } from "@/lib/actions/notifications/get-notifications";
import { getWorkSpaces } from "@/lib/actions/workspace/get-work-space";
import { WORKSPACES } from "@/redux/slices/workspaces";
import { NotificationsProps, WorkspaceProps } from "@/utils/types";
import { Menu, PlusCircle } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

type SidebarProps = {
  activeWorkspaceId: string;
};

const Sidebar = ({ activeWorkspaceId }: SidebarProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const { data, isFetched } = useQueryData(["user-workspaces"], getWorkSpaces);
  const { data: notifications } = useQueryData(
    ["user-notifications"],
    getNotifications
  );

  const { data: workspaces } = data as WorkspaceProps;
  const { data: count } = notifications as NotificationsProps;

  const onChangeActiveWorkSpace = (value: string) => {
    router.push(`/dashboard/${value}`);
  };

  const menus = MENU_ITEMS(activeWorkspaceId);
  const currentWorkspace = workspaces.workspace.find(
    (s) => s.id === activeWorkspaceId
  );

  if (isFetched && workspaces) {
    dispatch(WORKSPACES({ workspaces: workspaces.workspace }));
  }

  const SidebarSection = (
    <div className="bg-[#111111] flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden">
      <div className="bg-[#111111] pb-0 px-4 pt-4 gap-2 flex flex-row justify-center items-center mb-4 absolute top-0 left-0 right-0">
        <Image
          src="/assets/icons/logo-backup.svg"
          alt="logo-svg"
          width={40}
          height={40}
        />
        <p className="text-2xl">Liva</p>
      </div>

      <Select
        defaultValue={activeWorkspaceId}
        onValueChange={onChangeActiveWorkSpace}
      >
        <SelectTrigger className="mt-16 text-neutral-400 bg-transparent">
          <SelectValue placeholder="Select a workspace"></SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#111111] backdrop-blur-xl">
          <SelectGroup>
            <SelectLabel>Workspaces</SelectLabel>
            <Separator />
            {workspaces.workspace.map((wp) => (
              <SelectItem key={wp.id} value={wp.id}>
                {wp.name}
              </SelectItem>
            ))}
            {workspaces.members.length > 0 &&
              workspaces.members.map(
                (workspace) =>
                  workspace.Workspace && (
                    <SelectItem
                      value={workspace.Workspace.id}
                      key={workspace.Workspace.id}
                    >
                      {workspace.Workspace.name}
                    </SelectItem>
                  )
              )}
          </SelectGroup>
        </SelectContent>
      </Select>
      {currentWorkspace?.type === "PUBLIC" &&
        workspaces.subscription?.plan == "PRO" && (
          <Modal
            title="Invite to workspace"
            trigger={
              <span className="text-sm cursor-pointer justify-center flex items-center border-t-neutral-800/90 hover:bg-neutral-800/60 w-full rounded-sm p-[5px] gap-2">
                <PlusCircle
                  size={15}
                  className="text-neutral-800/90 fill-neutral-500"
                />
                <span className="font-semibold text-neutral-400 text-xs">
                  Invite to workspace
                </span>
              </span>
            }
            description="Invite other usersto your workspace"
          >
            <Search workspaceId={activeWorkspaceId} />
          </Modal>
        )}
      <p className="w-full text-[#9d9d9d] font-bold">Menu</p>
      <nav className="w-full">
        <ul>
          {menus.map((menu) => (
            <SidebarItem
              href={menu.href}
              icon={menu.icon}
              selected={pathName === menu.href}
              title={menu.title}
              key={menu.title}
              notifications={
                (menu.title === "Notifications" &&
                  count._count &&
                  count._count.notification) ||
                0
              }
            />
          ))}
        </ul>
      </nav>
      <Separator className="w-4/5" />
      <p className="w-full text-[#9d9d9d] font-bold">Workspaces</p>
      {workspaces.workspace.length === 1 && workspaces.members.length === 0 && (
        <div className="w-full mt-2">
          <p className="text-[#3c3c3c] font-medium text-sm">
            {workspaces.subscription?.plan === "FREE"
              ? "Upgrade to create workspaces"
              : "No workspace"}
          </p>
        </div>
      )}
      <nav className="w-full">
        <ul className="h-[150px] overflow-auto overflow-x-hidden fade-layer">
          {workspaces.workspace.length > 1 &&
            workspaces.workspace.map(
              (item) =>
                item.type !== "PERSONAL" && (
                  <SidebarItem
                    href={`/dashboard/${item.id}`}
                    selected={pathName === `/dashboard/${item.id}`}
                    title={item.name}
                    notifications={0}
                    key={item.name}
                    icon={
                      <WorkspacePlaceholder>
                        {item.name.charAt(0)}
                      </WorkspacePlaceholder>
                    }
                  />
                )
            )}
          {workspaces.members.length > 0 &&
            workspaces.members.map((item) => (
              <SidebarItem
                href={`/dashboard/${item.Workspace.id}`}
                selected={pathName === `/dashboard/${item.Workspace.id}`}
                title={item.Workspace.name}
                notifications={0}
                key={item.Workspace.name}
                icon={
                  <WorkspacePlaceholder>
                    {item.Workspace.name.charAt(0)}
                  </WorkspacePlaceholder>
                }
              />
            ))}
        </ul>
      </nav>
      {workspaces.subscription?.plan === "FREE" && (
        <GlobalCard
          title="Upgrade to Pro"
          description="Unlock AI features like transcription, AI summary, and more."
          footer={<PaymentButton />}
        ></GlobalCard>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-[250px]">
      <InfoBar />
      {/* Sheet mobile and desktop */}
      <div className="md:hidden fixed my-4">
        <Sheet>
          <SheetTrigger asChild className="ml-2">
            <Button variant={"ghost"} className="mt-[2px]">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="p-0 w-fit h-full">
            <SheetHeader className="sr-only">
              <SheetTitle className="sr-only">
                Are you absolutely sure?
              </SheetTitle>
              <SheetDescription className="sr-only">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            {SidebarSection}
          </SheetContent>
        </Sheet>
      </div>
      <div className="md:block hidden h-full max-w-[250px] w-full">
        {SidebarSection}
      </div>
    </div>
  );
};

export default Sidebar;
