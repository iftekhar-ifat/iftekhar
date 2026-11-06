import React from "react";
import Image from "next/image";
import { Trophy } from "lucide-react";
import { ExpandableWrapper } from "../shared/expandable-wrapper";
import RemoteMDX from "../shared/remote-mdx";
import TimelineMDXWrapper from "../shared/shared-component";
import { Icons } from "../icons";

type AchievementData = {
  id: number;
  date?: string;
  title: string;
  issuer?: string;
  icon?: keyof typeof Icons;
  logo?: string;
  description: string;
};

const achievementData: AchievementData[] = [
  {
    id: 1,
    date: "May, 2025",
    title: "NCA Cybersecurity Research & Innovation Pioneers Grant",
    issuer: "National Cybersecurity Authority (NCA), Saudi Arabia",
    logo: "/assets/nca-logo.png",
    description: `Awarded the prestigious **[NCA Cybersecurity Research & Innovation Pioneers Grant](https://nca.gov.sa/en/innovation-and-investment/cybersecurity-research/)** by the **National Cybersecurity Authority of the Kingdom of Saudi Arabia** for the research proposal "Privacy-Preserving Federated Learning Platform for the Healthcare Domain".`,
  },
  {
    id: 2,
    date: "Oct, 2024",
    title: "IBM TechXchange WatsonX Hackathon — Top 100",
    issuer: "IBM",
    icon: "ibm",
    description: `Achieved a **top 100 ranking** in the [IBM TechXchange Watsonx Hackathon](https://www.linkedin.com/posts/iftekhar-ifat_ibmtechxchange-hackathon-watsonx-activity-7250081248100958208-B3LT), earning a complimentary ticket to attend the **IBM TechXchange Conference** in Las Vegas, NV.`,
  },
  {
    id: 3,
    date: "Oct, 2024",
    title: "NASA Space Apps Challenge 2024 — Global Nominee",
    issuer: "NASA",
    icon: "nasa",
    description: `Our team **ORBITUS** was selected as one of **947 [Global Nominees](https://www.linkedin.com/posts/shakib-absar-_alhamdulillah-our-team-orbitus-has-been-ugcPost-7257407276137750528-QDIl)** from **9,900+ teams** worldwide in the NASA Space Apps Challenge 2024.`,
  },
];

export default function AchievementsSection() {
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Honors and Awards:</div>
      </div>
      <ExpandableWrapper maxHeight={400}>
        <div className="space-y-6">
          {achievementData.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="relative flex items-center justify-center shrink-0 self-start size-11 border rounded-md bg-white overflow-hidden">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.title}
                    fill
                    className="object-contain p-1"
                  />
                ) : item.icon ? (
                  React.createElement(Icons[item.icon], {
                    className: "size-9 text-neutral-400",
                  })
                ) : (
                  <Trophy className="h-7 w-7 text-neutral-500" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-x-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-primary">{item.title}</div>
                    {item.issuer && (
                      <div className="text-sm text-muted-foreground">
                        {item.issuer}
                      </div>
                    )}
                  </div>
                  {item.date && (
                    <div className="shrink-0 text-xs text-muted-foreground sm:text-right">
                      {item.date}
                    </div>
                  )}
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
      </ExpandableWrapper>
    </div>
  );
}
