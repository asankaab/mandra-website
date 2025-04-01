import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  sassOptions: {
    implementation: 'sass-embedded',
  },
};

export default nextConfig;
