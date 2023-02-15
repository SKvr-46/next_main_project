/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  
  //外部ソースの画像を使えるようにする
  images: {
    domains: ["images.microcms-assets.io"],
  },
}


module.exports = nextConfig
