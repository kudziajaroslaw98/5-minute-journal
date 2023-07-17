/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
    reactStrictMode: true,
    images: {
        domains: ['cdn.sanity.io', 'images.unsplash.com'],
    },
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
});
