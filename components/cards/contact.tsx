import Button from "@/components/ui/button";
import { FC, ReactNode } from "react";

interface ContactCardProps {
  title: string;
  icon: ReactNode;
  text?: string;
  btnText?: string;
}

const ContactCard: FC<ContactCardProps> = ({ icon, btnText, text, title }) => {
  return (
    <div className="bg-secondary-background border border-border rounded-lg relative overflow-hidden py-5 pl-[25px] shadow-md">
      <div
        className={`z-20 flex flex-col items-start gap-4 sm:gap-6 md:gap-8 justify-start md:justify-between ${text ? "" : "my-6 md:my-9"}`}
      >
        {/*Header*/}
        <div className="flex items-center gap-x-2">
          <span className="bg-white  w-8 h-8 rounded-lg grid place-items-center">{icon}</span>
          <h1>{title}</h1>
        </div>
        {/*Body text*/}
        {text && (
          <div>
            <h2 className="font-bold text-xl sm:text-2xl">{text}</h2>
          </div>
        )}
        {btnText && <Button className="w-full sm:!w-24">{btnText}</Button>}
      </div>
    </div>
  );
};

export default ContactCard;
