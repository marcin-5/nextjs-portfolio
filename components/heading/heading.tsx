import { HeadingAnimatedSvg } from "@/components/heading/heading-animated-svg";
import SvgCurve from "@/components/visualEffects/svg-curve";
import { FC } from "react";

interface HeadingProps {
  number: string;
  title_1: string;
  title_2: string;
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2 }) => {
  return (
    <div className="relative px-8 z-20">
      {/* Number */}
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
        <h2 className="font-pixel text-[180px] text-center text-primary-foreground relative">
          <span className="bottom_fade bg-clip-text text-transparent p-4">{number}</span>
        </h2>
      </div>
      {/* Heading text wrapper */}
      <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className="text-[clamp(2rem,10vw,5.5rem)] lg:text-[clamp(3rem,7vw,7.5rem)] leading-tight text-primary-foreground mr-3">
          {title_1}
        </p>
        <HeadingAnimatedSvg text=" LEARN MORE ABOUT MY PROJECTS " />
        <p className="text-[clamp(2rem,10vw,5.5rem)] lg:text-[clamp(3rem,7vw,7.5rem)] leading-tight text-primary-foreground italic">
          {title_2}
        </p>
      </div>

      <SvgCurve />
    </div>
  );
};

export default Heading;
