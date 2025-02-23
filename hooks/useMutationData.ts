import {
  MutationKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

export interface MutationResponse {
  data?: string | unknown;
  status: number;
}

export const useMutationData = <TVariables = unknown>(
  mutationKey: MutationKey,
  mutationFn: (variables: TVariables) => Promise<MutationResponse>,
  queryKey?: string,
  onSuccess?: () => void
) => {
  const client = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey,
    mutationFn,
    onSuccess(data: MutationResponse) {
      if (onSuccess) onSuccess();
      if (data.status >= 200 && data.status < 300) {
        toast.success(String(data?.data ?? "Operation successful"));
      } else {
        toast.error(String(data?.data ?? "Operation failed"), {
          duration: 4000,
        });
      }
    },
    onSettled: async () => {
      return await client.invalidateQueries({
        queryKey: [queryKey],
        exact: true,
      });
    },
  });

  return { mutate, isPending };
};
