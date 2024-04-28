"use client";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import RoadModel from "~/app/_models/road-model";
import CarModel from "~/app/_models/car-model";
import FinishLineModel from "~/app/_models/finish-line-model";
import { type Euler, type Vector3 } from "three";

export default function Game3DModel({
    cameraPosition,
    center,
    carSpeed
}: {
    cameraPosition: Vector3,
    cameraRotation: Euler,
    center: Vector3,
    carSpeed: number
}) {
    return (
        <Canvas>
            <ambientLight intensity={1.5} />
            <PerspectiveCamera position={cameraPosition} makeDefault>
                <OrbitControls enablePan={false} target={center} />
            </PerspectiveCamera>
            <RoadModel />
            <CarModel carSpeed={carSpeed} name="Mark" textPointAt={cameraPosition} />
            <FinishLineModel />
        </Canvas>
    )
}