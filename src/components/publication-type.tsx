"use client";

import { cn } from "@/lib/utils";
import { A_STAR_ALIASES, PublicationVenueType } from "./shared/shared-types";
import { Badge } from "./ui/badge";

const resolveType = (type: string) => {
  if (A_STAR_ALIASES.includes(type)) return "A*";
  return type;
};

const TYPE_STYLES: Record<string, string> = {
  Q1: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-500",
  Q2: "bg-blue-100 dark:bg-blue-500/20 text-blue-500",
  Q3: "bg-orange-100 dark:bg-orange-500/20 text-orange-500",
  Q4: "bg-amber-100 dark:bg-amber-500/20 text-amber-500",
  "Conf.": "bg-neutral-100 dark:bg-neutral-500/20 text-neutral-500",
  "A*": "bg-red-100 dark:bg-red-500/20 text-red-500",
  default: "bg-neutral-100 dark:bg-neutral-500/20 text-neutral-500",
};

export default function PublicationType({
  type,
  text,
  className,
}: PublicationVenueType & { className?: string }) {
  const resolvedType = resolveType(type);
  const style = TYPE_STYLES[resolvedType] ?? TYPE_STYLES.default;

  return (
    <Badge
      className={cn(
        "pointer-events-none px-2 py-0.5 text-sm font-bold",
        style,
        className,
      )}
    >
      {text ?? type}
    </Badge>
  );
}
