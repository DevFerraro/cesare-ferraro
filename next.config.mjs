// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cesare-ferraro.ghost.io',
        pathname: '/content/images/**',
      },
    ],
  },
};

export default nextConfig;