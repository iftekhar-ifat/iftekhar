import React from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";
import RemoteMDX from "../shared/remote-mdx";
import TimelineMDXWrapper from "../shared/shared-component";

type ExperienceData = {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  employmentType?: string;
  logo?: string;
  date: string;
  location: string;
  description: string;
};

const experienceData: ExperienceData[] = [
  {
    id: 1,
    role: "Investigator",
    company: "Intex Research Lab",
    companyUrl: "https://intex-web.vercel.app/",
    employmentType: "Part-time",
    logo: "/assets/intex-logo.png",
    date: "Jun. 2023 – Present",
    location: "Sylhet, Bangladesh",
    description: `- Developed full-stack web apps end-to-end (frontend + backend), including [Expert Tourism](https://www.experttourism.pt/) — a lab client project — and the [lab website](https://intex-web.vercel.app/).
- Built and trained deep-learning models for medical imaging — published in **IEEE Access (Q1)** (skin-cancer classification) and **Scientific Reports (Q1)** (adversarial robustness of panoramic dental X-ray segmentation).
- Secured the **NCA Cybersecurity Research & Innovation Pioneers Grant** for a privacy-preserving federated-learning healthcare project.
- Promoted through **Undergraduate** and **Graduate Research Assistant** roles to **Investigator**.`,
  },
  {
    id: 2,
    role: "Research Intern",
    company: "Center for Computational & Data Sciences (CCDS)",
    companyUrl: "https://ccds.ai/people/iftekhar-ahmed",
    logo: "/assets/ccds-logo.png",
    date: "Nov. 2025 – Sep. 2026",
    location: "Remote",
    description: `- Researched **orthopantomogram (OPG) segmentation** with the MIRA Wing — published *Multi-Strategy Optimization of U-Net Variants for Orthopantomogram Segmentation* at **IEEE BECITHCON 2025**.`,
  },
];

export default function ExperienceSection() {
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Experience:</div>
      </div>
      <div className="space-y-6">
        {experienceData.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="relative flex items-center justify-center shrink-0 self-start size-11 border rounded-md bg-white overflow-hidden">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={item.company}
                  fill
                  className="object-contain p-1.5"
                />
              ) : (
                <Building2 className="h-6 w-6 text-neutral-500" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-x-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-primary">{item.role}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-blue-400 underline underline-offset-4 decoration-blue-500/35 transition-colors duration-150 hover:text-cyan-500 dark:hover:text-cyan-500 hover:decoration-cyan-500/70 active:text-cyan-500 focus-visible:rounded focus-visible:outline focus-visible:outline-cyan-500 focus-visible:outline-offset-2"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                    {item.employmentType && <span> · {item.employmentType}</span>}
                  </div>
                </div>
                <div className="shrink-0 text-xs text-muted-foreground sm:text-right">
                  <div>{item.date}</div>
                  <div>{item.location}</div>
                </div>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                <TimelineMDXWrapper>
                  <RemoteMDX content={item.description} />
                </TimelineMDXWrapper>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
