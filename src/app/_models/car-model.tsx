import { useGLTF } from "@react-three/drei";
import { CatmullRomCurve3, type Group, type Mesh, type Object3DEventMap } from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { loadModelAndCreateCurve } from "~/server/3d";

export default function CarModel() {
    const { nodes, materials } = useGLTF("/models/car.glb");
    const curveRef = useRef<CatmullRomCurve3 | null>(null);
    const carRef = useRef<Group<Object3DEventMap> | null>(null);
    const speed = 0.001; // adjust this value to change the speed of the car
    let t = 0; // time variable for the animation

    useEffect(() => {
        const loader = new OBJLoader();
        void loadModelAndCreateCurve(loader, "/models/road.obj").then((curve) => {
            // Check if curve is type CatmullRomCurve3
            if (curve instanceof CatmullRomCurve3) {
                curveRef.current = curve;
            }
        });
    }, []);

    useFrame(() => {
        if (carRef.current && curveRef.current) {
            // update the car's position to create the animation
            t += speed;
            if (t > 1) t = 0; // reset t to 0 when it reaches 1 to loop the animation
            if (curveRef.current) {
                const point = curveRef.current.getPointAt(t);
                carRef.current.position.set(point.x + 15, point.y - 1, point.z);
            }
        }
    });

    if (nodes.Cube === undefined) throw new Error("Model does not contain a Cube mesh");

    return (
        <group ref={carRef} rotation={[0, -1.8, 0]} dispose={null}>
            <mesh castShadow receiveShadow geometry={(nodes.Cube as Mesh).geometry} material={materials.Body} />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_1 as Mesh).geometry} material={materials.Black} />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_2 as Mesh).geometry} material={materials.Window} />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Cube_3 as Mesh).geometry}
                material={materials.Bumpers}
            />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_4 as Mesh).geometry} material={materials.Lights} />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_5 as Mesh).geometry} material={materials.Bottom} />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_6 as Mesh).geometry} material={materials.Tires} />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_7 as Mesh).geometry} material={materials.Wheels} />
        </group>
    );
}

useGLTF.preload("/models/car.glb");