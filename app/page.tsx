"use client";

import {IoHome} from "react-icons/io5";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import {FaUserLarge} from "react-icons/fa6";

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
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
