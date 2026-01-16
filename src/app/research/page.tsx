import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import { getResearchContent } from "@/lib/mdx";
import RemoteMDX from "@/components/shared/remote-mdx";
import SubmittedWorks from "./_components/submitted-works";

export default async function Research() {
  const { publications } = await getResearchContent();

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
              Submitted Works
            </span>
          </div>
          <SubmittedWorks />
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <span className="font-mono text-xl font-medium tracking-wide">
              Publications
            </span>
          </div>
          <div className="text-neutral-800 dark:text-neutral-300 text-sm">
            {publications && <RemoteMDX content={publications.content} />}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
