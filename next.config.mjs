/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
	  SERVER_URL: process.env.SERVER_URL,
	},
	reactStrictMode: true,
	swcMinify: true,
	images: {
	  domains: [],
	},
	output: 'standalone',
  };
  
  export default nextConfig;