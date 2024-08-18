"use client";

import AboutSection from "@/sections/about";
import FeaturedSection from "@/sections/featured";
import LandingSection from "@/sections/landing";

export default function Home() {
  return (
    <div className={"pb-8"}>
      <LandingSection />
      <FeaturedSection />
      <AboutSection />
    </div>
  );
}
