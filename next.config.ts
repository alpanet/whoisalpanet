import type { NextConfig } from "next";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

const nextConfig: NextConfig = withMDX({
  output: "export",
  basePath: "/whoisalpanet",
  assetPrefix: "/whoisalpanet",
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: "babel-loader",
          options: { presets: ["next/babel"] },
        },
        "@mdx-js/loader",
      ],
    });
    return config;
  },
});

export default nextConfig;
