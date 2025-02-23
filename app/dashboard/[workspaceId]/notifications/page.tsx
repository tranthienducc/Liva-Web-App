"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useQueryData } from "@/hooks/useQueryData";
import { getNotifications } from "@/lib/actions/notifications/get-notifications";
import { NotificationProps } from "@/utils/types";
import { User } from "lucide-react";

const NotificationsPage = () => {
  const { data: notiData } = useQueryData(
    ["user-notifications"],
    getNotifications
  );
  const { data: notifications, status } = notiData as NotificationProps;
  if (status !== 200) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <p>No Notification</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {notifications.notification.map((noti) => (
        <div
          key={noti.id}
          className="border-2 flex gap-x-3 items-center rounded-lg p-3"
        >
          <Avatar>
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <p>{noti.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationsPage;
