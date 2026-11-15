import { z } from "zod";

import { DEV_USER_ID } from "~/lib/dev-user";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { PostWithAuthor } from "~/server/db";

const toPostWithUser = (post: PostWithAuthor) => ({
  post: {
    id: post.id,
    createdAt: post.createdAt,
    content: post.content,
    authorId: post.authorId,
  },
  author: {
    id: post.author.id,
    username: post.author.username,
    profilePicture: post.author.profilePicture,
  },
});

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.listPosts(100).map(toPostWithUser);
  }),

  create: publicProcedure
    .input(
      z.object({
        content: z.string().trim().min(1).max(255),
      }),
    )
    .mutation(({ ctx, input }) => {
      const post = ctx.db.createEphemeralPost(DEV_USER_ID, input.content);
      return toPostWithUser(post);
    }),
});