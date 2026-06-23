/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bymer.pythonanywhere.com",
        port: "",
        pathname: "/media/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "bymerbe.pythonanywhere.com",
        port: "",
        pathname: "/media/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
