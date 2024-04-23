/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { Canvas } from "@react-three/fiber"
import { Suspense, useState, useEffect, useRef, useLayoutEffect } from "react";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { BufferGeometry, CatmullRomCurve3, Line, type Mesh, TubeGeometry, Vector3 } from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js"

export function RoadModel(props: {
    position: Vector3
}) {
    const { nodes } = useGLTF('/models/road.glb')
    if (nodes.Plane === undefined) throw new Error('Model does not contain a Plane mesh');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Plane as Mesh).geometry}
                material={(nodes.Plane as Mesh).material}
                rotation={[0.2, 0.5, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/road.glb')


export default function Page() {
    let [points, setPoints] = useState<Vector3[]>([]);
    const center: Vector3 = new Vector3(-5, -15, -85);
    const pointsArray: Vector3[] = [];
    const loader = new OBJLoader();
    useEffect(() => {
        loader.load('/models/road.obj', (object) => {
            object.traverse((child) => {
                if (child instanceof Line) {
                    const curveGeometry = child.geometry as BufferGeometry;
                    if (curveGeometry.attributes.position) {
                        for (let i = 0; i < curveGeometry.attributes.position.array.length; i += 3) {
                            pointsArray.push(
                                new Vector3(
                                    curveGeometry.attributes.position.array[i],
                                    curveGeometry.attributes.position.array[i + 1],
                                    curveGeometry.attributes.position.array[i + 2]
                                )
                            );
                        }
                    }
                }
            })
            const curve = new CatmullRomCurve3(pointsArray);
            setPoints(curve.getPoints(100));
        });
    }, []);
    const ref = useRef<BufferGeometry>(null!);

    useEffect(() => {
        if (ref.current) {
            console.log(points);
            ref.current.setFromPoints(points);
        }
    }, [points]);

    return (
        <div className="w-screen h-screen">
            <Canvas camera={{ position: [5, 2, 8] }}>
                <color attach="background" args={[0xbfe3dd]} />
                <directionalLight position={[0, 20, 150]} intensity={2} />
                <PerspectiveCamera makeDefault position={[5, 2, 8]}>
                    <OrbitControls enablePan={false} enableDamping={false} target={[-5, -15, -85]} />
                </PerspectiveCamera>
                <Suspense fallback={null}>
                    <RoadModel position={center} />
                    <line>
                        <bufferGeometry ref={ref} attach="geometry" />
                        <lineBasicMaterial color={0x000000} />
                    </line>
                </Suspense>
            </Canvas>
        </div>
    )
}