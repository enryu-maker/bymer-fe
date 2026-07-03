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
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8003",
        pathname: "/media/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8003",
        pathname: "/media/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
