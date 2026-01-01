"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import TechIcons from "./shared/tech-icons";

type Props = {
  children: React.ReactNode;
  title?: string;
  rawCode: string;
};

export function CodeBlock({ children, title, rawCode }: Props) {
  const [copied, setCopied] = useState(false);

  const language =
    React.isValidElement(children) && children.props
      ? (children.props as Record<string, string>)["data-language"]
      : undefined;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="my-2 group relative flex flex-col overflow-hidden rounded-lg border text-sm leading-6 font-mono bg-[var(--codeblock-background)]">
      <div className="relative flex items-center justify-between border-b px-4 py-1">
        <div className="flex items-center gap-2">
          <TechIcons item={language ?? ""} />
          <span className="text-muted-foreground">{title ?? ""}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          aria-label="Copy code"
        >
          {copied ? <Check className="text-emerald-500" /> : <Copy />}
        </Button>
      </div>
      <ScrollArea>
        <pre>{children}</pre>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
