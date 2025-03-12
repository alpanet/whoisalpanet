/** @type {import('next').NextConfig} */
import nextI18nextConfig from './next-i18next.config.js';
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/whoisalpanet' : '',
  output: 'export',
  reactStrictMode: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
