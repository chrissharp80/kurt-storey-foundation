/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  trailingSlash: true,
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: true,
  },
  experimental: {
    serverExternalPackages: ['@prisma/client'],
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
