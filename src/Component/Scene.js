import React from "react";
import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
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

      <Model scale={0.1} rotation={[1.4, 3.5, 0]} position={[0, -0.8, 0.6]} />
      <Environment preset="city" />
    </>
  );
};

export default Scene;
