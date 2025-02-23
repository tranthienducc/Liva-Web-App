"use client";

import CommentCard from "@/components/comment/CommentCard";
import CommentForm from "@/components/form/CommenForm";
import { TabsContent } from "@/components/ui/tabs";
import { useQueryData } from "@/hooks/useQueryData";
import { getVideoComment } from "@/lib/actions/comment/get-video-comment";
import { VideoCommentProps } from "@/utils/types";

const Activities = ({
  author,
  videoId,
}: {
  author: string;
  videoId: string;
}) => {
  const { data } = useQueryData(["video-comments"], () =>
    getVideoComment(videoId)
  );

  const { data: comments } = data as VideoCommentProps;
  return (
    <TabsContent
      value="Activity"
      className="p-5 bg-[#1d1d1d] rounded-xl flex flex-col gap-y-5"
    >
      <CommentForm videoId={videoId} author={author} />
      {comments?.map((comment) => (
        <CommentCard
          comment={comment?.comment}
          key={comment?.id}
          author={{
            profileImage: comment?.User?.profileImage,
            username: comment?.User?.username,
          }}
          videoId={videoId}
          reply={comment?.reply}
          commentId={comment?.id}
        />
      ))}
    </TabsContent>
  );
};

export default Activities;
