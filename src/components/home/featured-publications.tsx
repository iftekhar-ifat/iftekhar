import { getFeaturedPublications } from "@/lib/mdx";
import { notFound } from "next/navigation";
import React from "react";
import { Timeline, TimelineHeader, TimelineItem } from "../ui/timeline";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RemoteMDX from "../shared/remote-mdx";

export default async function FeaturedPublications() {
  const { publications } = await getFeaturedPublications();

  if (!publications) {
    return notFound();
  }

  function extractPublications(content: string): string[] {
    return content
      .split(/\r?\n\r?\n/) // Split by double newlines
      .map((item) => item.trim()) // Remove surrounding whitespace
      .filter((item) => item.length > 0); // Remove any empty entries
  }

  const featuredPublicationItems = extractPublications(publications?.content);

  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Featured Publications:</div>
      </div>
      <Timeline className="ml-4">
        {featuredPublicationItems.map((publication, index) => (
          <TimelineItem key={index} className="pb-4">
            <TimelineHeader>
              <div className="[&_p]:!mt-0 [&_p]:!mb-0 !bg-background !text-muted-foreground !font-mono !text-sm">
                <RemoteMDX content={publication} />
              </div>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
      <div className="mt-4 w-fit justify-self-end transition-all duration-300 flex justify-end text-muted-foreground hover:underline group">
        <Link className="flex" href="/research">
          <span>see more</span>
          <ArrowUpRight
            size={20}
            className="ml-1 transition-colors duration-300 group-hover:text-primary"
          />
        </Link>
      </div>
    </div>
  );
}
