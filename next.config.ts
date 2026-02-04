import type { NextConfig } from 'next';
import CompressionPlugin from 'compression-webpack-plugin';
import type { Module } from 'webpack';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      'swiper',
      'react-markdown',
      'rehype-raw',
      'remark-gfm',
      'react-spinners',
      'react-google-recaptcha',
    ],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      {
        protocol: 'https',
        hostname: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config, { isServer, dev }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    if (!isServer && !dev) {
      // Brotli
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].br',
          algorithm: 'brotliCompress',
          test: /\.(js|css|html|svg|txt|xml|json)$/,
          compressionOptions: { level: 11 },
          threshold: 8192,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        })
      );

      // Gzip
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|html|svg|txt|xml|json)$/,
          exclude: /\.map$/,
          compressionOptions: { level: 9 },
          threshold: 8192,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        })
      );

      // splitChunks
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module: Module) {
                if (!module.context) return 'vendor';
                const match = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                );
                const packageName = match ? match[1] : 'vendor';
                return `npm.${packageName.replace('@', '')}`;
              },
              chunks: 'all',
              priority: 20,
            },
          },
        },
      };
    }

    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
};

export default nextConfig;
