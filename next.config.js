/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.midjourney.com", pathname: "/**" },
    ],
  },
  poweredByHeader: false,
  compress: true,
  // Smaller client chunks for faster parsing
  experimental: {
    optimizePackageImports: ["@heroui/react", "lucide-react", "react-icons"],
  },
};

module.exports = nextConfig;
