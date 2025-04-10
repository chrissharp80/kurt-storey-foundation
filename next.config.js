/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  images: {
    domains: [],
    remotePatterns: [],
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
    serverActions: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
