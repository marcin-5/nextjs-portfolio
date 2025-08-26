import Header from "@/components/navigation/header/header";
import LiveClock from "@/components/ui/live-clock";
import ScrollDown from "@/components/ui/scroll-down";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";

export default function LandingSection() {
  const renderSlogan = () => (
    <div className="absolute inset-0 z-10 grid place-items-center px-4">
      <div
        className="flex flex-col items-center text-primary-foreground uppercase font-medium text-center"
        /* Cap growth across devices */
        /* Main heading size: min 2.5rem, preferred 12vw, max 8rem */
      >
        <div className="leading-tight tracking-[-0.02em] text-[clamp(2.5rem,12vw,8rem)]">
          <div>
            <span>Logic</span>
          </div>
          <div>
            <span>Craft</span>
          </div>
          <div className="relative">
            <span>Humanity</span>
            <div className="mt-4 max-w-[32rem] text-center mx-auto normal-case font-normal text-[clamp(0.875rem,2.4vw,1.125rem)] leading-[1.4] tracking-normal">
              <span>Engineering solutions that perform — and matter.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id=""
      className={
        // Use small viewport height unit and safe-area padding, avoid overflow-visible
        "relative min-h-[100svh] overflow-hidden px-4 sm:px-8 pb-[max(2rem,env(safe-area-inset-bottom))]"
      }
    >
      <Header />

      {/* Clock in a safe area, layer above background */}
      <div className="absolute right-4 bottom-4 sm:right-10 sm:bottom-10 z-20">
        <LiveClock timeZone={"Europe/Warsaw"} />
      </div>

      {renderSlogan()}

      {/* ScrollDown with responsive bottom offset and safe area consideration */}
      <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[max(3.5rem,env(safe-area-inset-bottom))] sm:bottom-10 z-20">
        <ScrollDown />
      </MagneticWrapper>
    </section>
  );
}
