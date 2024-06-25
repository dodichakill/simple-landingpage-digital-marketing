/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Jika masalah terkait fs, tambahkan baris ini
      };
    }
    return config;
  },
};

export default nextConfig;
