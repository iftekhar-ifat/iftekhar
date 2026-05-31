import {
  siTypescript,
  siReact,
  siNextdotjs,
  siExpress,
  siNodedotjs,
  siTailwindcss,
  siNumpy,
  siPandas,
  siTensorflow,
  siPytorch,
  siNestjs,
  siMeta,
  siPostgresql,
  siMysql,
  siMongodb,
  siGithub,
  siPrisma,
  siZod,
  siReactquery,
  siOpencv,
  siGo,
  siRust,
  siRuby,
  siPhp,
  siC,
  siCplusplus,
  siSwift,
  siKotlin,
  siDocker,
  siJavascript,
  siJson,
  siHtml5,
  siGnubash,
  siHuggingface,
  siGooglescholar,
  siX,
  siElectronbuilder,
  siElectron,
} from "simple-icons";

import {
  TanStack,
  Python,
  OpenAIDark,
  OpenAILight,
} from "@ridemountainpig/svgl-react";
import { cn } from "@/lib/utils";

type SimpleIcon = { hex: string; title: string; path: string };

type SvglIcon = React.ComponentType<{
  width?: number;
  height?: number;
  className?: string;
}>;

type IconEntry = SimpleIcon | SvglIcon;

function isSvglIcon(icon: IconEntry): icon is SvglIcon {
  return typeof icon === "function";
}

const curatedIcons: Record<string, IconEntry> = {
  python: Python,
  typescript: siTypescript,
  javascript: siJavascript,
  react: siReact,
  nextjs: siNextdotjs,
  express: siExpress,
  nodejs: siNodedotjs,
  tailwind: siTailwindcss,
  numpy: siNumpy,
  pandas: siPandas,
  tensorflow: siTensorflow,
  pytorch: siPytorch,
  nestjs: siNestjs,
  meta: siMeta,
  postgres: siPostgresql,
  mysql: siMysql,
  mongodb: siMongodb,
  github: siGithub,
  prisma: siPrisma,
  zod: siZod,
  react_query: siReactquery,
  open_cv: siOpencv,
  go: siGo,
  rust: siRust,
  ruby: siRuby,
  php: siPhp,
  c: siC,
  cpp: siCplusplus,
  swift: siSwift,
  kotlin: siKotlin,
  docker: siDocker,
  json: siJson,
  html: siHtml5,
  bash: siGnubash,
  huggingface: siHuggingface,
  scholar: siGooglescholar,
  twitter_x: siX,
  electron: siElectron,
  electronBuilder: siElectronbuilder,
  tanstack: TanStack,
  openAI: OpenAILight,
} as const;

export type IconSlug = keyof typeof curatedIcons;

const aliasGroups: Record<string, string[]> = {
  python: ["py", "python"],
  typescript: ["ts", "typescript"],
  javascript: ["js", "javascript"],
  react: ["react", "reactjs", "jsx", "tsx"],
  nextjs: ["next", "nextjs"],
  express: ["express", "expressjs"],
  nodejs: ["node", "nodejs", "node.js"],
  tailwind: ["tailwind", "tailwindcss", "tw"],
  numpy: ["np", "numpy"],
  pandas: ["pd", "pandas"],
  tensorflow: ["tf", "tensorflow"],
  pytorch: ["torch", "pytorch"],
  nestjs: ["nestjs"],
  meta: ["meta", "facebook", "facebookmeta"],
  postgres: ["pg", "postgres", "postgresql"],
  mysql: ["mysql"],
  mongodb: ["mongo", "mongodb"],
  github: ["github", "gh"],
  prisma: ["prisma"],
  zod: ["zod"],
  react_query: ["react_query", "react-query", "reactquery"],
  open_cv: ["opencv", "open_cv", "open-cv"],
  go: ["go", "golang"],
  rust: ["rust"],
  ruby: ["ruby", "rb"],
  php: ["php"],
  c: ["c"],
  cpp: ["cpp", "c++", "c-plus-plus"],
  swift: ["swift"],
  kotlin: ["kotlin"],
  docker: ["docker", "dockerfile"],
  json: ["json"],
  html: ["html", "html5"],
  bash: ["shell", "bash", "terminal", "command"],
  huggingface: ["huggingface"],
  scholar: ["scholar", "google-scholar"],
  twitter_x: ["twitter", "x"],
  electron: ["electron"],
  electronBuilder: ["electron-builder"],
  tanstack: ["tanstack"],
  openAI: ["open-ai"],
};

function normalizeAlias(input: string) {
  return String(input || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_");
}

const aliases: Record<string, IconSlug> = {};
Object.entries(aliasGroups).forEach(([slug, names]) => {
  aliases[normalizeAlias(slug)] = slug as IconSlug;
  names.forEach((name) => {
    const n = normalizeAlias(name);
    aliases[n] = slug as IconSlug;
    aliases[String(name).toLowerCase()] = slug as IconSlug;
  });
});

const invertedIcons: IconSlug[] = [
  "nextjs",
  "express",
  "numpy",
  "pandas",
  "github",
  "prisma",
  "json",
  "twitter_x",
  "openAI",
];

type IconsProps = {
  item: IconSlug | string;
  size?: number;
};

export const SUPPORTED_ICON_SLUGS = Object.keys(curatedIcons) as IconSlug[];

export default function TechIcons({ item, size = 16 }: IconsProps) {
  const rawKey = String(item ?? "");
  const key = normalizeAlias(rawKey);
  const slug = (aliases[key] ?? key) as IconSlug;
  const icon = curatedIcons[slug];

  if (!icon) return null;

  if (isSvglIcon(icon)) {
    const SvglComponent = icon;
    const isInverted = invertedIcons.includes(slug);
    return (
      <span
        className={cn(
          "inline-flex shrink-0 overflow-hidden",
          isInverted && "[&>svg]:fill-current",
        )}
        style={{ width: size, height: size }}
      >
        <SvglComponent />
      </span>
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={invertedIcons.includes(slug) ? "currentColor" : `#${icon.hex}`}
      style={{ width: size, height: size }}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
