type IconProps = { className?: string };

export const HomeIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
    <path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
  </svg>
);

export const SearchIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
    <path d="M10.25 3.75a6.5 6.5 0 1 0 4.033 11.62l4.49 4.49 1.06-1.06-4.49-4.49A6.527 6.527 0 0 0 10.25 3.75Zm0 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
  </svg>
);

export const BellIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
    <path d="M12 2a5.5 5.5 0 0 0-5.5 5.5v1.67c0 .49-.2.96-.55 1.3L4.8 13.9A1.75 1.75 0 0 0 6.25 17h11.5a1.75 1.75 0 0 0 1.45-3.1l-1.15-1.43c-.35-.34-.55-.81-.55-1.3V7.5A5.5 5.5 0 0 0 12 2Zm0 18a2.75 2.75 0 0 0 2.57-1.75H9.43A2.75 2.75 0 0 0 12 20Z" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
    <path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75Zm2.75-.25a1.25 1.25 0 0 0-1.25 1.25v.39l7.48 4.67a1.25 1.25 0 0 0 1.29 0l7.48-4.67v-.39a1.25 1.25 0 0 0-1.25-1.25H5.75ZM19.5 8.36 13.2 12.3a2.75 2.75 0 0 1-2.83 0L4.5 8.36v9.89c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V8.36Z" />
  </svg>
);

export const UserIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
    <path d="M12 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5ZM5.5 20.25v-.83a6.5 6.5 0 0 1 13 0v.83a1.25 1.25 0 0 1-1.25 1.25h-10.5a1.25 1.25 0 0 1-1.25-1.25Z" />
  </svg>
);

export const ReplyIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
    <path d="M7.5 5.5 2 11l5.5 5.5V13h5a6.5 6.5 0 0 1 6.07 4.14h1.68A8.25 8.25 0 0 0 12.5 11.5H7.5V5.5Z" />
  </svg>
);

export const RepostIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
    <path d="M7 4.5 3 8.5l4 4V10h6a5 5 0 0 1 5 5v1.5h1.5V15A6.5 6.5 0 0 0 13 8.5H7v-4Zm10 11 4 4-4 4V18h-6a5 5 0 0 1-5-5v-1.5H4.5V13A6.5 6.5 0 0 0 11 19.5h6v-4Z" />
  </svg>
);

export const HeartIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
    <path d="M12 20.25 4.5 12.7a5.25 5.25 0 0 1 8.33-6.37l.67.78.67-.78a5.25 5.25 0 1 1 8.33 6.37L12 20.25Z" />
  </svg>
);

export const ShareIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
    <path d="M12 3 4 9v12h5v-7h6v7h5V9l-8-6Zm0 2.83 6 4.5v9.17h-2v-7H8v7H6v-9.17l6-4.5Z" />
  </svg>
);