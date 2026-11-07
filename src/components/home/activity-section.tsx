import React from "react";
import activityData from "@/assets/activity-data.json";
import ActivityCarousel from "./activity-carousel";
import { type ActivityData } from "./activity-post";

export default function ActivitySection() {
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Activity:</div>
      </div>
      <ActivityCarousel posts={activityData as ActivityData[]} />
    </div>
  );
}
