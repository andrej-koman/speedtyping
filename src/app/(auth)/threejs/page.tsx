"use client";

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

import { RoadModel } from "~/models/road-model";
import { Vector3 } from "three";

export default function Page() {

    const center: Vector3 = new Vector3(-5, -15, -85);

    return (
        <div className="w-screen h-screen">
            <Canvas>
                <directionalLight position={[0, 20, 150]} intensity={2} />
                <OrbitControls target={[-5, -15, -85]} />
                <Suspense fallback={null}>
                    <RoadModel position={center} />
                </Suspense>
            </Canvas>
        </div>
    )
}