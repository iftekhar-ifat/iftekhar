import fs from "fs";
import path from "path";
import matter, { language } from "gray-matter";
import { IconSlug } from "@/components/shared/tech-icons";
import { visit } from "unist-util-visit";

export type BlogMetadata = {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  thumbnail: string;
  featured?: boolean;
};

export type ProjectMetadata = {
  title: string;
  description: string;
  order: number;
  thumbnail: string;
  techstack: {
    title: string;
    icon: IconSlug;
  }[];
  links: {
    type: "github" | "live";
    url: string;
  }[];
  slug: string;
};

const BLOG_ROOT = path.join(process.cwd(), "public/content/blogs");
const RESEARCH_ROOT = path.join(process.cwd(), "public/content/research");
const PROJECT_ROOT = path.join(process.cwd(), "public/content/projects");

// Utility to find all blog folders containing index.mdx
function getBlogFolders(root: string): string[] {
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((d) => path.join(root, d.name));
}

export async function getAllBlogsMetadata(): Promise<BlogMetadata[] | null> {
  const folders = getBlogFolders(BLOG_ROOT);

  const blogs = await Promise.all(
    folders.map(async (folderPath) => {
      const indexMd = path.join(folderPath, "index.mdx");
      if (!fs.existsSync(indexMd)) return null;

      const raw = await fs.promises.readFile(indexMd, "utf8");
      const { data } = matter(raw);

      // Return null early if not published
      if (!data.isPublished) return null;

      const slug = path.basename(folderPath);
      return {
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        thumbnail: data.thumbnail,
        slug,
      };
    })
  );

  // Filter out nulls and sort latest first
  return blogs
    .filter((blog): blog is BlogMetadata => !!blog)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getFeaturedBlogsMetadata(): Promise<
  BlogMetadata[] | null
> {
  const folders = getBlogFolders(BLOG_ROOT);

  const blogs = await Promise.all(
    folders.map(async (folderPath) => {
      const indexMd = path.join(folderPath, "index.mdx");
      if (!fs.existsSync(indexMd)) return null;

      const raw = await fs.promises.readFile(indexMd, "utf8");
      const { data } = matter(raw);

      // Return null early if not published
      if (!data.isPublished) return null;

      // Return null early if not featured
      if (!data.featured) return null;

      const slug = path.basename(folderPath);

      return {
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        thumbnail: data.thumbnail,
        slug,
      };
    })
  );

  return blogs
    .filter((blog): blog is BlogMetadata => !!blog)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getBlogBySlug(
  slug: string
): Promise<{ content: string; metadata: BlogMetadata } | null> {
  const folderPath = path.join(BLOG_ROOT, slug);
  const indexMd = path.join(folderPath, "index.mdx");
  if (!fs.existsSync(indexMd)) return null;

  const raw = await fs.promises.readFile(indexMd, "utf8");
  const { content, data } = matter(raw);

  // Return null early if not published
  if (!data.isPublished) return null;

  return {
    content,
    metadata: {
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      thumbnail: data.thumbnail,
      slug,
    },
  };
}

export function getAllSlugs(): string[] {
  return getBlogFolders(BLOG_ROOT).map((folderPath) =>
    path.basename(folderPath)
  );
}

export async function getResearchContent() {
  try {
    const publicationsPath = path.join(RESEARCH_ROOT, "publications.mdx");
    const ongoingPath = path.join(RESEARCH_ROOT, "ongoing.mdx");

    const [publicationsContent, ongoingContent] = await Promise.all([
      fs.promises.readFile(publicationsPath, "utf8").catch(() => null),
      fs.promises.readFile(ongoingPath, "utf8").catch(() => null),
    ]);

    return {
      publications: publicationsContent
        ? matter(publicationsContent)
        : matter("No publication available"),
      ongoing: ongoingContent
        ? matter(ongoingContent)
        : matter("No ongoing work"),
    };
  } catch (error) {
    console.error("Error reading research content:", error);
    return {
      publications: null,
      ongoing: null,
    };
  }
}

export async function getFeaturedPublications() {
  try {
    const publicationsPath = path.join(
      RESEARCH_ROOT,
      "featured-publications.mdx"
    );

    const publicationsContent = await fs.promises
      .readFile(publicationsPath, "utf8")
      .catch(() => null);

    return {
      publications: publicationsContent
        ? matter(publicationsContent)
        : matter("No publication available"),
    };
  } catch (error) {
    console.error("Error reading research content:", error);
    return {
      publications: null,
    };
  }
}

export async function getAllProjectsMetadata(): Promise<
  ProjectMetadata[] | null
> {
  const folders = getBlogFolders(PROJECT_ROOT);

  const projects = await Promise.all(
    folders.map(async (folderPath) => {
      const indexMd = path.join(folderPath, "index.mdx");
      if (!fs.existsSync(indexMd)) return null;

      const raw = await fs.promises.readFile(indexMd, "utf8");
      const { data } = matter(raw);

      // Return null early if not published
      if (!data.isPublished) return null;

      const slug = path.basename(folderPath);
      return {
        title: data.title,
        description: data.description,
        order: data.order,
        thumbnail: data.thumbnail,
        techstack: data.techstack,
        slug,
      };
    })
  );

  return projects
    .filter((project): project is ProjectMetadata => !!project)
    .sort((a, b) => a.order - b.order);
}

export async function getProjectBySlug(
  slug: string
): Promise<{ content: string; metadata: ProjectMetadata } | null> {
  const folderPath = path.join(PROJECT_ROOT, slug);
  const indexMd = path.join(folderPath, "index.mdx");
  if (!fs.existsSync(indexMd)) return null;

  const raw = await fs.promises.readFile(indexMd, "utf8");
  const { content, data } = matter(raw);

  // Return null early if not published
  if (!data.isPublished) return null;

  return {
    content,
    metadata: {
      title: data.title,
      description: data.description,
      order: data.order,
      thumbnail: data.thumbnail,
      techstack: data.techstack,
      links: data.links,
      slug,
    },
  };
}

// First plugin: Extract raw code BEFORE rehypePrettyCode
export function rehypeExtractRaw() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node?.type === "element" && node?.tagName === "pre") {
        const [codeEl] = node.children;
        if (codeEl.tagName !== "code") return;

        // Store raw on the pre node
        node.raw = codeEl.children?.[0].value;
      }
    });
  };
}

// Second plugin: Forward raw to pre elements AFTER rehypePrettyCode
export function rehypeForwardRaw() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node?.type === "element" && node?.tagName === "figure") {
        // Check if this is a rehype-pretty-code fragment
        if (!("data-rehype-pretty-code-figure" in node.properties)) {
          return;
        }

        let title;
        // Copy raw from div to all pre children
        for (const child of node.children) {
          if (child.tagName === "figcaption") {
            // Improved: extract all text from figcaption, not just first child
            title = child.children
              .filter((c: any) => c.type === "text")
              .map((c: any) => c.value)
              .join("");
          }
          if (child.tagName === "pre") {
            child.properties["raw"] = node.raw;
            child.properties["title"] = title;
          }
        }
      }
    });
  };
}
