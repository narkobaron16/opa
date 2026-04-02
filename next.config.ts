/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.giphy.com', // Добавь и этот, если используешь гифки оттуда
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;