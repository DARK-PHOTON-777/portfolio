import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/portfolio",
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
