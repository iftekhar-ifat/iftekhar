import React from "react";
import { Code, MapPin, Mail, Clock2 } from "lucide-react";
import { Icons } from "../icons";
import {
  RelativeTime,
  RelativeTimeZone,
  RelativeTimeZoneDate,
  RelativeTimeZoneDisplay,
} from "../ui/relative-time";
import TechIcons from "../shared/tech-icons";

const USER_DATA = {
  working: "Working on computer vision",
  location: "Sylhet, Bangladesh",
  timezone: "Asia/Dhaka",
  phone: "+8801782565398",
  email: "iftekharifat007@gmail.com",
  linkedin: "iftekhar-ifat",
  github: "Iftekhar-Ifat",
};

export default function SocialSection() {
  return (
    <div className="p-4 rounded-md font-mono text-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
      <div className="flex items-center space-x-3">
        <div className="border rounded p-2">
          <Code size={16} className="text-muted-foreground" />
        </div>
        <span>{USER_DATA.working}</span>
      </div>
      <div className="flex items-center space-x-3">
        <div className="border rounded p-2">
          <MapPin size={16} className="text-muted-foreground" />
        </div>
        <div className="flex items-center space-x-2">
          <span>{USER_DATA.location}</span>
          <Icons.bgFlag className="w-6 h-6" />
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="border rounded p-2">
          <Clock2 size={16} className="text-muted-foreground" />
        </div>
        <RelativeTime>
          <RelativeTimeZone zone={USER_DATA.timezone}>
            <RelativeTimeZoneDisplay />{" "}
            <div className="text-muted-foreground">{"|"}</div>
            <RelativeTimeZoneDate className="text-xs text-muted-foreground" />
          </RelativeTimeZone>
        </RelativeTime>
      </div>
      <div className="flex items-center space-x-3">
        <div className="border rounded p-2">
          <Mail size={16} className="text-muted-foreground" />
        </div>
        <a href={`mailto:${USER_DATA.email}`} className="hover:underline">
          {USER_DATA.email}
        </a>
      </div>
      <div className="flex items-center space-x-3">
        <div className="border rounded p-2">
          <Icons.linkedin className="w-4 h-4" />
        </div>
        <a
          href="https://www.linkedin.com/in/iftekhar-ifat/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {USER_DATA.linkedin}
        </a>
      </div>
      <div className="flex items-center space-x-3">
        <div className="border rounded p-2">
          <TechIcons item="github" />
        </div>
        <a
          href="https://github.com/Iftekhar-Ifat"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {USER_DATA.github}
        </a>
      </div>
    </div>
  );
}
