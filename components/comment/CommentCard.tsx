"use client";

import CommentForm from "@/components/form/CommenForm";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CommentCardProps } from "@/utils/types";
import { useState } from "react";

const CommentCard = ({
  author,
  comment,
  reply,
  videoId,
  commentId,
  isReply,
}: CommentCardProps) => {
  const [onReply, setOnReply] = useState(false);

  return (
    <Card
      className={cn(
        reply
          ? "bg-[#1d1d1d] border-none ml-10"
          : "border-[1px] bg-[#1d1d1d] p-5"
      )}
    >
      <div className="flex gap-x-2 items-center">
        <Avatar className="size-6">
          <AvatarImage
            src={author.profileImage || "/assets/images/client-1.png"}
            alt="author"
          />
        </Avatar>
        <p className="capitalize text-sm text-[#bdbdbd]">{author.username}</p>
      </div>
      <div>
        <p className="text-[#bdbdbd] mt-2">{comment}</p>
      </div>
      {!isReply && (
        <div className="flex justify-end mt-3">
          {!onReply ? (
            <Button
              onClick={() => setOnReply(true)}
              className="text-sm rounded-full bg-[#252525] text-white hover:text-black"
            >
              Reply
            </Button>
          ) : (
            <CommentForm
              close={() => setOnReply(false)}
              videoId={videoId}
              commentId={commentId}
              author={author.username}
            />
          )}
        </div>
      )}
      {reply.length > 0 && (
        <div className="flex-col flex gap-y-10 mt-5">
          {reply.map((rep) => (
            <CommentCard
              isReply
              reply={[]}
              comment={rep.comment}
              commentId={rep.commentId!}
              videoId={videoId}
              key={rep.id}
              author={{
                profileImage: rep.User?.profileImage,
                username: rep.User?.username,
              }}
            />
          ))}
        </div>
      )}
    </Card>
  );
};

export default CommentCard;
