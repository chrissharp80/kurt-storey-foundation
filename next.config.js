/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  serverExternalPackages: ['@prisma/client'],
  reactStrictMode: false,
};

module.exports = nextConfig;
