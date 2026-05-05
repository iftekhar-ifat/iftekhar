import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import PublicationType from "@/components/publication-type";
import type { PublicationVenueType } from "@/components/shared/shared-types";
import Link from "next/link";

export type PublicationAuthor = {
  name: string;
  isHighlighted?: boolean;
  equalContribution?: boolean;
  corresponding?: boolean;
};

export type SelectedPublicationType = {
  id: string;
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  venueType?: PublicationVenueType["type"];
  venueText?: string;
  year: number;
  award?: string;
  thumbnail?: string;
  tldr?: string;
  link: string;
};

function AwardBadge({
  award,
  venue,
  year,
}: {
  award: string;
  venue: string;
  year: number;
}) {
  return (
    <div className="absolute top-0 left-0 z-10">
      <div className="bg-primary text-primary-foreground font-mono text-[11px] font-semibold px-2.5 py-1 rounded-br-md leading-tight">
        {venue} {year}, {award}
      </div>
    </div>
  );
}

function AuthorList({ authors }: { authors: PublicationAuthor[] }) {
  return (
    <p className="text-sm text-muted-foreground">
      {authors.map((author, i) => (
        <span key={`${author.name}-${i}`}>
          <span
            className={cn(
              author.isHighlighted &&
                "font-semibold text-foreground tracking-tighter",
            )}
          >
            {author.name}
          </span>
          {i < authors.length - 1 && ", "}
        </span>
      ))}
    </p>
  );
}

function ThumbnailPlaceholder({ title }: { title: string }) {
  const hue =
    title.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
  return (
    <div
      className="w-full h-full flex items-center justify-center rounded-md select-none"
      style={{ background: `hsl(${hue} 40% 92%)` }}
    >
      <span
        className="font-mono text-[10px] font-bold text-center px-2 leading-tight opacity-60"
        style={{ color: `hsl(${hue} 60% 30%)` }}
      >
        {title.slice(0, 4).toUpperCase()}
      </span>
    </div>
  );
}

function PublicationCard({ pub }: { pub: SelectedPublicationType }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 py-5">
        <div className="relative shrink-0 w-full sm:w-50 h-32 rounded-md overflow-hidden border border-border bg-muted">
          {pub.thumbnail ? (
            <Image
              src={pub.thumbnail}
              alt={`${pub.title} figure`}
              fill
              className="object-contain bg-white"
              sizes="200px"
            />
          ) : (
            <ThumbnailPlaceholder title={pub.title} />
          )}
          {pub.award && (
            <AwardBadge award={pub.award} venue={pub.venue} year={pub.year} />
          )}
        </div>

        <div className="flex flex-col gap-1.5 min-w-0">
          <Link
            href={pub.link ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 underline underline-offset-4 decoration-blue-500/35 transition-colors duration-150 hover:text-cyan-500 dark:hover:text-cyan-500 hover:decoration-cyan-500/70 active:text-cyan-500 focus-visible:rounded focus-visible:outline focus-visible:outline-cyan-500 focus-visible:outline-offset-2"
          >
            {pub.title}
          </Link>
          <AuthorList authors={pub.authors} />

          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-xs text-muted-foreground">
              {pub.venue} {pub.year} |
            </span>
            {pub.venueType && (
              <PublicationType
                type={pub.venueType}
                text={pub.venueText ?? pub.venueType}
                className="text-xs px-1.5 py-0.5"
              />
            )}
          </div>

          <Separator />

          {pub.tldr && (
            <div className="mt-1 flex items-start gap-2">
              <span className="font-mono text-xs font-bold text-primary mt-0.5 shrink-0">
                TL;DR:
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pub.tldr}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

type SelectedPublicationsProps = {
  publications: SelectedPublicationType[];
};

export default function SelectedPublications({
  publications,
}: SelectedPublicationsProps) {
  if (!publications.length) return null;

  return (
    <div className="font-mono">
      {publications.map((pub) => (
        <PublicationCard key={pub.id} pub={pub} />
      ))}
    </div>
  );
}
