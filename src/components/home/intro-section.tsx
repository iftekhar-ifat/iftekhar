import React from "react";
import { TextLoop } from "../ui/text-loop";
import Image from "next/image";
import ProfileImg from "@/assets/profile.png";

export default function IntroSection() {
  return (
    <div className="flex">
      <Image
        alt="profile-img"
        src={ProfileImg}
        placeholder="blur"
        width={128}
        height={128}
        className="size-28 md:size-32 rounded-full"
      />
      <div className="flex items-center">
        <div className="pl-4 max-w-full">
          <h1 className="flex items-center text-2xl font-semibold">
            Iftekhar Ahmed
          </h1>
          <TextLoop
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-muted-foreground"
          >
            <span>RA @Intex</span>
            <span>RI @CCDS</span>
            <span>Working on Computer Vision</span>
          </TextLoop>
        </div>
      </div>
    </div>
  );
}
