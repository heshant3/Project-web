import React from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Model } from "./Model";

const Scene = () => {
  const { camera } = useThree(); // Access the camera from useThree hook

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <PerspectiveCamera position={[0, 0, 0]}>
        <Model scale={0.13} rotation={[1.4, 3.5, 0]} position={[0, -0.8, 0]} />
      </PerspectiveCamera>
      <Environment preset="city" />
    </>
  );
};

export default Scene;
