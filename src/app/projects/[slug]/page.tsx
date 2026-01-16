import { getProjectBySlug } from "@/lib/mdx";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import TechStackBadge from "@/components/shared/tech-stack-badge";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import TechIcons from "@/components/shared/tech-icons";
import RemoteMDX from "@/components/shared/remote-mdx";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const linksIconMap = {
  github: <TechIcons item="github" />,
  live: <Link />,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Page not found!",
      description: "The page you are looking for does not exists.",
    };
  }

  const { metadata } = project;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/projects/${metadata.slug}`,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "article",
      url: `${BASE_URL}/projects/${metadata.slug}`,
      images: [`${BASE_URL}${metadata.thumbnail}`],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [`${BASE_URL}${metadata.thumbnail}`],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  const { content, metadata } = project;
  const thumbnailImage = metadata.thumbnail;

  return (
    <MaxWidthWrapper>
      <div className="my-6 md:my-10">
        <div className="relative w-full h-auto border rounded-xl">
          <Image
            src={thumbnailImage}
            alt="Project thumbnail"
            width={1200}
            height={630}
            className="w-full h-auto rounded-xl object-contain"
          />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="scroll-m-20 my-4 text-3xl font-extrabold tracking-tight text-balance">
            {metadata.title}
          </h1>
          <div className="flex gap-2">
            {metadata.links.map((link, index) => (
              <Button
                key={`${link.type}-${index}`}
                variant="outline"
                size="icon"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener">
                  {linksIconMap[link.type]}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-md border p-4">
          <div className="flex gap-2 items-center flex-wrap max-w-full">
            <span className="font-mono whitespace-nowrap">Techstack:</span>
            {metadata.techstack?.map((stack) => (
              <TechStackBadge
                key={stack.title}
                title={stack.title}
                icon={stack.icon}
              />
            ))}
          </div>
        </div>

        <article className="text-neutral-800 dark:text-neutral-300">
          <RemoteMDX content={content} />
        </article>
      </div>
    </MaxWidthWrapper>
  );
}
