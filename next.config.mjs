const nextConfig = {
	env: {
	  SERVER_URL: process.env.SERVER_URL,
	},
	experimental: {
	  serverActions: true,
	  trustedHosts: [
		'igray24back.ru',
		'igray24.ru',
	  ],
	},
  };
  
  export default nextConfig;