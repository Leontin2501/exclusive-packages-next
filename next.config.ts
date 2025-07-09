import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `
      @use "global/variables" as *;
      @use "global/mixins" as *;
    `,
  },
};

export default nextConfig;
