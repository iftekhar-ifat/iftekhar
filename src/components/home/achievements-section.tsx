import React from "react";
import {
  Timeline,
  TimelineDate,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineTitle,
} from "../ui/timeline";
import {
  Status,
  StatusIndicator,
  StatusLabel,
  StatusProps,
} from "../ui/status";
import { cn } from "@/lib/utils";
import { ExpandableWrapper } from "../shared/expandable-wrapper";
import RemoteMDX from "../shared/remote-mdx";
import TimelineMDXWrapper from "../shared/shared-component";

type AchievementData = {
  id: number;
  date?: string;
  status?: StatusProps["status"];
  statusTitle?: string;
  title: string;
  description: string;
};

const achievementData: AchievementData[] = [
  {
    id: 1,
    date: "May, 2025",
    title: "NCA Cybersecurity Research & Innovation Pioneers Grant",
    description: `Awarded the prestigious **NCA Cybersecurity Research & Innovation Pioneers Grant** by the **National Cybersecurity Authority of the Kingdom of Saudi Arabia** for the research proposal "Privacy-Preserving Federated Learning Platform for the Healthcare Domain".`,
  },
  {
    id: 2,
    date: "Oct, 2024",
    title: "IBM TechXchange WatsonX Hackathon — Top 100",
    description: `Achieved a **top 100 ranking** in the [IBM TechXchange Watsonx Hackathon](https://www.linkedin.com/posts/iftekhar-ifat_ibmtechxchange-hackathon-watsonx-activity-7250081248100958208-B3LT), earning a complimentary ticket to attend the **IBM TechXchange Conference** in Las Vegas, NV.`,
  },
  {
    id: 3,
    date: "Oct, 2024",
    title: "NASA Space Apps Challenge 2024 — Global Nominee",
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
        <Timeline className="ml-4">
          {achievementData.map((item) => (
            <TimelineItem key={item.id}>
              <TimelineHeader>
                <div>
                  <div
                    className={cn("flex items-center", item.status && "gap-2")}
                  >
                    <TimelineDate>{item.date}</TimelineDate>
                    {item.status && (
                      <Status status={item.status}>
                        <StatusIndicator />
                        <StatusLabel text={item.statusTitle} />
                      </Status>
                    )}
                  </div>
                  <TimelineTitle>{item.title}</TimelineTitle>
                </div>
              </TimelineHeader>
              {item.description && (
                <TimelineDescription>
                  <TimelineMDXWrapper>
                    <RemoteMDX content={item.description} />
                  </TimelineMDXWrapper>
                </TimelineDescription>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </ExpandableWrapper>
    </div>
  );
}
