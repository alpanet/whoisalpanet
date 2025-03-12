/** @type {import('next').NextConfig} */
import nextI18nextConfig from './next-i18next.config.js';
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  i18n: nextI18nextConfig.i18n,
  basePath: process.env.NODE_ENV === 'production' ? '/whoisalpanet' : '',
  reactStrictMode: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
