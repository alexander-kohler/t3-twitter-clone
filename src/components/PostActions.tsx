import {
  HeartIcon,
  ReplyIcon,
  RepostIcon,
  ShareIcon,
} from "~/components/icons";

type PostActionsProps = {
  className?: string;
};

const ActionButton = ({
  label,
  hoverClass,
  children,
}: {
  label: string;
  hoverClass: string;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    className={`group flex items-center gap-1 text-chirp-muted transition ${hoverClass}`}
    aria-label={label}
    onClick={(e) => e.preventDefault()}
  >
    <span className="rounded-full p-1 transition group-hover:bg-chirp-sky/80">
      {children}
    </span>
  </button>
);

export const PostActions = ({ className }: PostActionsProps) => {
  return (
    <div
      className={`mt-3 flex max-w-[425px] justify-between text-[13px] ${className ?? ""}`}
    >
      <ActionButton label="Reply" hoverClass="hover:text-chirp-blue">
        <ReplyIcon className="h-[17px] w-[17px]" />
      </ActionButton>
      <ActionButton label="Repost" hoverClass="hover:text-emerald-500">
        <RepostIcon className="h-[17px] w-[17px]" />
      </ActionButton>
      <ActionButton label="Like" hoverClass="hover:text-rose-500">
        <HeartIcon className="h-[17px] w-[17px]" />
      </ActionButton>
      <ActionButton label="Share" hoverClass="hover:text-chirp-blue">
        <ShareIcon className="h-[17px] w-[17px]" />
      </ActionButton>
    </div>
  );
};