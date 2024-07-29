"use client";

import {FC, ReactNode} from "react";
// @ts-ignore
import WaterWave from "react-water-wave";

interface WaterWaveProps {
  imageUrl: string;
  dropRadius: number;
  perturbance: number;
  resolution: number;
  children: () => ReactNode;
}

const WaterWaveWrapper: FC<WaterWaveProps> = ({imageUrl, dropRadius, perturbance, resolution, children}) => {
  return (
    <WaterWave imageUrl={imageUrl} dropRadius={dropRadius} perturbance={perturbance} resolution={resolution}>
      {children}
    </WaterWave>
  );
};

export default WaterWaveWrapper;
