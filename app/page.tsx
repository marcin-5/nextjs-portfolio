"use client";

import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

export default function Home() {
  return (
    <WaterWaveWrapper imageUrl={""} dropRadius={3} perturbance={3} resolution={1536}>
      {() => <div className={"h-screen"}></div>}
    </WaterWaveWrapper>
  );
}
