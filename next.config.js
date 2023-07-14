/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  reactDevOverlay: false,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images:{
    domains:["www.google.com"]
  }
};

module.exports = nextConfig;
