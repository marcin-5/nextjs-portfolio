import Header from "@/components/navigation/header/header";
import LiveClock from "@/components/ui/live-clock";

export default function LandingSection() {
  return <div className={"relative h-screen overflow-hidden p-8"}>
    <Header/>
    <div className={"absolute right-10 bottom-10"}>
      <LiveClock timeZone={"Europe/Warsaw"}/>
    </div>
  </div>;
}