/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'repartear.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
