/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    domains: [],
    remotePatterns: [],
  },
  trailingSlash: false,
  reactStrictMode: false,
};

module.exports = nextConfig;
