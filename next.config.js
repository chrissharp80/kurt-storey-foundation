/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: '.next',
  output: 'standalone',
  trailingSlash: true,
};

module.exports = nextConfig;
