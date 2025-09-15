/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ** allows all domains
        port: "",
        pathname: "/**", // allow any path
      },
    ],
  },
};
export default nextConfig;
