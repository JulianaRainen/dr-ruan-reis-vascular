import type { NextConfig } from 'next';

// The regular build keeps the existing Worker runtime. The dedicated static
// build produces exportable HTML for conventional hosting such as Hostinger.
const nextConfig: NextConfig = process.env.STATIC_EXPORT === '1'
  ? { output: 'export' }
  : {};

export default nextConfig;
