import { useMutationData } from "@/hooks/useMutationData";
import { useZodForm } from "@/hooks/useZodForm";
import { createWorkspaceActions } from "@/lib/actions/workspace/create-work-actions";
import { workspaceSchema } from "@/services/validations/schema";

type CreateWorkspaceData = {
  name: string;
};

export const useCreateWorkspace = () => {
  const { mutate, isPending } = useMutationData(
    ["create-workspace"],
    (data: CreateWorkspaceData) => createWorkspaceActions(data.name),
    "user-workspaces"
  );

  const { errors, onFormSubmit, register } = useZodForm(
    workspaceSchema,
    mutate
  );

  return { errors, onFormSubmit, register, isPending };
};
