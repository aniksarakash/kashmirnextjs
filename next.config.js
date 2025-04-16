/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kashmirnextjs' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/kashmirnextjs' : '',
  trailingSlash: true,
  // Disable the Pages Router completely
  useFileSystemPublicRoutes: false,
  // Optimize SVG usage
  webpack(config) {
    // Configure SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig
