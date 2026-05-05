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
import RemoteMDX from "../shared/remote-mdx";
import { ScrollArea } from "../ui/scroll-area";
import newsData from "@/assets/news-data.json";
import TimelineMDXWrapper from "../shared/shared-component";

type NewsData = {
  id: number;
  date?: string;
  status?: StatusProps["status"];
  statusTitle?: string;
  title: string;
  description: string;
};

export default function NewsSection() {
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">News:</div>
      </div>
      <ScrollArea type="always" className="h-100">
        <Timeline className="ml-4">
          {(newsData as NewsData[]).map((item) => (
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
      </ScrollArea>
    </div>
  );
}
