import React from "react";
import activityData from "@/assets/activity-data.json";
import ActivityPost, { type ActivityData } from "./activity-post";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function ActivitySection() {
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Activity:</div>
      </div>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent className="items-start">
          {(activityData as ActivityData[]).map((post) => (
            <CarouselItem key={post.id} className="basis-[85%] sm:basis-1/2">
              <ActivityPost post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 sm:-left-12" />
        <CarouselNext className="right-1 sm:-right-12" />
      </Carousel>
    </div>
  );
}
