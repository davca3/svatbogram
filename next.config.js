/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/a/ageeb677lt/*',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/f/*'
      }
    ],
  },
};

module.exports = nextConfig;
