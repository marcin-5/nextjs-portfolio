import {FC, ReactNode} from "react";

interface InputProps {
  type: "text" | "password" | "email";
  placeholder: string;
  icon?: ReactNode;
}

const Input: FC<InputProps> = ({type, placeholder, icon}) => {
  return <div className={"relative w-full"}>
    {/* Icon */}
    <div className={"absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"}>
      {icon}
    </div>
    <input type={type} placeholder={placeholder}
           className={"bg-primary-background text-primary-foreground w-full" +
             " rounded-lg text-sm ps-10 px-2.5 py-4 focus:outline"}/>
  </div>;
};

export default Input;
