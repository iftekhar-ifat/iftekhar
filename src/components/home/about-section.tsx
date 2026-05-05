import React from "react";
import RemoteMDX from "../shared/remote-mdx";
import TimelineMDXWrapper from "../shared/shared-component";

export default function AboutSection() {
  const about = `Hello 👋 I am Iftekhar, an aspiring AI researcher working with [CCDS](https://ccds.ai/) and [InteX](https://www.intexlab.net/). My research interests lie in **computer vision**. I am currently exploring **Vision-Language Models (VLMs)**, **Vision-Language-Action (VLA) systems**, and **Agentic AI**. I also enjoy building tools and software—mostly things I find useful and sometimes other things too. I'm always open to research collaborations and interesting software projects.`;

  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-2">
        <div className="font-semibold">About:</div>
      </div>
      <TimelineMDXWrapper>
        <RemoteMDX content={about} />
      </TimelineMDXWrapper>
    </div>
  );
}
