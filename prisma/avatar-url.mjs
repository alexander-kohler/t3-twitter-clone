/** Keep in sync with src/lib/avatar-url.ts */
/** @param {string} seed */
export const avatarUrl = (seed) =>
  `https://api.dicebear.com/7.x/thumbs/png?seed=${encodeURIComponent(seed)}`;