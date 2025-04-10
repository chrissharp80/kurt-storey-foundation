/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // distDir: '.next',
  // output: 'standalone',
  basePath: '',
};

module.exports = nextConfig;
