import { z } from "zod";

import { DEV_USER_ID } from "~/lib/dev-user";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { Prisma } from "@prisma/client";

type PostWithAuthor = Prisma.PostGetPayload<{ include: { author: true } }>;

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
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      orderBy: { createdAt: "desc" },
      include: { author: true },
    });

    return posts.map(toPostWithUser);
  }),

  create: publicProcedure
    .input(
      z.object({
        content: z.string().trim().min(1).max(255),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.create({
        data: {
          content: input.content,
          authorId: DEV_USER_ID,
        },
        include: { author: true },
      });

      return toPostWithUser(post);
    }),
});