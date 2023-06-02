/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['occ-0-396-1567.1.nflxso.net'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig
