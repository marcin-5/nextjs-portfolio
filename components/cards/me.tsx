import Card from "@/components/ui/card";
import { mergeClassNames } from "@/lib/utils";
import MyImg from "@/public/assets/images/gallery/me0.jpg";
import Image from "next/image";

export default function MeCard() {
  return (
    <Card className="2xl:h-full" sectionId={"me"}>
      <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
        {/* background image */}
        <Image
          src={MyImg}
          alt="marcin bojara"
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
        />
        {/* Tags */}
        <div className="absolute left-4 top-4 sm:top-[25%] space-y-2">
          <TagComponent text="Hello, universe 👋" />
          <TagComponent text="I'm Marcin Bojara" className={"rounded-tl-none"} />
          <TagComponent text="Full stack developer" />
        </div>
      </div>
    </Card>
  );
}

const TagComponent = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={mergeClassNames("bg-black/[0.7] w-fit py-1.5 px-3 rounded-2xl", className)}>
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  );
};
