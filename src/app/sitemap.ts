
import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lanhphalla.dev";

  const projectUrls = portfolioData.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
