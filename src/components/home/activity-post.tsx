"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Icons } from "../icons";

export type ActivityData = {
  id: number;
  date: string;
  title: string;
  embedUrl: string;
  postUrl: string;
  height: number;
};

// LinkedIn embeds are laid out for this width. We render at that size and
// scale it down to fit the card. `height` in the data is the collapsed post's
// height at this width.
const EMBED_WIDTH = 504;
// Cap each card at this (unscaled) height so every card is the same size;
// longer posts fade out at the bottom.
const MAX_EMBED_HEIGHT = 560;

export default function ActivityPost({
  post,
  shouldLoad,
}: {
  post: ActivityData;
  shouldLoad: boolean;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.73);
  const visibleHeight = Math.min(post.height, MAX_EMBED_HEIGHT);
  const isTruncated = post.height > MAX_EMBED_HEIGHT;
  // `collapsed=1` clamps the post text to a few lines with a "…more" link.
  const embedSrc = `${post.embedUrl}${post.embedUrl.includes("?") ? "&" : "?"}collapsed=1`;

  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new ResizeObserver(([entry]) =>
      setScale(entry.contentRect.width / EMBED_WIDTH),
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-full flex-col gap-2">
      <div
        ref={frameRef}
        className="relative w-full overflow-hidden rounded-md"
        style={{ height: visibleHeight * scale }}
      >
        {shouldLoad ? (
          <>
            <iframe
              src={embedSrc}
              title={post.title}
              loading="lazy"
              scrolling="no"
              width={EMBED_WIDTH}
              height={post.height}
              className="origin-top-left border-0"
              style={{ transform: `scale(${scale})` }}
              allowFullScreen
            />
            {isTruncated && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
            )}
          </>
        ) : (
          <div className="h-full w-full animate-pulse rounded-md bg-muted" />
        )}
        <a
          href={post.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          aria-label={`Open "${post.title}" on LinkedIn`}
          className="absolute inset-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
        />
      </div>
      <a
        href={post.postUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View on LinkedIn"
        className="mt-auto flex w-fit items-center gap-1 self-end text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline"
      >
        View on
        <Icons.linkedin className="h-3.5 w-3.5" />
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
