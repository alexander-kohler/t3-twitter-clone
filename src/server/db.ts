import { randomUUID } from "crypto";

import { env } from "~/env.mjs";
import {
  type SeedPost,
  type SeedUser,
  SEED_POSTS,
  getUserById,
} from "~/server/seed-data";

export type PostRecord = SeedPost;

export type PostWithAuthor = PostRecord & { author: SeedUser };

const globalForDb = globalThis as unknown as {
  ephemeralPosts?: PostRecord[];
};

const ephemeralPosts =
  globalForDb.ephemeralPosts ?? (globalForDb.ephemeralPosts = []);

if (env.NODE_ENV !== "production") {
  globalForDb.ephemeralPosts = ephemeralPosts;
}

const toPostWithAuthor = (post: PostRecord): PostWithAuthor | null => {
  const author = getUserById(post.authorId);
  if (!author) return null;
  return { ...post, author };
};

export const db = {
  listPosts(limit = 100): PostWithAuthor[] {
    const merged = [...SEED_POSTS, ...ephemeralPosts].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );

    const posts: PostWithAuthor[] = [];
    for (const post of merged) {
      if (posts.length >= limit) break;
      const withAuthor = toPostWithAuthor(post);
      if (withAuthor) posts.push(withAuthor);
    }
    return posts;
  },

  createEphemeralPost(authorId: string, content: string): PostWithAuthor {
    const author = getUserById(authorId);
    if (!author) {
      throw new Error(`Unknown author: ${authorId}`);
    }

    const post: PostRecord = {
      id: randomUUID(),
      authorId,
      content,
      createdAt: new Date(),
    };
    ephemeralPosts.push(post);
    return { ...post, author };
  },
};