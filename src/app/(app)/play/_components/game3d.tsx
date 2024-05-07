"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import RoadModel from "~/app/_models/road-model";
import CarModel from "~/app/_models/car-model";
import FinishLineModel from "~/app/_models/finish-line-model";
import { Vector3 } from "three";

export default function Game3DModel({ carSpeed }: { carSpeed: number }) {
  const cameraPosition = new Vector3(-15, 15, 60);
  const center = new Vector3(-10, -10, 15);

  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <PerspectiveCamera position={cameraPosition} makeDefault>
        <OrbitControls enableDamping={false} target={center} />
      </PerspectiveCamera>
      <RoadModel />
      <CarModel carSpeed={carSpeed} name="Mark" textPointAt={cameraPosition} />
      <FinishLineModel />
    </Canvas>
  );
}
