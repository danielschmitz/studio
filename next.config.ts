import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  basePath: '/studio',
  output: 'export',
  /* config options here */
  typescript: {ignoreBuildErrors: true},
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
