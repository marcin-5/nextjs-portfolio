import BackgroundCard from "@/components/cards/background";
import CoursesCard from "@/components/cards/courses";
import EducationCard from "@/components/cards/education";
import ExperienceCard from "@/components/cards/experience";
import MeCard from "@/components/cards/me";
import ProjectsCard from "@/components/cards/projects";
import ResumeCard from "@/components/cards/resume";
import StackCard from "@/components/cards/stack";
import Heading from "@/components/heading/heading";
import Gallery from "@/components/ui/gallery";
import React from "react";

const GRID_CLASSES = "space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0 2xl:grid-cols-3";

const MainInfoCards = () => (
  <>
    <MeCard />
    <ResumeCard />
    <BackgroundCard />
  </>
);

const SkillAndProjectCards = () => (
  <>
    <div className="space-y-4">
      <CoursesCard />
    </div>
    <div className="space-y-4">
      <StackCard />
      <ProjectsCard />
      <ExperienceCard />
      <EducationCard />
    </div>
  </>
);

export default function AboutSection() {
  return (
    <section id="about" className="pt-24 px-3 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        <div className={GRID_CLASSES}>
          <MainInfoCards />
          <div className="2xl:hidden">
            <Gallery />
          </div>
        </div>
        <div className={GRID_CLASSES}>
          <SkillAndProjectCards />
          <div className="hidden 2xl:flex">
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
}
