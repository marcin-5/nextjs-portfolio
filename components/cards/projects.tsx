import projectData from "@/data/project";
import React from "react";
import Card from "../ui/card";
import { ProjectList, ProjectListItem } from "../ui/project-list";

export default function ProjectsCard() {
  return (
    <Card title="My Projects" sectionId={"projects"}>
      <ProjectList>
        {projectData.map((project, index) => (
          <ProjectListItem key={index} {...project} />
        ))}
      </ProjectList>
    </Card>
  );
}
