export const avatarUrl = (seed: string) =>
  `https://api.dicebear.com/7.x/thumbs/png?seed=${encodeURIComponent(seed)}`;