// eslint-disable-next-line @typescript-eslint/no-require-imports

/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SERVER_URL: process.env.SERVER_URL
	}
	// webpack: config => {
	// 	config.plugins.push(
	// 		new RsdoctorWebpackPlugin({
	// 			// plugin options
	// 		})
	// 	)

	// 	return config
	// }
}

// const nextConfigModify = withNextBundleAnalyzer(nextConfig)

export default nextConfig
