/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.sk-static.com'],
    loader: 'imgix',
    path: 'https://images.sk-static.com/',
  },
};

module.exports = nextConfig;
