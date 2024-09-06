/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mahfuzur.me",
      },
    ],
  },
};

export default nextConfig;
