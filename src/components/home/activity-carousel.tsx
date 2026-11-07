"use client";

import React, { useEffect, useRef, useState } from "react";
import ActivityPost, { type ActivityData } from "./activity-post";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";

// Each LinkedIn embed is a full page in an iframe, so we only load the posts
// that are visible (plus the next one), and nothing until the section is near
// the viewport. Loaded posts stay mounted so scrolling back is instant.
export default function ActivityCarousel({ posts }: { posts: ActivityData[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(new Set());

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api || !isNearViewport) return;

    const loadVisibleSlides = () => {
      const inView = api.slidesInView();
      const visible = inView.length
        ? inView
        : [api.selectedScrollSnap(), api.selectedScrollSnap() + 1];
      const toLoad = [...visible, Math.max(...visible) + 1].filter(
        (index) => index < posts.length,
      );
      setLoadedSlides((prev) =>
        toLoad.every((index) => prev.has(index))
          ? prev
          : new Set([...prev, ...toLoad]),
      );
    };

    loadVisibleSlides();
    api.on("slidesInView", loadVisibleSlides);
    api.on("select", loadVisibleSlides);
    return () => {
      api.off("slidesInView", loadVisibleSlides);
      api.off("select", loadVisibleSlides);
    };
  }, [api, isNearViewport, posts.length]);

  return (
    <div ref={rootRef}>
      <Carousel opts={{ align: "start" }} setApi={setApi}>
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem key={post.id} className="basis-[85%] sm:basis-1/2">
              <ActivityPost post={post} shouldLoad={loadedSlides.has(index)} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 sm:-left-12" />
        <CarouselNext className="right-1 sm:-right-12" />
      </Carousel>
    </div>
  );
}
