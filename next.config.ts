import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["job-portal-gs-client.vercel.app", "upload.wikipedia.org", 'cdn-images.himalayas.app'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: '/dms/image/v2/**',
      },
    ]
  }
};

export default nextConfig;
