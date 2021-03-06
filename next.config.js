/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io", "placehold.jp", "img.youtube.com"],
  },
  eslint: {
    dirs: ["src", "cypress", "__test__"],
  },
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
