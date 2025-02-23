import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";

export const useZodForm = <T extends ZodSchema, TData, TError, TVariables>(
  schema: T,
  mutation: UseMutateFunction<TData, TError, TVariables, unknown>,
  defaultValues?: z.infer<T>
) => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues ? { ...defaultValues } : undefined,
  });

  const onFormSubmit = handleSubmit(async (values) =>
    mutation(values as unknown as TVariables)
  );

  return {
    register,
    watch,
    reset,
    onFormSubmit,
    errors,
  };
};
