/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
    localeDetection: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
