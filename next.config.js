/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: '.next',
};

module.exports = nextConfig;
