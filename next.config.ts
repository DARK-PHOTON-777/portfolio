import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	output: "export",
	basePath: isProd ? "/portfolio" : "",
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
	allowedDevOrigins: ["192.168.1.*"],
};

export default nextConfig;
