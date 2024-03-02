/** @type {import('next').NextConfig} */
const nextConfig = {
  /* output: 'export', */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
