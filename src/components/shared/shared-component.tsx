import React from "react";

export default function TimelineMDXWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="[&_p]:mt-0! [&_p]:mb-0! bg-background! text-muted-foreground! font-mono! text-sm!">
      {children}
    </div>
  );
}
