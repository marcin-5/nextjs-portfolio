import Header from "@/components/navigation/header/header";
import LiveClock from "@/components/ui/live-clock";
import ScrollDown from "@/components/ui/scroll-down";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";

export default function LandingSection() {
  const renderSlogan = () => (<div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[11vw] 2xl:leading-[9rem] font-medium h-[40rem]">
    <div
      className="flex flex-col justify-center items-center text-primary-foreground text-[17vw] lg:text-[14vw] 2xl:text-[12rem] uppercase tracking-[-0.3rem]">
      <div>
        <span>Code</span>
      </div>
      <div>
        <span>Crafting</span>
      </div>
      <div className="relative">
        <span>Cleverness</span>
        <div
          className="text-[1rem] leading-[1.4rem] tracking-normal absolute top-[15vw] lg:top-[11.5vw] 2xl:top-[10rem] left-0 2xl:left-[50rem] w-[30rem] uppercase font-normal">
          <span>Empowering innovations</span>
          <br/>
          <span>through inspired design</span>
          <br/>
          <span>where challenges trigger creativity</span>
          <br/>
          <span>and solutions define capabilities anew.</span>
        </div>
      </div>
    </div>
  </div>);

  return <div className={"relative h-screen overflow-hidden p-8"}>
    <Header/>

    <div className={"absolute right-10 bottom-10"}>
      <LiveClock timeZone={"Europe/Warsaw"}/>
    </div>

    {renderSlogan()}

    <MagneticWrapper
      className="absolute left-[8rem] md:left-1/3 lg:left-1/2 -translate-x-1/2 bottom-[5rem] md:bottom-4 ">
      <ScrollDown/>
    </MagneticWrapper>
  </div>;
}
