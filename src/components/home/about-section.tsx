import React from "react";
import RemoteMDX from "../shared/remote-mdx";
import TimelineMDXWrapper from "../shared/shared-component";

export default function AboutSection() {
  const about = `Hello 👋 I am Iftekhar, an **AI engineer** and **Data Science master's student at the University of Helsinki**. I like building **AI products, tools, and software** around ideas I find useful or interesting, and I enjoy experimenting to see what I can make out of them. On the research side, I mainly work in **computer vision** and am currently exploring **Vision-Language Models (VLMs)**, **Vision-Language-Action (VLA) systems**, and **Agentic AI**.`;

  return (
    <div className="font-mono max-w-full">
      <TimelineMDXWrapper>
        <RemoteMDX content={about} />
      </TimelineMDXWrapper>
    </div>
  );
}
