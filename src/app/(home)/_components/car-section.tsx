"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { HomeCarModel } from "~/app/_models/car-model";
import { Euler, Vector3 } from "three";

export default function CarSection() {
  const cameraPosition = new Vector3(0, 2, 14);

  return (
    <Canvas>
      <ambientLight intensity={2} />
      <PerspectiveCamera makeDefault position={cameraPosition}>
        <OrbitControls enablePan={false} enableZoom={false} />
      </PerspectiveCamera>
      <HomeCarModel
        position={new Vector3(0, 0, 0)}
        rotation={new Euler(0.3, -0.5, 0)}
        color={"#A020F0"}
      />
    </Canvas>
  );
}
