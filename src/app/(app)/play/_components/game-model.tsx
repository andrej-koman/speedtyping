"use client";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import RoadModel from "~/app/_models/road-model";
import CarModel from "~/app/_models/car-model";
import FinishLineModel from "~/app/_models/finish-line-model";
import { Vector3 } from "three";

export default function Game3DModel() {
    const cameraPosition = new Vector3(-20, 40, 90);
    const center = new Vector3(-10, 0 + 10, 20);

    return (
        <Canvas>
            <ambientLight intensity={1.5} />
            <PerspectiveCamera makeDefault position={cameraPosition}>
                <OrbitControls enablePan={false} target={center} />
            </PerspectiveCamera>
            <RoadModel />
            <CarModel name="Mark" color={0x00000} textPointAt={cameraPosition} />
            <FinishLineModel />
        </Canvas>
    )
}