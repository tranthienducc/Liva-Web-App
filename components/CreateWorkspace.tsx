"use client";
import WorkspaceForm from "@/components/form/WorkspaceForm";
import Modal from "@/components/global/modal";
import { Button } from "@/components/ui/button";
import { useQueryData } from "@/hooks/useQueryData";
import { getWorkSpaces } from "@/lib/actions/workspace/get-work-space";
import { PlanProps } from "@/utils/types";
import { FolderPlus } from "lucide-react";

const CreateWorkspace = () => {
  const { data } = useQueryData(["user-workspaces"], getWorkSpaces);

  const { data: plan } = data as PlanProps;

  if (plan.subscription?.plan === "FREE") {
    return <></>;
  }
  if (plan.subscription?.plan === "PRO") {
    return (
      <Modal
        title="Create workspaces"
        description="Workspaces helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private with yourself."
        trigger={
          <Button className="bg-[#1d1d1d] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl">
            <FolderPlus />
            Create workspace
          </Button>
        }
      >
        <WorkspaceForm />
      </Modal>
    );
  }
  return <div></div>;
};

export default CreateWorkspace;
