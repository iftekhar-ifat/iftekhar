import React from "react";

export default function OpenTo() {
  return (
    <div className="font-mono text-sm space-y-3">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-semibold">Open to work</span>
        </div>
        <p className="text-muted-foreground">
          Internship, part-time, or full-time roles in —
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "AI Engineering",
          "Full-Stack",
          "Research + Product",
          "LLM Applications",
          "Agentic Systems",
        ].map((role) => (
          <span
            key={role}
            className="text-xs border rounded-md px-2 py-1 text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  );
}
