/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 严格模式
  swcMinify: true, // 使用swc进行代码压缩
  eslint: {
    ignoreDuringBuilds: true, // eslint校验不通过也能打包
  },
};

module.exports = nextConfig;
