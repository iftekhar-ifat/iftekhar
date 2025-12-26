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

type TimelineData = {
  id: number;
  date?: string;
  status?: StatusProps["status"];
  statusTitle?: string;
  title: string;
  description: string;
};

const timelineData: TimelineData[] = [
  {
    id: 1,
    date: "Nov 10, 2025",
    title: "Paper Accepted",
    description:
      "Our paper titled **Multi-Strategy Optimization of U-Net Variants for Orthopantomogram Segmentation** has been accepted at the 4th IEEE Conference on Biomedical Engineering, Computer and Information Technology for Health 2025 (IEEE BECITHCON 2025)",
  },
  {
    id: 2,
    date: "2025",
    status: "ongoing",
    statusTitle: "Ongoing",
    title:
      "National Cybersecurity Authority (NCA) Cybersecurity Research & Innovation Pioneers Grant",
    description: `Awarded the prestigious **NCA Cybersecurity Research & Innovation Pioneers Grant** by the National Cybersecurity Authority of the Kingdom of Saudi Arabia for the research proposal "Privacy-Preserving Federated Learning Platform for the Healthcare Domain".`,
  },
  {
    id: 3,
    title: "Adversarial Attack / Defense project [InteX funded]",
    date: "Nov 1, 2025",
    status: "hold",
    statusTitle: "Submitted",
    description: `Completed the [InteX](https://www.intexlab.net/) funded research project focusing on **adversarial attack/defense**. Submitted the manuscript on **Scientific Reports**`,
  },
  {
    id: 4,
    date: "June, 2025",
    title: "Dental panoramic X-ray image segmentation",
    description: `Working as a research intern at [CCDS MIRA Wing](https://ccds.ai/?portfolio=iftekhar-ahmed) under Prof. Rashedur Rahman's supervision.`,
  },
];

export default function UpdatesSection() {
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Updates:</div>
      </div>
      <ExpandableWrapper maxHeight={500}>
        <Timeline className="ml-4">
          {timelineData.map((item) => (
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
                  <div className="[&_p]:!mt-0 [&_p]:!mb-0 !bg-background !text-muted-foreground !font-mono !text-sm">
                    <RemoteMDX content={item.description} />
                  </div>
                </TimelineDescription>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </ExpandableWrapper>
    </div>
  );
}
