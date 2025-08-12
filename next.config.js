/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'www.google.com',
      'randomuser.me'
    ],
  },
}
module.exports = {
  webpack: (config) => {
    config.externals = [...config.externals, { playwright: 'commonjs playwright' }]
    return config
  }
}
module.exports = nextConfig