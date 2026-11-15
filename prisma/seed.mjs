import { PrismaClient } from "@prisma/client";
import { avatarUrl } from "./avatar-url.mjs";

const prisma = new PrismaClient();

const users = [
  {
    id: "local-dev-user",
    username: "localdev",
    profilePicture: avatarUrl("localdev"),
  },
  {
    id: "user-alice",
    username: "alice_codes",
    profilePicture: avatarUrl("alice_codes"),
  },
  {
    id: "user-bob",
    username: "bob_builds",
    profilePicture: avatarUrl("bob_builds"),
  },
  {
    id: "user-cara",
    username: "cara_designs",
    profilePicture: avatarUrl("cara_designs"),
  },
  {
    id: "user-dan",
    username: "dan_debugs",
    profilePicture: avatarUrl("dan_debugs"),
  },
];

const posts = [
  {
    id: "post-welcome",
    authorId: "local-dev-user",
    content: "Hello from local dev — no Clerk required. 🎉",
    createdAt: new Date("2023-11-14T09:12:00.000Z"),
  },
  {
    id: "post-alice-1",
    authorId: "user-alice",
    content: "Shipped a tiny tRPC router today. Types go brrr.",
    createdAt: new Date("2023-11-28T15:40:00.000Z"),
  },
  {
    id: "post-alice-2",
    authorId: "user-alice",
    content: "Hot take: SQLite is underrated for side projects.",
    createdAt: new Date("2024-01-06T18:22:00.000Z"),
  },
  {
    id: "post-bob-1",
    authorId: "user-bob",
    content: "Refactored one component. Deleted 200 lines. Feeling dangerous.",
    createdAt: new Date("2023-12-02T11:05:00.000Z"),
  },
  {
    id: "post-bob-2",
    authorId: "user-bob",
    content: "If it works in prod, do not touch it. (I touched it.)",
    createdAt: new Date("2024-02-19T08:33:00.000Z"),
  },
  {
    id: "post-cara-1",
    authorId: "user-cara",
    content: "New feed layout: more whitespace, fewer angry buttons.",
    createdAt: new Date("2023-12-20T20:18:00.000Z"),
  },
  {
    id: "post-cara-2",
    authorId: "user-cara",
    content: "Placeholder avatars beat stock photo CEOs any day.",
    createdAt: new Date("2024-03-01T14:47:00.000Z"),
  },
  {
    id: "post-dan-1",
    authorId: "user-dan",
    content: "Reproduced the bug. It was me. It is always me.",
    createdAt: new Date("2024-01-15T07:56:00.000Z"),
  },
  {
    id: "post-dan-2",
    authorId: "user-dan",
    content: "console.log('done') // famous last words",
    createdAt: new Date("2024-02-08T22:11:00.000Z"),
  },
  {
    id: "post-local-2",
    authorId: "local-dev-user",
    content: "Seed data loaded — scroll the timeline and pretend it's 2012.",
    createdAt: new Date("2024-01-29T16:30:00.000Z"),
  },
];

async function main() {
  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {
        username: user.username,
        profilePicture: user.profilePicture,
      },
      create: user,
    });
  }

  const seedPostIds = posts.map((post) => post.id);
  await prisma.post.deleteMany({
    where: { id: { notIn: seedPostIds } },
  });

  for (const post of posts) {
    await prisma.post.upsert({
      where: { id: post.id },
      update: {
        content: post.content,
        authorId: post.authorId,
        createdAt: post.createdAt,
      },
      create: post,
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });