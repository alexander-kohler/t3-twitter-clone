import { type FormEvent, useState } from "react";

import { AvatarImage } from "~/components/AvatarImage";
import { useLocalUser } from "~/lib/dev-user";
import { api } from "~/utils/api";

export const CreatePostWizard = () => {
  const { user } = useLocalUser();
  const utils = api.useContext();
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);

  const createPost = api.posts.create.useMutation({
    onSuccess: async () => {
      setContent("");
      setError(null);
      await utils.posts.getAll.invalidate();
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  const trimmed = content.trim();
  const canPost = trimmed.length > 0 && !createPost.isLoading;

  const submit = () => {
    if (!canPost) return;
    createPost.mutate({ content: trimmed });
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit();
  };

  return (
    <form
      className="border-b border-chirp-line px-4 pb-3 pt-4"
      onSubmit={onSubmit}
    >
      <div className="flex gap-3">
        <AvatarImage
          src={user.profileImageUrl}
          alt="Profile Picture"
          className="h-12 w-12 rounded-full ring-2 ring-white"
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <textarea
            id="compose-input"
            rows={2}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder="What's on your mind?"
            maxLength={255}
            className="w-full resize-none border-0 bg-transparent pt-1 text-[22px] font-light text-chirp-ink outline-none placeholder:text-chirp-muted"
          />
          <div className="mt-3 flex items-center justify-between border-t border-chirp-line pt-3">
            {error ? (
              <p className="text-sm text-red-500">{error}</p>
            ) : (
              <p className="text-xs text-chirp-muted">
                {255 - content.length} characters left
              </p>
            )}
            <button
              type="submit"
              disabled={!canPost}
              className="rounded-full bg-chirp-blue px-5 py-1.5 text-[15px] font-bold text-white transition hover:bg-chirp-blue-deep disabled:cursor-not-allowed disabled:opacity-40"
            >
              {createPost.isLoading ? "Sending…" : "Chirp"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};