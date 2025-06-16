import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cendlos.gov.gh',
        pathname: '/training/wp-content/uploads/**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['axios', 'oidc-token-hash', '@auth/core']
  }
};

export default nextConfig;