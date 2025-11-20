import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

const COURSES_DATA = [
  {
    date: "2025.11.20",
    title: "Laravel 12 & React: Build a Social Media App with Inertia ",
    subTitle: "Piotr Jura",
    link: "https://www.udemy.com/certificate/UC-7d1ba6f4-e270-4daf-b21b-cffde8daad9e/",
    tag: "udemy.com",
  },
  {
    date: "2025.10.15",
    title: "Complete WordPress Developer Course - Plugins & Themes",
    subTitle: "Luis Ramirez Jr",
    link: "https://www.udemy.com/certificate/UC-d735b476-5668-400c-999c-70d908157f2a/",
    tag: "udemy.com",
  },
  {
    date: "2025.08.31",
    title: "Rust: The Complete Developer's Guide",
    subTitle: "Stephen Grider",
    link: "https://www.udemy.com/certificate/UC-552121c0-148d-42cb-b767-f1a8a95b5426/",
    tag: "udemy.com",
  },
  {
    date: "2025.07.24",
    title: "Building web APIs with Rust (advanced)",
    subTitle: "Paris Liakos",
    link: "https://www.udemy.com/certificate/UC-ccf5754e-aba4-4cf5-9587-e178f3401748/",
    tag: "udemy.com",
  },
  {
    date: "2025.06.01",
    title: "Rust & WebAssembly with JS (TS) - The Practical Guide",
    subTitle: "Eincode by Filip Jerga",
    link: "https://www.udemy.com/certificate/UC-f2a52da0-8367-43a4-9242-810227ec1032/",
    tag: "udemy.com",
  },
  {
    date: "2025.06.08",
    title: "Front end web development in Rust",
    subTitle: "Paris Liakos",
    link: " https://www.udemy.com/certificate/UC-147f62ca-d6be-4af2-8911-4fa2b8a38563/",
    tag: "udemy.com",
  },
  {
    date: "2025.03.25",
    title: "Understanding TypeScript",
    subTitle: "Maximilian Schwarzmüller",
    link: "https://www.udemy.com/certificate/UC-598fb4af-25a9-4278-b378-def69671bf13/",
    tag: "udemy.com",
  },
  {
    date: "2025.01.31",
    title: "Learn JAVA Programming - Beginner to Master",
    subTitle: "Abdul Bari",
    link: "https://www.udemy.com/certificate/UC-783eadc2-8229-40dc-8873-1d241bb887e4/",
    tag: "udemy.com",
  },
  {
    date: "2025.01.16",
    title: " Building Realtime Web Apps with Laravel, Vue 3 and Reverb",
    subTitle: "Tapan Sharma",
    link: "https://www.udemy.com/certificate/UC-4c8f691d-bc01-4e6a-baf7-e8cf272af76e/",
    tag: "udemy.com",
  },
  {
    date: "2025.01.09",
    title: "Build a Realtime Chat App with Laravel 11, Vue 3 and Pinia",
    subTitle: " Tapan Sharma",
    link: "https://www.udemy.com/certificate/UC-24ae64f4-f462-4071-9c1a-4e9be9f807a8/",
    tag: "udemy.com",
  },
  {
    date: "2024.12.29",
    title: "The Complete NUXT 3 Bootcamp: Full-Stack Guide",
    subTitle: "Noor Fakhry, Programming Fluency",
    link: "https://www.udemy.com/certificate/UC-4f8cc60c-843c-426f-8bb1-6a9fcf5a72ab/",
    tag: "udemy.com",
  },
  {
    date: "2024.12.26",
    title: "Let's Learn Laravel & Livewire: A Guided Path For Beginners",
    subTitle: "Brad Schiff",
    link: "https://www.udemy.com/certificate/UC-c975cbb6-c61f-4419-b1fe-fc11232acb91/",
    tag: "udemy.com",
  },
  {
    date: "2024.11.09",
    title: "Symfony 6 Framework: Getting Started (Hands-on 2025)",
    subTitle: "dr Artur Karczmarczyk",
    link: "https://www.udemy.com/certificate/UC-168e0c9e-96a7-462f-a138-7361385c7c24/",
    tag: "udemy.com",
  },
  {
    date: "2024.10.01",
    title: "The Complete Guide to Django REST Framework and Vue JS",
    subTitle: "Michele Saba",
    link: "https://www.udemy.com/certificate/UC-f07ee4ef-c969-4985-b467-0bc1b1975475/",
    tag: "udemy.com",
  },
  {
    date: "2024.09.27",
    title: "Vue with Test Driven Development",
    subTitle: "Basar Buyukkahraman",
    link: "https://www.udemy.com/certificate/UC-779765c2-6609-402c-9c50-14f42f8d787c/",
    tag: "udemy.com",
  },
  {
    date: "2024.06.01",
    title: "Python 3: Deep Dive (Part 4 - OOP)",
    subTitle: "Dr. Fred Baptiste",
    link: "https://www.udemy.com/certificate/UC-5023083d-901f-4cb3-a735-9c11b02b388a/",
    tag: "udemy.com",
  },
  {
    date: "2024.05.07",
    title: "Python 3: Deep Dive (Part 3 - Dictionaries, Sets, JSON)",
    subTitle: "Dr. Fred Baptiste",
    link: "https://www.udemy.com/certificate/UC-9b96d9df-6c91-45bf-a13e-75349676ca6a/",
    tag: "udemy.com",
  },
  {
    date: "2024.04.24",
    title: "Python 3: Deep Dive (Part 2 - Iterators, Generators)",
    subTitle: "Dr. Fred Baptiste",
    link: "https://www.udemy.com/certificate/UC-e29ea7b6-21bb-47b7-9477-6c394c70c55f/",
    tag: "udemy.com",
  },
  {
    date: "2024.04.04",
    title: "Pydantic V2: Essentials",
    subTitle: "Dr. Fred Baptiste",
    link: "https://www.udemy.com/certificate/UC-4a60204f-4940-4784-af04-d35cc4bdff9c/",
    tag: "udemy.com",
  },
  {
    date: "2024.03.26",
    title: "Quick Start to C Programming - Coming from another language",
    subTitle: "Jan Schaffranek",
    link: "https://www.udemy.com/certificate/UC-e89a4dba-9625-40db-8ce5-4bdaebb7b9ea/",
    tag: "udemy.com",
  },
  {
    date: "2024.03.06",
    title: "C Programming For Beginners - Master the C Language",
    subTitle: "Tim Buchalka's Learn Programming Academy, Jason Fedin",
    link: "https://www.udemy.com/certificate/UC-fd35a793-3fa7-473b-b21d-c0cf8ce3cc28/",
    tag: "udemy.com",
  },
  {
    date: "2024.02.15",
    title: "TypeScript Design Patterns And SOLID Principles",
    subTitle: "Manik (Cloudaffle)",
    link: "https://www.udemy.com/certificate/UC-34fdccd2-0f8c-45c9-a323-4af02ef1c0b1/",
    tag: "udemy.com",
  },
  {
    date: "2024.02.11",
    title: "JavaScript Interview Questions - Coding Interview 2024",
    subTitle: "Oleksandr Kocherhin",
    link: "https://www.udemy.com/certificate/UC-428407e7-717d-4ce2-9663-e93686326d0b/",
    tag: "udemy.com",
  },
  {
    date: "2024.01.30",
    title: "MongoDB Masterclass: Excel in NoSQL & Pass Certification!",
    subTitle: "Tim Buchalka's LP Academy, Faisal Memon",
    link: "https://www.udemy.com/certificate/UC-6b9a1294-b575-4157-b48b-5c66526462f8/",
    tag: "udemy.com",
  },
  {
    date: "2024.01.24",
    title: "NestJS: The Complete Developer's Guide",
    subTitle: "Stephen Grider",
    link: "https://www.udemy.com/certificate/UC-f36a0b73-6231-4021-b7f2-b47678dbe9a7/",
    tag: "udemy.com",
  },
  {
    date: "2023.12.15",
    title: "React & TypeScript - The Practical Guide",
    subTitle: "Academind by Maximilian Schwarzmüller",
    link: "https://www.udemy.com/certificate/UC-6e37cf64-eeb4-4a58-b40f-b0effbe46354/",
    tag: "udemy.com",
  },
  {
    date: "2023.12.10",
    title: "React: Design Patterns",
    subTitle: "Shaun Wassell - LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/c67a9c0e8685c470c5b25ea01a44b90ea048a4f57aae8dfdfbb0b3094122a7f1",
    tag: "linkedin.com",
  },
  {
    date: "2023.12.10",
    title: "Redis: The Complete Developer's Guide",
    subTitle: "Stephen Grider",
    link: "https://www.udemy.com/certificate/UC-f5057b51-09a4-4141-93f5-b756c9fbf31c/",
    tag: "udemy.com",
  },
  {
    date: "2023.12.10",
    title: "React - Tailwind CSS Portfolio Project From Scratch 2022",
    subTitle: "K.Sathyaprakash Reddy",
    link: "https://www.udemy.com/certificate/UC-d886cd6a-e8b1-4e69-8e51-a7f3566177ea/",
    tag: "udemy.com",
  },
  {
    date: "2023.11.28",
    title: "Data Science Bootcamp w języku Python - od A do Z",
    subTitle: "Paweł Krakowiak",
    link: "https://www.udemy.com/certificate/UC-92064528-7e13-426f-9fb8-8a008e3cb38a/",
    tag: "udemy.com",
  },
  {
    date: "2023.11.15",
    title: "Python 3: Deep Dive (Part 1 - Functional)",
    subTitle: "Dr. Fred Baptiste",
    link: "https://www.udemy.com/certificate/UC-c3178594-3e5a-4bdc-9b86-411c93041f56/",
    tag: "udemy.com",
  },
  {
    date: "2023.10.22",
    title: "Gatsby JS | Build a personal blog using gatsbyJS",
    subTitle: "Tech Vista",
    link: "https://www.udemy.com/certificate/UC-641ab62c-9c9a-4e40-99f4-a81be03aa2e2/",
    tag: "udemy.com",
  },
  {
    date: "2023.10.07",
    title: "Wzorce Projektowe (Design Patterns)",
    subTitle: "Paweł Ćwik, Dawid Nowak",
    link: "https://www.udemy.com/certificate/UC-c4e7e70b-7c23-4dc4-a6f2-25b8be225363/",
    tag: "udemy.com",
  },
  {
    date: "2023.08.23",
    title: " Design Patterns in Python",
    subTitle: "Sean Bradley",
    link: "https://www.udemy.com/certificate/UC-4fcf606d-ec83-46c9-b5b0-3f1fffd93178/",
    tag: "udemy.com",
  },
  {
    date: "2023.08.19",
    title: "Practical Database Design - Blog Schema Normalization to 3NF",
    subTitle: "Very Academy",
    link: "https://www.udemy.com/certificate/UC-eb48063f-93a8-46a9-94be-69c35fed97f1/",
    tag: "udemy.com",
  },
  {
    date: "2023.06.11",
    title: "Python Developer",
    subTitle: "Coders Lab",
    link: "https://www.linkedin.com/in/marcin-bojara-142857e/details/certifications/1635548818681",
    tag: "coderslab.pl",
  },
];

