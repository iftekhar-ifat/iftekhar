import EventsSection from "@/components/home/events-section";
import FeaturedBlogs from "@/components/home/featured-blogs";
import FeaturedPublications from "@/components/home/featured-publications";
import IntroSection from "@/components/home/intro-section";
import SkillSection from "@/components/home/skill-section";
import SocialSection from "@/components/home/socials-section";
import UpdatesSection from "@/components/home/updates-section";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <MaxWidthWrapper className="my-8 md:my-10">
      <div className="space-y-4">
        <IntroSection />
        <SocialSection />
        <Separator />
        <UpdatesSection />
        <Separator />
        <FeaturedPublications />
        <Separator />
        <EventsSection />
        <Separator />
        <SkillSection />
        <Separator />
        <FeaturedBlogs />
      </div>
    </MaxWidthWrapper>
  );
}
