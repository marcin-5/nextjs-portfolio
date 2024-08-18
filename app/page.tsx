"use client";

import AboutSection from "@/sections/about";
import FeaturedSection from "@/sections/featured";
import LandingSection from "@/sections/landing";

export default function Home() {
  return (
    <>
      <LandingSection />
      <FeaturedSection />
      <AboutSection />
    </>
  );
}
