import { avatarUrl } from "~/lib/avatar-url";

/** Fixed local dev user — matches prisma/seed.mjs */
export const DEV_USER_ID = "local-dev-user";

export const DEV_USER = {
  id: DEV_USER_ID,
  username: "localdev",
  profileImageUrl: avatarUrl("localdev"),
} as const;

export const useLocalUser = () => ({
  isLoaded: true,
  isSignedIn: true,
  user: DEV_USER,
});