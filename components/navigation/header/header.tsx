import FancyButton from "@/components/ui/fancy-button";
import Profile from "@/components/ui/profile";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import {FaArrowRight} from "react-icons/fa";

const ContactButton = () => (
  <MagneticWrapper>
    <FancyButton text={"Let's talk"} icon={<FaArrowRight/>}/>
  </MagneticWrapper>
);

export default function Header() {
  return <>
    <div className={"w-full flex items-center justify-center md:justify-between"}>
      <Profile/>
      <div className={"hidden md:inline"}>
        <ContactButton/>
      </div>
    </div>
    <div className={"absolute bottom-36 left-10 z-20 md:hidden"}>
      <ContactButton/>
    </div>
  </>;
}
