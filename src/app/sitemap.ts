import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/about",
        "/projects",
        "/resume",
        "/contact",
    ].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return [...routes];
}
