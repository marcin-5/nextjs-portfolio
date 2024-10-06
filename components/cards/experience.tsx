import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

const EXPERIENCES_DATA = [
  {
    date: "2012 — 2015",
    title: "Python/Linux developer",
    subTitle: "Pisi Linux",
    link: "https://pisilinux.org/",
    tag: "Remote",
  },
];

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {EXPERIENCES_DATA.map((experience, index) => (
          <TimelineItem key={index} {...experience} />
        ))}
      </Timeline>
    </Card>
  );
}
