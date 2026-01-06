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

type EventData = {
  id: number;
  date?: string;
  status?: StatusProps["status"];
  statusTitle?: string;
  title: string;
  description: string;
};

const eventData: EventData[] = [
  {
    id: 1,
    date: "July, 2025",
    title: "LU-CP-Archive Released",
    description: `Released [LU-CP-Archive](https://lu-cp-archive.vercel.app), a platform for competitive programming at Leading University. The official website of **[LU ACM Community](https://www.facebook.com/profile.php?id=61572507621970)**.`,
  },
  {
    id: 2,
    date: "Jan, 2025",
    title: "Accountant AI Released",
    description: `Launched **[Accountant AI](https://getaccountantai.com/)**, an AI-powered financial management platform featuring automatic transaction extraction via **OCR**, project-based tracking, detailed financial reports, and document history management for organizing finances intelligently.`,
  },
  {
    id: 3,
    date: "Oct, 2024",
    title: "IBM TechXchange Watsonx Hackathon",
    description:
      "Achieved a **top 100 ranking** in the [IBM TechXchange Watsonx Hackathon](https://www.linkedin.com/posts/iftekhar-ifat_ibmtechxchange-hackathon-watsonx-activity-7250081248100958208-B3LT), earning a complimentary ticket to attend the **IBM TechXchange Conference** in Las Vegas, NV.",
  },
  {
    id: 4,
    date: "Oct, 2024",
    title: "NASA Space Apps Challenge 2024 - Global Nominee",
    description: `Our team **ORBITUS** was selected as one of **947 [Global Nominees](https://www.linkedin.com/posts/shakib-absar-_alhamdulillah-our-team-orbitus-has-been-ugcPost-7257407276137750528-QDIl)** from 9,900+ teams worldwide in the NASA Space Apps Challenge 2024.`,
  },
];

export default function EventsSection() {
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Events:</div>
      </div>
      <ExpandableWrapper maxHeight={500}>
        <Timeline className="ml-4">
          {eventData.map((item) => (
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
