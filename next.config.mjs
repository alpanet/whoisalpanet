/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: isProduction ? "export" : "standalone",
};

export default nextConfig;