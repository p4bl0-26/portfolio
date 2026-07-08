import { MetadataRoute } from "next";
import { META } from "@/constants/meta";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: META.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
