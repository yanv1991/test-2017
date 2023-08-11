/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(webpackConfig) {
    return {
      ...webpackConfig,
      optimization: {
        minimize: false
      }
    };
  },
  transpilePackages: [
    'next'
  ],
}

module.exports = nextConfig
