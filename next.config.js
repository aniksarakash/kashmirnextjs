/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  output: 'export',
  assetPrefix: '/kashmirnextjs/',
  basePath: '/kashmirnextjs',
  trailingSlash: true,
  // Optimize SVG usage
  webpack(config) {
    // Configure SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Fix webpack chunk loading
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = '/kashmirnextjs/_next/';
    }

    return config;
  },
}

module.exports = nextConfig
