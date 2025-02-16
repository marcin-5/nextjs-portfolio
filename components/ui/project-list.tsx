import Link from "next/link";
import { FC, ReactNode } from "react";

interface ProjectListProps {
  children: ReactNode;
}

export const ProjectList: FC<ProjectListProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-6">{children}</div>;
};

interface ProjectListItemProps {
  title: string;
  link: string;
  desc: string;
  stack: string[];
}

export const ProjectListItem: FC<ProjectListItemProps> = ({ title, link, desc, stack }) => {
  return (
    <div className="min-h justify-start relative">
      <Link href={link} target="_blank">
        <LeftSide title={title} />
        <RightSide link={link} desc={desc} stack={stack} />
      </Link>
    </div>
  );
};

const LeftSide: FC<{ title: string }> = ({ title }) => (
  <div className="h-auto flex-none break-words whitespace-pre">
    <p className="text-secondary-foreground">{title}</p>
  </div>
);

const RightSide: FC<{ link: string; desc: string; stack: string[] }> = ({ link, desc, stack }) => {
  return (
    <div className="w-auto">
      <p className="text-primary-foreground break-words">{desc}</p>
      <p className="text-[0.9rem] font-light text-stone-400">{stack.join(", ")}</p>
    </div>
  );
};
