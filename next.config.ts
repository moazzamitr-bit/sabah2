import type { NextConfig } from "next";

const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/sabah2" : "",
  assetPrefix: isGitHubPages ? "/sabah2/" : undefined,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: isGitHubPages ? "tsconfig.pages.json" : "tsconfig.json",
  },
};

export default nextConfig;
