import Header from "@/components/navigation/header/header";
import LiveClock from "@/components/ui/live-clock";
import ScrollDown from "@/components/ui/scroll-down";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";

export default function LandingSection() {
  const renderSlogan = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[11vw] 2xl:leading-[9rem] font-medium h-[40rem]">
      <div className="flex flex-col justify-center items-center text-primary-foreground text-[15vw] lg:text-[12vw] 2xl:text-[9rem] uppercase tracking-[-0.3rem]">
        <div>
          <span>Logic</span>
        </div>
        <div>
          <span>Craft</span>
        </div>
        <div className="relative">
          <span>Humanity</span>
          <div className="text-[1rem] leading-[1.4rem] tracking-normal absolute top-[20vw] lg:top-[16vw] 2xl:top-[14rem] left-1/2 -translate-x-1/2 text-center w-[30rem] uppercase font-normal">
            <span>Engineering solutions that perform — and matter.</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="" className={"relative h-screen overflow-visible p-8"}>
      <Header />

      <div className={"absolute right-10 bottom-10"}>
        <LiveClock timeZone={"Europe/Warsaw"} />
      </div>

      {renderSlogan()}

      <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[5rem] md:bottom-10 ">
        <ScrollDown />
      </MagneticWrapper>
    </section>
  );
}
