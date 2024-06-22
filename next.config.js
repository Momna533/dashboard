const { version } = require('next/package.json');
const isCanary = version.includes('canary');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ...(isCanary && { ppr: true }),
  },
};

module.exports = nextConfig;
