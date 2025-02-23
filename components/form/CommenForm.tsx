"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useVideoComment } from "@/hooks/useVideo";
import { Send } from "lucide-react";
import React from "react";

type CommentFormProps = {
  videoId: string;
  commentId?: string;
  author: string | null | undefined;
  close?: () => void;
};

const CommentForm = ({ author, videoId, commentId }: CommentFormProps) => {
  const { form, isPending, onSubmit } = useVideoComment(videoId, commentId);
  return (
    <Form {...form}>
      <form className="relative w-full" onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={`Response to ${author}...`}
                  className="bg-inherit"
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isPending}
          className="p-0 bg-transparent absolute top-2 right-4 hover:bg-transparent"
        >
          {isPending ? (
            <Spinner />
          ) : (
            <Send className="text-white/50 cursor-pointer hover:text-white/80" />
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CommentForm;
