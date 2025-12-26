import { getBlogBySlug } from "@/lib/mdx";
import { format } from "date-fns";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { notFound } from "next/navigation";
import Image from "next/image";
import authorImage from "@/assets/profile.png";
import { Metadata } from "next";
import { cache, Suspense } from "react";
import Loading from "@/app/loading";
import RemoteMDX from "@/components/shared/remote-mdx";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

async function getBlogPageData(slug: string) {
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { blog: null, metadata: null };
  }

  const metadata: Metadata = {
    title: blog.metadata.title,
    description: blog.metadata.description,
    alternates: {
      canonical: `/blogs/${blog.metadata.slug}`,
    },
    openGraph: {
      title: blog.metadata.title,
      description: blog.metadata.description,
      type: "article",
      url: `${BASE_URL}/blogs/${blog.metadata.slug}`,
      images: [`${BASE_URL}${blog.metadata.thumbnail}`],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metadata.title,
      description: blog.metadata.description,
      images: [`${BASE_URL}${blog.metadata.thumbnail}`],
    },
  };

  return { blog, metadata };
}

const getCachedBlogPageData = cache(getBlogPageData);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getCachedBlogPageData(slug);

  return (
    metadata || {
      title: "Page not found!",
      description: "The page you are looking for does not exist.",
    }
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { blog } = await getCachedBlogPageData(slug);

  if (!blog) {
    return notFound();
  }

  const { content, metadata } = blog;
  const thumbnailImage = metadata.thumbnail;

  return (
    <MaxWidthWrapper>
      <div className="my-6 md:my-10">
        <h1 className="scroll-m-20 mb-6 text-center text-4xl font-extrabold tracking-tight text-balance">
          {metadata.title}
        </h1>
        <div className="relative w-full h-auto border rounded-xl">
          <Image
            src={thumbnailImage}
            alt="Blog thumbnail"
            width={1200}
            height={630}
            className="w-full h-auto rounded-xl object-contain"
            placeholder="blur"
            blurDataURL="/assets/thumbnail_placeholder.png"
            priority={true}
          />
        </div>

        <div className="flex items-center my-4">
          <a
            href="https://www.linkedin.com/in/iftekhar-ifat/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full overflow-hidden"
          >
            <Image
              src={authorImage}
              alt="author-image"
              width={50}
              height={50}
              className="rounded-full object-cover"
              placeholder="blur"
            />
          </a>
          <div className="ml-4 flex flex-col">
            <a
              href="https://www.linkedin.com/in/iftekhar-ifat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Iftekhar Ahmed
            </a>
            <p className="text-sm text-muted-foreground">
              {format(new Date(metadata.publishedAt), "MMMM d, yyyy")}
            </p>
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          <article className="text-neutral-800 dark:text-neutral-300">
            <RemoteMDX content={content} />
          </article>
        </Suspense>
      </div>
    </MaxWidthWrapper>
  );
}
