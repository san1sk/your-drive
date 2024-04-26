/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: "grand-mandrill-84.convex.cloud",
          },
        ],
      },
};


export default nextConfig;
