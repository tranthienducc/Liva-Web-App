import { z } from "zod";

export const workspaceSchema = z.object({
  name: z.string().min(1, { message: "Workspace name cannot be emty" }),
});

export const moveVideoLocationSchema = z.object({
  folder_id: z.string().nullish(),
  workspace_id: z.string(),
});

export const commentVideoSchema = z.object({
  comment: z.string().min(1, { message: "Comment cannot be empty" }),
});
