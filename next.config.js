/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    loader: "custom",
    domains: [
      "www.notion.so",
      "lh5.googleusercontent.com",
      "s3-us-west-2.amazonaws.com",
    ],
  },

  env: {
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION,
    NOTION_PAGE_ID: process.env.NOTION_PAGE_ID,
  },
}
