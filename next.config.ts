import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/whoisalpanet',
  assetPrefix: '/whoisalpanet',
  reactStrictMode: true,
  images: {
    unoptimized: true
}
};

export default nextConfig;
