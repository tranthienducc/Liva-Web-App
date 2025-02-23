import { MutationKey, useMutationState } from "@tanstack/react-query";

interface MutationStateVariables {
  id: string;
  name: string;
  content: string;
}

export const useMutationDataState = (mutationKey: MutationKey) => {
  const data = useMutationState({
    filters: { mutationKey },
    select: (mutation) => {
      return {
        variables: mutation.state.variables as MutationStateVariables,
        status: mutation.state.status,
      };
    },
  });

  const latestVariables = data[data.length - 1];
  return { latestVariables };
};
