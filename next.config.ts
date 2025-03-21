import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import globImporter from "node-sass-glob-importer";
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  /* config options here */
  // swcMinify: true,

  eslint: {
    dirs: ["."],
  },
  sassOptions: {
    sourceMap: true,
    silenceDeprecations: ['legacy-js-api'],
    importer: globImporter(),
    includePaths: [path.join(process.cwd(), "styles")],
  },
  poweredByHeader: false,
  // reactStrictMode: true,
};

export default withNextIntl(nextConfig);
