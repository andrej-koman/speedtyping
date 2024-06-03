import { Canvas } from "@react-three/fiber";

import RoadModel from "~/app/_models/road-model";
import CarModel from "~/app/_models/car-model";
import FinishLineModel from "~/app/_models/finish-line-model";
import GameCamera from "./game-camera";

export default function Game3DModel() {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <GameCamera />
      <RoadModel />
      <CarModel />
      <FinishLineModel />
    </Canvas>
  );
}
