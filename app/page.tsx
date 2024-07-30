"use client";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import FancyButton from "@/components/ui/fancy-button";
import Input from "@/components/ui/input";
import LiveClock from "@/components/ui/live-clock";
import Profile from "@/components/ui/profile";
import TextArea from "@/components/ui/text-area";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import {FaArrowRight} from "react-icons/fa";
import {FaUserLarge} from "react-icons/fa6";
import {IoHome} from "react-icons/io5";

export default function Home() {
  return (
    <WaterWaveWrapper imageUrl={""} dropRadius={3} perturbance={3} resolution={1536}>
      {() => (
        <div className={"w-full p-10"}>
          <div className={"max-w-2xl mx-auto"}>
            <Card title={"UI Components"}>
              <div className="grid grid-cols-4">
                <Button>Basic button</Button>
                <Button><IoHome/>Basic button</Button>
                <Button isIcon><FaUserLarge/></Button>
                <Button link={"http://www.google.com"}>Google</Button>
              </div>
              <Input type={"text"} placeholder={"Full name"}/>
              <Input type={"text"} placeholder={"User name"} icon={<FaUserLarge/>}/>
              <TextArea placeholder={"description"}/>
              <TextArea placeholder={"description"} icon={<FaUserLarge/>}/>
              <Profile/>
              <div className={"w-[350px]"}>
                <FancyButton text={"Contact me"} icon={<FaArrowRight/>}/>
              </div>
              <LiveClock timeZone={"Europe/Warsaw"}/>
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
