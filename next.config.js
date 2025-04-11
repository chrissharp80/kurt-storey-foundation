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
  
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/404.html',
        permanent: false,
        missing: true,
      },
    ];
  },
};

module.exports = nextConfig;
