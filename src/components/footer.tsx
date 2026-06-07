import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 dark:border-white/10">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between px-4 md:px-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-foreground"
            >
              Next.js
            </a>
            <div className="h-4">
              <Separator orientation="vertical" className="bg-muted" />
            </div>
            <a
              href="https://mdxjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-foreground"
            >
              MDX
            </a>
            <div className="h-4">
              <Separator orientation="vertical" className="bg-muted" />
            </div>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-foreground"
            >
              Tailwind
            </a>
          </div>
          <a
            href="https://github.com/Iftekhar-Ifat/iftekhar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 hover:underline hover:text-foreground"
          >
            GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
