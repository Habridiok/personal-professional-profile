import type { MetadataRoute } from "next";
import { getSiteBase } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteBase();
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
