"use client";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import RoadModel from "~/app/_models/road-model";
import CarModel from "~/app/_models/car-model";
import FinishLineModel from "~/app/_models/finish-line-model";
import { type Vector3 } from "three";

export default function Game3DModel({
    cameraPosition,
    center
}: {
    cameraPosition: Vector3,
    center: Vector3
}) {
    return (
        <Canvas>
            <ambientLight intensity={1.5} />
            <PerspectiveCamera makeDefault position={cameraPosition}>
                <OrbitControls enablePan={false} target={center} />
            </PerspectiveCamera>
            <RoadModel />
            <CarModel name="Mark" textPointAt={cameraPosition} />
            <FinishLineModel />
        </Canvas>
    )
}