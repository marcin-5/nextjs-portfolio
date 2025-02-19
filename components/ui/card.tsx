import { mergeClassNames } from "@/lib/utils";
import { ReactNode } from "react";

type StyleClassName = string;

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: StyleClassName;
  sectionId?: string;
}

const CardTitle = ({ title }: { title: string }) => (
  <div className="font-pixel">
    <p className="uppercase text-lg">{title}</p>
  </div>
);

const BASE_CARD_CLASSES =
  "relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground overflow-hidden";

const Card = ({ title, children, className, sectionId }: CardProps) => {
  return (
    <section id={sectionId} className={mergeClassNames(BASE_CARD_CLASSES, className)}>
      <div className="flex flex-col gap-y-6">
        {title && <CardTitle title={title} />}
        {children}
      </div>
    </section>
  );
};

export default Card;
