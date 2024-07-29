import {FC, ReactNode} from "react";
import Link from "next/link";
import {mergeClassNames as mcn} from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  link?: string;
  isIcon?: boolean;
  className?: string;
}

interface ButtonBodyProps {
  children: ReactNode;
  isIcon?: boolean;
  className?: string;
}

const ButtonBody: FC<ButtonBodyProps> = ({children, isIcon, className}) => {
  return <div className={"cursor-pointer flex-none w-auto h-full"}>
    <div
      className={mcn(
        "flex items-center justify-center gap-2 rounded-full select-none whitespace-nowrap text-sm font-medium",
        "bg-primary-background text-primary-foreground hover:bg-white/[0.1] transition-colors duration-100",
        className,
        isIcon ? "h-10 w-10" : "h-full w-max px-3 py-2",
      )}>
      {children}
    </div>
  </div>;
};

const Button: FC<ButtonProps> = ({children, link, isIcon, className}) => {
  return (<>
    {link ? (
      <Link href={link} target={"_blank"} className={"w-10 h-10 cursor-pointer"}>
        <ButtonBody className={className} isIcon={isIcon}>{children}</ButtonBody>
      </Link>
    ) : (
      <ButtonBody className={className} isIcon={isIcon}>{children}</ButtonBody>
    )}
  </>);
};

export default Button;
