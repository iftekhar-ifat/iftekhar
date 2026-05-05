import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import { getPublications } from "@/lib/mdx";
import RecentWorks from "./_components/recent-works";
import { ArrowUpRight } from "lucide-react";
import TechIcons from "@/components/shared/tech-icons";
import SelectedPublications from "./_components/selected-publications";

export default async function Research() {
  const publications = await getPublications();

  return (
    <MaxWidthWrapper className="my-4 md:my-8">
      <div className="flex items-center pb-4">
        <span className="font-mono text-2xl font-bold tracking-wide">
          Research
        </span>
      </div>
      <Separator />
      <div className="my-4">
        <div className="font-mono">
          <div className="flex items-center mb-6">
            <span className="font-mono text-xl font-medium tracking-wide">
              Recent Works
            </span>
          </div>
          <RecentWorks />
        </div>
        <div className="mt-6">
          <div className="flex items-center mb-4">
            <span className="font-mono text-xl font-medium tracking-wide">
              Selected Publications
            </span>
          </div>
          <SelectedPublications publications={publications} />
        </div>
        <Separator />
        <div className="font-mono text-sm mt-2 w-fit justify-self-end transition-all duration-300 flex justify-end text-muted-foreground gap-2">
          <div className="text-primary">All publications: </div>
          <div className="flex hover:underline group">
            <div className="content-center mr-1">
              <TechIcons item="scholar" />
            </div>
            <a
              href="https://scholar.google.com/citations?user=SGT-GUgAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:underline"
            >
              <span>Scholar</span>
              <ArrowUpRight
                size={20}
                className="ml-1 transition-colors duration-300 group-hover:text-primary"
              />
            </a>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
