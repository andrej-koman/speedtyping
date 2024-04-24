"use client";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import RoadModel from "~/app/_models/road-model";
import CarModel from "~/app/_models/car-model";
import { Vector3 } from "three";

export default function Game3DModel() {
    const cameraPosition = new Vector3(-20, 70, 90);

    return (
        <Canvas camera={{ position: [5, 2, 8] }}>
            <ambientLight intensity={2} />
            <PerspectiveCamera makeDefault position={cameraPosition}>
                <OrbitControls enablePan={false} enableZoom={false} enableDamping={false} target={[0, -2, -5]} />
            </PerspectiveCamera>
            <RoadModel />
            <CarModel name="Andrej" color={0x00000} textPointAt={cameraPosition} />
        </Canvas>
    )
}