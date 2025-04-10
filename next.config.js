/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: false,
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;
