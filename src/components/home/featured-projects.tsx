import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import FeaturedProjectsCard from "./featured-projects-card";

export default function FeaturedProjects() {
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Featured Projects:</div>
      </div>
      <FeaturedProjectsCard />
      <div className="mt-4 w-fit justify-self-end transition-all duration-300 flex justify-end text-muted-foreground hover:underline group">
        <Link className="flex" href="/projects">
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
