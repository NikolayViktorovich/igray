/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: igray24.ru,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  output: 'standalone',
};

export default nextConfig;