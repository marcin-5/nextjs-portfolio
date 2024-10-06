import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

const EDUCATION_DATA = [
  {
    date: "2002 — 2007",
    title: "IT engineer - Information systems",
    subTitle: "University of Technology Kielce",
  },
];

const EducationTimelineItems: React.FC<{ items: typeof EDUCATION_DATA }> = ({ items }) => <></>;

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {EDUCATION_DATA.map((education, index) => (
          <TimelineItem key={index} {...education} />
        ))}
      </Timeline>
    </Card>
  );
}
