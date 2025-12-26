import React from "react";
import { Badge } from "../ui/badge";
import TechIcons, { IconSlug } from "./tech-icons";
import { cn } from "@/lib/utils";

export default function TechStackBadge({
  className,
  title,
  icon,
}: {
  className?: string;
  title: string;
  icon: IconSlug;
}) {
  return (
    <Badge
      variant="outline"
      className={cn("px-1 text-sm flex items-center gap-1", className)}
    >
      <TechIcons item={icon} size={16} />
      {title}
    </Badge>
  );
}
