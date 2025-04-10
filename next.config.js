/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '',
  trailingSlash: true,
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
