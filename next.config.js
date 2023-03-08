/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.corridor.my",
      },
    ],
    // domains: ["www.corridor.my", "startupjobs.asia"],
  },
};

module.exports = nextConfig;
