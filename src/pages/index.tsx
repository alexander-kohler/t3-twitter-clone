import { type NextPage } from "next";
import Head from "next/head";

import { type RouterOutputs, api } from "~/utils/api";
import { useLocalUser } from "~/lib/dev-user";
import { displayNameFromUsername } from "~/lib/display-name";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { LoadingPage } from "~/components/loading";
import { AppLayout } from "~/components/layout/AppLayout";
import { FeedHeader } from "~/components/FeedHeader";
import { PostActions } from "~/components/PostActions";
import { AvatarImage } from "~/components/AvatarImage";
import { CreatePostWizard } from "~/components/CreatePostWizard";

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];
const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  const displayName = displayNameFromUsername(author.username);

  return (
    <article className="flex cursor-default gap-3 border-b border-chirp-line px-4 py-3 transition hover:bg-chirp-panel">
      <AvatarImage
        src={author.profilePicture}
        className="h-12 w-12 shrink-0 rounded-full"
        alt={`@${author.username}'s profile picture`}
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-1 text-[15px] leading-tight">
          <span className="font-bold text-chirp-ink">{displayName}</span>
          <span className="text-chirp-muted">@{author.username}</span>
          <span className="text-chirp-muted">·</span>
          <time
            className="text-chirp-muted hover:underline"
            dateTime={new Date(post.createdAt).toISOString()}
          >
            {dayjs(post.createdAt).fromNow()}
          </time>
        </div>
        <p className="mt-1 whitespace-pre-wrap text-[15px] leading-[1.4] text-chirp-ink">
          {post.content}
        </p>
        <PostActions />
      </div>
    </article>
  );
};

const Feed = () => {
  const { data, isLoading: postsLoading } = api.posts.getAll.useQuery();

  if (postsLoading) return <LoadingPage />;

  if (!data) return <div className="p-4 text-chirp-muted">Something went wrong</div>;

  return (
    <div className="flex flex-col bg-white">
      {data.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useLocalUser();

  api.posts.getAll.useQuery();

  if (!userLoaded) return <div></div>;

  return (
    <>
      <Head>
        <title>Chirp · Home</title>
        <meta name="description" content="A nostalgic microblog timeline demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <FeedHeader />
        {isSignedIn && <CreatePostWizard />}
        <Feed />
      </AppLayout>
    </>
  );
};

export default Home;