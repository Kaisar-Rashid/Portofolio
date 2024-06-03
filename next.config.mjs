import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const SentryWebpackPluginOptions = {
  org: "kaisar-w3",
  project: "javascript-nextjs",

  silent: !process.env.CI,

  widenClientFileUpload: true,

  hideSourceMaps: true,

  disableLogger: true,

  automaticVercelMonitors: true,
};

const exportedConfig =
  process.env.NODE_ENV === "production"
    ? withSentryConfig(nextConfig, SentryWebpackPluginOptions)
    : nextConfig;

export default exportedConfig;
