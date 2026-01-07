import type { MDXComponents } from "mdx/types";
import { customMDXComponents } from "@/components/mdx-typography";

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customMDXComponents,
  };
}
