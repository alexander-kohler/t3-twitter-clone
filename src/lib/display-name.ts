export const displayNameFromUsername = (username: string) => {
  if (username === "localdev") return "Local Dev";
  const spaced = username.replace(/_/g, " ");
  return spaced.replace(/\b\w/g, (c) => c.toUpperCase());
};