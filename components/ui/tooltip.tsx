import { mergeClassNames } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { type FC, useState } from "react";

interface TooltipProps {
  title: string;
  image: string | StaticImport;
  bgColor?: string | null;
}

const Tooltip: FC<TooltipProps> = ({ title, image, bgColor = null }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const renderTooltip = () => {
    if (!isTooltipVisible) return null;

    return (
      <div
        className="absolute -top-6 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200"
        role="tooltip"
      >
        <p className="font-light text-[0.5rem] whitespace-nowrap">{title}</p>
      </div>
    );
  };

  return (
    <div
      className={mergeClassNames(
        "link relative w-12 h-12 transform cursor-pointer grid place-items-center",
        "border border-border rounded-xl hover:scale-125 transition-all duration-200",
      )}
      style={{ background: bgColor || "#2D2C2B" }}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      aria-label={title}
    >
      <div className="w-[32px] h-[32px]">
        <Image src={image} alt={title} width={32} height={32} className="w-full h-full overflow-clip object-contain" />
      </div>
      {renderTooltip()}
    </div>
  );
};

export default Tooltip;
