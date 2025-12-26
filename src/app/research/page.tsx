import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import { getResearchContent } from "@/lib/mdx";
import { notFound } from "next/navigation";
import RemoteMDX from "@/components/shared/remote-mdx";

export default async function Research() {
  const { publications, ongoing } = await getResearchContent();

  if (!publications || !ongoing) {
    return notFound();
  }

  return (
    <MaxWidthWrapper className="my-4 md:my-8">
      <div className="flex items-center justify-between pb-4">
        <span className="font-mono text-2xl font-bold tracking-wide">
          Research
        </span>
      </div>
      <Separator />
      <div className="my-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xl font-medium tracking-wide">
              Publications
            </span>
          </div>
          <div className="text-neutral-800 dark:text-neutral-300">
            <RemoteMDX content={publications.content} />
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xl font-medium tracking-wide">
              Ongoing
            </span>
          </div>
          <div className="text-neutral-800 dark:text-neutral-300">
            <RemoteMDX content={ongoing.content} />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
