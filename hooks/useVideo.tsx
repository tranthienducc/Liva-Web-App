import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutationData } from "@/hooks/useMutationData";
import { createCommentAndReply } from "@/lib/actions/comment/comment-and-reply";
import { commentVideoSchema } from "@/services/validations/schema";
import { z } from "zod";
import { useUser } from "@/providers/user-provider";

type MutationResponse = {
  status: number;
  data: {
    id: string;
    createdAt: Date;
    userId: string | null;
    comment: string;
    commentId: string | null;
    videoId: string | null;
  };
};

type FormValues = z.infer<typeof commentVideoSchema>;

export const useVideoComment = (videoId: string, commentId?: string) => {
  const userData = useUser();

  const form = useForm<FormValues>({
    resolver: zodResolver(commentVideoSchema),
    defaultValues: {
      comment: "",
    },
  });
  console.log("user-id", userData.users?.id);

  const { isPending, mutate } = useMutationData<FormValues>(
    ["new-comment"],
    async (data) => {
      const response = await createCommentAndReply(
        userData.users?.id,
        data.comment,
        videoId,
        commentId
      );
      if (!response) {
        throw new Error("Failed to create comment");
      }
      return response as MutationResponse;
    },
    "video-comments",
    () => form.reset()
  );

  const onSubmit = form.handleSubmit(async (data) => {
    await mutate(data);
  });

  return {
    form,
    onSubmit,
    isPending,
  };
};
