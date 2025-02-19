import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

const EXPERIENCES_DATA = [
  {
    date: "2012 — 2015",
    title: "Python/Linux developer",
    subTitle: "Pisi Linux",
    link: "https://pisilinux.org/",
    tags: ["Remote"],
  },
];

export default function ExperienceCard() {
  return (
    <Card title="My Experience" sectionId={"experience"}>
      <Timeline>
        {EXPERIENCES_DATA.map((experience, index) => (
          <TimelineItem key={index} {...experience} />
        ))}
      </Timeline>
    </Card>
  );
}
