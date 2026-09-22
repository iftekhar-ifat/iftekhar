import React from "react";
import { MapPin, Mail, Download } from "lucide-react";
import { Icons } from "../icons";
import TechIcons from "../shared/tech-icons";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const USER_DATA = {
  location: "Helsinki, Finland",
  email: "iftekharifat007@gmail.com",
  cv: "https://drive.google.com/file/d/18UiMFPqsflLBBe5gSwcbwGQa3ZpNvYX5/view?usp=sharing",
};

export default function SocialSection() {
  return (
    <div className="font-mono text-sm flex flex-wrap items-center justify-between gap-3">
      {/* Location */}
      <span className="flex items-center gap-1.5 text-muted-foreground">
        <MapPin size={14} />
        {USER_DATA.location}
        <Icons.finlandFlag className="w-5 h-5" />
      </span>
      {/* Social links + résumé */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={`mailto:${USER_DATA.email}`}
            aria-label="Email"
            className="border rounded p-2 text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/iftekhar-ifat/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="border rounded p-2 transition-colors hover:border-foreground/30"
          >
            <Icons.linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Iftekhar-Ifat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="border rounded p-2 transition-colors hover:border-foreground/30"
          >
            <TechIcons item="github" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=SGT-GUgAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
            className="border rounded p-2 transition-colors hover:border-foreground/30"
          >
            <TechIcons item="scholar" />
          </a>
          <a
            href="https://x.com/_ifte"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="border rounded p-2 transition-colors hover:border-foreground/30"
          >
            <TechIcons item="twitter" />
          </a>
        </div>
        <div className="hidden sm:block h-5">
          <Separator orientation="vertical" />
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
        >
          <a href={USER_DATA.cv} target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4" />
            Résumé
          </a>
        </Button>
      </div>
    </div>
  );
}
