import { getFeaturedProjectsMetadata } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import TechStackBadge from "../shared/tech-stack-badge";

export default async function FeaturedProjectsCard() {
  const projects = await getFeaturedProjectsMetadata();

  if (!projects) return null;

  return (
    <div className="font-mono">
      {projects.map((project) => (
        <div key={project.slug} className="flex flex-col sm:flex-row gap-4 py-5">
          <div className="relative shrink-0 w-full sm:w-50 h-32 rounded-md overflow-hidden bg-background">
            <Image
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              fill
              className="object-contain"
              sizes="200px"
            />
          </div>

          <div className="flex flex-col gap-1.5 min-w-0">
            <Link
              href={`/projects/${project.slug}`}
              className="text-blue-500 dark:text-blue-400 underline underline-offset-4 decoration-blue-500/35 transition-colors duration-150 hover:text-cyan-500 dark:hover:text-cyan-500 hover:decoration-cyan-500/70 active:text-cyan-500 focus-visible:rounded focus-visible:outline focus-visible:outline-cyan-500 focus-visible:outline-offset-2"
            >
              {project.title}
            </Link>

            <div className="flex items-center gap-1 flex-wrap">
              {project.techstack?.map((stack) => (
                <TechStackBadge
                  key={stack.title}
                  title={stack.title}
                  icon={stack.icon}
                />
              ))}
            </div>

            <Separator />

            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
