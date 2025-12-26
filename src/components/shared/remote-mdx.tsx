import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "../../../mdx-components";
import { rehypeExtractRaw, rehypeForwardRaw } from "@/lib/mdx";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import PublicationType from "@/components/publication-type";

const codeHighlighOptions: Options = {
  theme: {
    light: "one-light",
    dark: "aurora-x",
  },
  keepBackground: false,
};

export default function RemoteMDX({ content }: { content: string }) {
  const mdxComponents = getMDXComponents({ PublicationType });
  return (
    <MDXRemote
      source={content}
      components={mdxComponents}
      options={{
        mdxOptions: {
          rehypePlugins: [
            rehypeExtractRaw, // 1. Extract raw BEFORE
            [rehypePrettyCode, codeHighlighOptions], // 2. Syntax highlighting
            rehypeKatex, // 3. Latex Support
            rehypeForwardRaw, // 4. Forward raw AFTER
          ],
          remarkPlugins: [remarkMath, remarkGfm],
        },
      }}
    />
  );
}
