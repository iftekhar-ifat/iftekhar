import { getPublications } from "@/lib/mdx";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SelectedPublications from "@/app/research/_components/selected-publications";

export default async function FeaturedPublications() {
  const publications = await getPublications();

  if (!publications) return null;

  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Featured Publications:</div>
      </div>
      <SelectedPublications publications={publications} />
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
