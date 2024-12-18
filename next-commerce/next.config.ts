/** @type {import('next').NextConfig} */
const NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverActions: {},
  },
};

module.exports = NextConfig;
