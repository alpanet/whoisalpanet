/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/whoisalpanet' : '',
  output: 'export',
  reactStrictMode: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
