/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://takser.onrender.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
