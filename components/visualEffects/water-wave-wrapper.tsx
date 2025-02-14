"use client";

import WaterEffect from "@/components/visualEffects/water-effect";
import { FC, ReactNode, useEffect, useState } from "react";

interface WaterWaveProps {
  imageUrl: string;
  dropRadius: number;
  perturbance: number;
  resolution: number;
  children: () => ReactNode;
}

const checkWebGLSupport = (): boolean => {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;

    if (!gl) {
      return false;
    }

    // Check for floating point texture support
    const floatTextures = gl.getExtension("OES_texture_float");
    if (!floatTextures) {
      return false;
    }

    // Additional check for render to texture capability
    const temp = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, temp);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 32, 32, 0, gl.RGBA, gl.FLOAT, null);

    const frameBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, temp, 0);

    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

    // Cleanup
    gl.deleteTexture(temp);
    gl.deleteFramebuffer(frameBuffer);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    return status === gl.FRAMEBUFFER_COMPLETE;
  } catch (e) {
    return false;
  }
};

const WaterWaveWrapper: FC<WaterWaveProps> = ({ imageUrl, dropRadius, perturbance, resolution, children }) => {
  // Initialize with false to avoid incorrect initial render
  const [isWebGLSupported, setIsWebGLSupported] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const supported = checkWebGLSupport();
    setIsWebGLSupported(supported);
    setIsChecked(true);
  }, []);

  // Don't render anything until we've checked WebGL support
  if (!isChecked) {
    return null;
  }

  if (!isWebGLSupported) {
    return <div>{children()}</div>;
  }

  return (
    <WaterEffect imageUrl={imageUrl} dropRadius={dropRadius} perturbance={perturbance} resolution={resolution}>
      {children}
    </WaterEffect>
  );
};

export default WaterWaveWrapper;
