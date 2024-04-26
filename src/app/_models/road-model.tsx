"use client";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, type Mesh, TextureLoader } from "three";
import { memo } from "react";

const RoadModel = memo(function RoadModel() {
    const { nodes } = useGLTF('/models/road.glb')
    if (nodes.Plane === undefined) throw new Error('Model does not contain a Plane mesh');

    const texture = new TextureLoader().load('/textures/concrete_pavement.jpg');

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Plane as Mesh).geometry}
                material={new MeshStandardMaterial({ map: texture })}
            />
        </group>
    )
})

useGLTF.preload('/models/road.glb')

export default RoadModel;