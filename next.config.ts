/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: isProduction ? "export" : "standalone",
  basePath: isProduction ? '/whoisalpanet' : '',
  images: {
    unoptimized: true,
    domains: ['alpaslan-datasance.github.io'],
  },
  async headers() {
    return [
      {
        source: "/(.*).(js|css|woff|woff2|jpg|jpeg|png|gif|svg|ico|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;