import React from "react";
import Image, { type StaticImageData } from "next/image";
import RemoteMDX from "../shared/remote-mdx";
import TimelineMDXWrapper from "../shared/shared-component";
import HelsinkiLogo from "@/assets/university-of-helsinki-logo.svg";
import LeadingUniversityLogo from "@/assets/leading-university-logo.svg";

type EducationData = {
  id: number;
  degree: string;
  institution: string;
  logo: StaticImageData;
  date: string;
  location: string;
  description: string;
};

const educationData: EducationData[] = [
  {
    id: 1,
    degree: "M.Sc. in Data Science",
    institution: "University of Helsinki",
    logo: HelsinkiLogo,
    date: "Jul. 2026 – Present",
    location: "Helsinki, Finland",
    description: `Awarded **100% scholarship**.`,
  },
  {
    id: 2,
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Leading University",
    logo: LeadingUniversityLogo,
    date: "Jan. 2020 – Jan. 2024",
    location: "Sylhet, Bangladesh",
    description: `CGPA 3.53 / 4.00 | Thesis on skin-cancer classification, published in **IEEE Access (Q1)**.`,
  },
];

export default function EducationSection() {
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Education:</div>
      </div>
      <div className="space-y-6">
        {educationData.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="shrink-0 h-fit border rounded-md p-1.5 bg-white">
              <Image
                src={item.logo}
                alt={item.institution}
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-x-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-primary">{item.degree}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.institution}
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
