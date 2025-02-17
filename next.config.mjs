/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/whoisalpanet",
  output: "export",
  reactStrictMode: true,
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;