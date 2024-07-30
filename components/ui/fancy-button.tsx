import {FC, ReactNode} from "react";

interface ButtonProps {
  text: string;
  icon: ReactNode;
}

const FancyButton: FC<ButtonProps> = ({text, icon}) => {
  return <a className={"fancy-btn"}>
    <div
      className={"bg-black hover:bg-transparent text-primary-foreground hover:text-black " +
        "group rounded-[108em] px-[2vw] py-[1vw] flex items-center gap-2 font-bold text-3xl " +
        "cursor-pointer transition-all duration-75"}>
      <span>{text}</span>
      <span className={"group-hover:translate-x-[.75vw] transition-transform duration-100"}>{icon}</span>
    </div>
  </a>;
};

export default FancyButton;
