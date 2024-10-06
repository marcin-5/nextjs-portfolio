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

const renderTimelineItems = () =>
  EXPERIENCES_DATA.map((experience, index) => (
    <TimelineItem
      key={index}
      date={experience.date}
      title={experience.title}
      subTitle={experience.subTitle}
      link={experience.link}
      tag={experience.tag}
    />
  ));

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>{renderTimelineItems()}</Timeline>
    </Card>
  );
}
