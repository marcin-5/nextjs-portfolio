import { FC, ReactNode } from "react";

interface TextAreaProps {
  name: string;
  placeholder: string;
  value?: string;
  error?: string;
  icon?: ReactNode;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextAreaProps> = ({ name, placeholder, value, error, icon, rows, onChange }) => {
  return (
    <div className={"flex flex-col w-full"}>
      <div className={"relative w-full"}>
        {/* Icon */}
        <div className={"absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"}>{icon}</div>
        <textarea
          name={name}
          rows={rows}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={
            "bg-primary-background text-primary-foreground w-full" +
            " rounded-lg text-sm ps-10 p-2.5 pt-9 focus:outline"
          }
        />
      </div>
      <p className={"text-red-500 text-sm mt-1 ml-1 font-medium animate-fadeIn"}>{error} &nbsp;</p>
    </div>
  );
};

export default TextArea;
