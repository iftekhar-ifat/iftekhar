import RemoteMDX from "@/components/shared/remote-mdx";
import {
  Status,
  StatusIndicator,
  StatusLabel,
  StatusProps,
} from "@/components/ui/status";
import {
  Timeline,
  TimelineDate,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineTitle,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import React from "react";

type SubmittedWork = {
  id: number;
  date?: string;
  status?: StatusProps["status"];
  statusTitle?: string;
  title: string;
  description: string;
};

const submittedWorkData: SubmittedWork[] = [
  {
    id: 1,
    date: "January, 2026",
    status: "ongoing",
    statusTitle: "Accepted",
    title:
      "TFFM: Topology-Aware Feature Fusion Module via Latent Graph Reasoning for Retinal Vessel Segmentation",
    description: `Our paper **"TFFM: Topology-Aware Feature Fusion Module via Latent Graph Reasoning for Retinal Vessel Segmentation"** has been accepted at **P2P-CV @ WACV 2026** for **Oral Presentation**. [More Info](https://tffm-module.github.io/)`,
  },
  {
    id: 2,
    date: "November, 2025",
    status: "ongoing",
    statusTitle: "Accepted",
    title:
      "Multi-Strategy Optimization of U-Net Variants for Orthopantomogram Segmentation",
    description: `Our paper titled **Multi-Strategy Optimization of U-Net Variants for Orthopantomogram Segmentation** has been accepted at the 4th IEEE Conference on Biomedical Engineering, Computer and Information Technology for Health 2025 (IEEE BECITHCON 2025)`,
  },

  {
    id: 3,
    title:
      "Improving Adversarial Robustness of U-Net for Dental X-Ray Segmentation via Mixed Attack Training",
    date: "November, 2025",
    status: "hold",
    statusTitle: "Under Review",
    description: `Completed the [InteX](https://www.intexlab.net/) funded research project focusing on **adversarial attack/defense**. Submitted the manuscript on **Scientific Reports**`,
  },
  {
    id: 4,
    date: "2025",
    status: "hold",
    statusTitle: "Ongoing",
    title:
      "National Cybersecurity Authority (NCA) Cybersecurity Research & Innovation Pioneers Grant",
    description: `Awarded the prestigious **NCA Cybersecurity Research & Innovation Pioneers Grant** by the National Cybersecurity Authority of the Kingdom of Saudi Arabia for the research proposal "Privacy-Preserving Federated Learning Platform for the Healthcare Domain".`,
  },
];

export default function SubmittedWorks() {
  return (
    <Timeline className="ml-4">
      {submittedWorkData.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <div>
              <div className={cn("flex items-center", item.status && "gap-2")}>
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
  );
}
