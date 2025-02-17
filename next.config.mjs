/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: isProduction ? "export" : "standalone",
  basePath: isProduction ? '/whoisalpanet' : '',
  images: {
    unoptimized: true,
    domains: ['alpanet.github.io'],
  },
};

export default nextConfig;