export default function CoursesCard({
  part = "both",
  ratio = 0.5,
}: {
  part?: "all" | "first" | "second" | "both";
  ratio?: number;
}) {
  // Support ratio in [0,1] or as percentage [0,100]; default 0.5 (50/50)
  const r = Number.isFinite(ratio) ? (ratio > 1 ? ratio / 100 : ratio) : 0.5;
  const normalizedRatio = Math.min(1, Math.max(0, r));
  const mid = Math.ceil(COURSES_DATA.length * normalizedRatio);
  const firstHalf = COURSES_DATA.slice(0, mid);
  const secondHalf = COURSES_DATA.slice(mid);

  if (part === "all") {
    return (
      <Card title="Completed Courses" sectionId={"courses"}>
        <Timeline>
          {COURSES_DATA.map((course, index) => (
            <TimelineItem key={index} {...course} />
          ))}
        </Timeline>
      </Card>
    );
  }

  if (part === "first") {
    return (
      <Card title="Completed Courses" sectionId={"courses"}>
        <Timeline>
          {firstHalf.map((course, index) => (
            <TimelineItem key={index} {...course} />
          ))}
        </Timeline>
      </Card>
    );
  }

  if (part === "second") {
    return (
      <Card title="Completed Courses (cont.)" sectionId={"courses-2"}>
        <Timeline>
          {secondHalf.map((course, index) => (
            <TimelineItem key={index + mid} {...course} />
          ))}
        </Timeline>
      </Card>
    );
  }

  // part === "both" (default)
  return (
    <>
      <Card title="Completed Courses" sectionId={"courses"}>
        <Timeline>
          {firstHalf.map((course, index) => (
            <TimelineItem key={index} {...course} />
          ))}
        </Timeline>
      </Card>
      <Card title="Completed Courses (cont.)" sectionId={"courses-2"}>
        <Timeline>
          {secondHalf.map((course, index) => (
            <TimelineItem key={index + mid} {...course} />
          ))}
        </Timeline>
      </Card>
    </>
  );
}
