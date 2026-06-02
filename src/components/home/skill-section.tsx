import React from "react";
import TechStackBadge from "../shared/tech-stack-badge";
import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
} from "../ui/timeline";
import { IconSlug } from "../shared/tech-icons";

type SkillItem = {
  title: string;
  icon: IconSlug;
};

export default function SkillSection() {
  const skills: { [category: string]: SkillItem[] } = {
    ai_ml: [
      { title: "Python", icon: "python" },
      { title: "OpenCV", icon: "open_cv" },
      { title: "PyTorch", icon: "pytorch" },
      { title: "NumPy", icon: "numpy" },
      { title: "Pandas", icon: "pandas" },
      { title: "TensorFlow", icon: "tensorflow" },
      { title: "HuggingFace", icon: "huggingface" },
    ],
    web_dev: [
      { title: "React", icon: "react" },
      { title: "TypeScript", icon: "typescript" },
      { title: "Next", icon: "nextjs" },
      { title: "Tailwind", icon: "tailwind" },
      { title: "Node", icon: "nodejs" },
      { title: "Express", icon: "express" },
      { title: "Nest", icon: "nestjs" },
      { title: "Zod", icon: "zod" },
      { title: "ReactQuery", icon: "react_query" },
      { title: "Tanstack", icon: "tanstack" },
    ],
    misc: [
      { title: "PostgreSQL", icon: "postgres" },
      { title: "MySQL", icon: "mysql" },
      { title: "MongoDB", icon: "mongodb" },
      { title: "Prisma", icon: "prisma" },
    ],
  };

  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Worked with:</div>
      </div>

      <Timeline className="ml-4 text-muted-foreground">
        <TimelineItem>
          <TimelineHeader>
            <TimelineTitle>AI/ML</TimelineTitle>
          </TimelineHeader>
          <TimelineDescription className="mt-2 flex flex-wrap gap-2">
            {skills.ai_ml.map((skill) => (
              <TechStackBadge
                className="bg-card"
                key={skill.title}
                title={skill.title}
                icon={skill.icon}
              />
            ))}
          </TimelineDescription>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader>
            <TimelineTitle>WebDev</TimelineTitle>
          </TimelineHeader>
          <TimelineDescription className="mt-2 flex flex-wrap gap-2">
            {skills.web_dev.map((skill) => (
              <TechStackBadge
                className="bg-card"
                key={skill.title}
                title={skill.title}
                icon={skill.icon}
              />
            ))}
          </TimelineDescription>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader>
            <TimelineTitle>Misc.</TimelineTitle>
          </TimelineHeader>
          <TimelineDescription className="mt-2 flex flex-wrap gap-2">
            {skills.misc.map((skill) => (
              <TechStackBadge
                className="bg-card"
                key={skill.title}
                title={skill.title}
                icon={skill.icon}
              />
            ))}
          </TimelineDescription>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
