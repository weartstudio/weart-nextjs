/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      '2.gravatar.com',
      'secure.gravatar.com',
      process.env.IMAGE_DOMAIN
    ],
  },
}

module.exports = nextConfig
