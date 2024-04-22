"use client";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";

import { Model } from "~/models/car-model/car-model";

export default function Page() {
    return (
        <div className="w-screen h-screen">
            <Canvas>
                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="sunset" background />
                </Suspense>
            </Canvas>
        </div>
    )
}