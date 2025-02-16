import Link from "next/link";
import { FC, ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface TimelineProps {
  children: ReactNode;
}

export const Timeline: FC<TimelineProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-6">{children}</div>;
};

interface TimelineItemProps {
  date?: string;
  title: string;
  subTitle: string;
  link?: string;
  tag?: string;
}

export const TimelineItem: FC<TimelineItemProps> = ({ date, subTitle, title, link, tag }) => {
  return (
    <div className="flex flex-wrap gap-x-4 min-h justify-start relative">
      <DateTimeline date={date} />
      <RightSide date={date} title={title} link={link} subTitle={subTitle} tag={tag} />
    </div>
  );
};

const DateTimeline: FC<{ date?: string }> = ({ date }) => (
  <div className="h-auto flex-none break-words whitespace-pre" style={{ width: date ? "auto" : "0" }}>
    <p className="text-secondary-foreground">{date}</p>
  </div>
);

const RightSide: FC<{ date?: string; title: string; link?: string; subTitle: string; tag?: string }> = ({
  date,
  title,
  link,
  subTitle,
  tag,
}) => {
  const linkContent = link ? (
    <Link href={link} target="_blank">
      <TimelineItemBody subTitle={subTitle} link={link} tag={tag} />
    </Link>
  ) : (
    <TimelineItemBody subTitle={subTitle} tag={tag} />
  );

  return (
    <div className="flex gap-x-2" style={{ transform: date ? "none" : "translateX(-45px)" }}>
      <div className="flex flex-col gap-0.5">
        <div className="text-primary-foreground break-words">
          <p className="leading-6 font-medium text-sm">{title}</p>
        </div>
        <div className="flex items-center gap-2 w-auto">{linkContent}</div>
      </div>
    </div>
  );
};

interface TimelineItemBodyProps {
  subTitle: string;
  tag?: string;
  link?: string;
}

const TimelineItemBody: FC<TimelineItemBodyProps> = ({ link, subTitle, tag }) => (
  <div className="text-secondary-foreground flex items-center">
    <p className="text-sm font-normal leading-6 mt-1">{subTitle}</p>
    {link && <FiArrowUpRight />}
    {tag && (
      <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5 justify-end">
        <p className="text-[0.8rem] font-normal text-secondary-foreground">{tag}</p>
      </div>
    )}
  </div>
);
