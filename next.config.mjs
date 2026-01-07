/** @type {import('next').NextConfig} */


const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/whoisalpanet' : '',
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Modern optimizations for Next.js 16
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', '@tabler/icons-react', 'lucide-react'],
  },
  // Improved TypeScript support
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
