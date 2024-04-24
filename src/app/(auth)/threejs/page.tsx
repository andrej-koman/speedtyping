"use client";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import RoadModel from "~/app/_models/road-model";
import CarModel from "~/app/_models/car-model";

export default function Page() {
    return (
        <div className="w-screen h-screen">
            <Canvas camera={{ position: [5, 2, 8] }}>
                <ambientLight intensity={2} />
                <PerspectiveCamera makeDefault position={[-20, 70, 90]}>
                    <OrbitControls enablePan={false} enableDamping={false} target={[0, 0, 0]} />
                </PerspectiveCamera>
                <RoadModel />
                <CarModel />
            </Canvas>
        </div>
    )
}