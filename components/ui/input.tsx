import { FC, ReactNode } from "react";

type InputType = "text" | "password" | "email";

interface InputProps {
  name: string;
  type: InputType;
  placeholder: string;
  icon?: ReactNode;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BASE_INPUT_STYLES = "bg-primary-background text-primary-foreground w-full rounded-lg text-sm px-2.5 py-4";
const ICON_WRAPPER_STYLES = "absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none";
const FOCUS_STYLES = "focus:outline";

const Input: FC<InputProps> = ({ name, type, placeholder, icon, value, error, onChange }) => {
  const inputStyles = `${BASE_INPUT_STYLES} ${icon ? "ps-10" : ""} ${FOCUS_STYLES}`;

  return (
    <div className={"flex flex-col w-full"}>
      <div className={"relative w-full"}>
        {icon && <div className={ICON_WRAPPER_STYLES}>{icon}</div>}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputStyles}
        />
      </div>
      <p className={"text-red-500 text-sm mt-1 ml-1 font-medium animate-fadeIn"}>{error} &nbsp;</p>
    </div>
  );
};

export default Input;
