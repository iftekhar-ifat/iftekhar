import createMDX from "@next/mdx";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import type { NextConfig } from "next";
import { rehypeExtractRaw, rehypeForwardRaw } from "@/lib/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const codeHighlighOptions: Options = {
  theme: {
    dark: "aurora-x",
    light: "one-light",
  },
  keepBackground: false,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      rehypeExtractRaw, // 1. Extract raw BEFORE
      [rehypePrettyCode, codeHighlighOptions], // 2. Syntax highlighting
      rehypeKatex, // 3. Latex Support
      rehypeForwardRaw, // 4. Forward raw AFTER
    ],
    remarkPlugins: [remarkMath, remarkGfm],
  },
});

export default withMDX(nextConfig);
