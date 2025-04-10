/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'server',
  images: {
    domains: [],
    remotePatterns: [],
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
