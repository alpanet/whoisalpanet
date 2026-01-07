import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/metadata";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
    };
}
