import { profile } from "@/data/profile";

export function getSiteBase(): string {
  const { siteUrl } = profile;
  let parsed: URL;
  try {
    parsed = new URL(siteUrl);
  } catch {
    throw new Error(
      `[profile.ts] siteUrl must be an absolute URL starting with "https://" ` +
        `(e.g. "https://example.com"). Got: "${siteUrl}"`
    );
  }
  if (parsed.protocol !== "https:") {
    throw new Error(
      `[profile.ts] siteUrl must be an absolute URL starting with "https://" ` +
        `(e.g. "https://example.com"). Got: "${siteUrl}"`
    );
  }
  return siteUrl.replace(/\/$/, "");
}

export function resolveAssetUrl(base: string, assetPath: string): string {
  if (assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return assetPath;
  }
  if (!assetPath.startsWith("/")) {
    throw new Error(
      `[profile.ts] Asset paths must start with "/" ` +
        `(e.g. "/profile-photo.jpg"). Got: "${assetPath}"`
    );
  }
  return `${base}${assetPath}`;
}
