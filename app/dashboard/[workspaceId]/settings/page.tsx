"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { enableFirstView } from "@/lib/actions/user/enable-first-view";
import { getFirstView } from "@/lib/actions/user/get-first-view";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SettingsPage = () => {
  const [firstView, setFirstView] = useState<undefined | boolean>(undefined);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    if (firstView !== undefined) return;
    const fetchData = async () => {
      const response = await getFirstView();
      if (response.status === 200) setFirstView(response?.data);
    };

    fetchData();
  }, [firstView]);

  const swithState = async (checked: boolean) => {
    const view = await enableFirstView(checked);
    if (view) {
      toast("Successfully swith state");
    }
  };

  return (
    <div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-4 flex lg:flex-row flex-col items-start gap-5">
          <div
            className={cn(
              "rounded-xl overflow-hidden cursor-pointer border-2 border-transparent",
              theme === "system" && "border-red-600"
            )}
            onClick={() => setTheme("system")}
          >
            <Image
              priority={true}
              src="/assets/images/system-mode.png"
              className="rounded-xl object-cover"
              alt="system-mode"
              width={200}
              height={200}
            />
          </div>
          <div
            className={cn(
              "rounded-xl overflow-hidden cursor-pointer border-2 border-transparent",
              theme === "light" && "border-red-600"
            )}
            onClick={() => setTheme("light")}
          >
            <Image
              priority={true}
              src="/assets/images/light-mode.png"
              className="rounded-xl object-cover"
              alt="light-mode"
              width={200}
              height={200}
            />
          </div>
          <div
            className={cn(
              "rounded-xl overflow-hidden cursor-pointer border-2 border-transparent",
              theme === "dark" && "border-red-600"
            )}
            onClick={() => setTheme("dark")}
          >
            <Image
              priority={true}
              src="/assets/images/dark-mode.png"
              className="rounded-xl object-cover"
              alt="dark-mode"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div> */}
      <h2 className="text-2xl font-bold mt-4">Video Sharing Settings</h2>
      <p className="text-muted-foreground">
        Enable this feature will send you notification when someone watched your
        video for the first time. This feature can help during client outreach.
      </p>
      <Label className="flex items-center gap-2 mt-3">
        Enable first view
        <Switch
          onCheckedChange={swithState}
          disabled={firstView === undefined}
          checked={firstView}
          onClick={() => setFirstView(!firstView)}
        />
      </Label>
    </div>
  );
};

export default SettingsPage;
