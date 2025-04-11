/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  distDir: 'out',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  basePath: '',
  reactStrictMode: false,
  
  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' },
    };
  },
};

module.exports = nextConfig;
