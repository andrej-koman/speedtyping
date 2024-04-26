"use client";
import { useGLTF, Text } from "@react-three/drei";
import { CatmullRomCurve3, type Euler, type Group, type Mesh, type Object3D, type Object3DEventMap, Quaternion, Vector3, MeshStandardMaterial } from "three";
import { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { loadModelAndCreateCurve } from "~/server/3d";
import { ColorSchemes } from "~/lib/utils";

export default function CarModel({
    name,
    textPointAt
}: {
    name?: string;
    color?: number;
    textPointAt: Vector3;
}) {
    const { nodes, materials } = useGLTF("/models/car.glb");

    const curveRef = useRef<CatmullRomCurve3 | null>(null);
    const carRef = useRef<Group<Object3DEventMap> | null>(null);
    const textRef = useRef<Text | null>(null);
    const { camera } = useThree();

    const speed = 0.00333333333333 // adjust this value to change the speed of the car
    let t = 0; // time variable for the animation
    const targetQuaternion = new Quaternion();

    useEffect(() => {
        const loader = new OBJLoader();
        void loadModelAndCreateCurve(loader, "/models/road.obj").then((curve) => {
            // Check if curve is type CatmullRomCurve3
            if (curve instanceof CatmullRomCurve3) {
                const points = curve.getSpacedPoints(50);
                const smoothCurve = new CatmullRomCurve3(points);
                curveRef.current = smoothCurve;
            }
        });

        if (textRef.current) {
            (textRef.current as unknown as Object3D).lookAt(textPointAt);
        }
    }, [textPointAt]);

    useEffect(() => {
        const handleKeyDown = () => {
            if (carRef.current && curveRef.current) {
                // update the car's position to create the animation
                // eslint-disable-next-line react-hooks/exhaustive-deps
                t += speed;
                if (t > 1) {
                    t = 0; // reset t to 0 when it reaches 1 to loop the animation
                }
                const point = curveRef.current.getPointAt(t);
                const tangent = curveRef.current.getTangentAt(t);
                carRef.current.position.set(point.x, point.y - 0.5, point.z + 8);

                // calculate the target rotation
                targetQuaternion.setFromAxisAngle(new Vector3(0, 1, 0), - Math.atan2(-tangent.x, tangent.z));

                // gradually rotate the car towards the target rotation
                carRef.current.quaternion.slerp(targetQuaternion, 0.5);
            }

            if (textRef.current) {
                (textRef.current as unknown as Object3D).lookAt(camera.position);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    })

    return (
        <group ref={carRef} position={[0, -0.5, 0]} rotation={[0, -2, 0]} dispose={null}>
            <Text
                ref={textRef}
                position={[0, 5, 0]}
                fontSize={2.5}
                font="/fonts/Inter-Regular.woff"
                color="white"
            >
                {name}
            </Text>
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

export function HomeCarModel({
    position,
    rotation,
}: {
    position?: Vector3,
    rotation?: Euler,
    color: number | string,
}) {
    const { nodes, materials } = useGLTF('/models/car.glb')
    const carRef = useRef<Group<Object3DEventMap>>(null);

    const [isInteracting, setIsInteracting] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(0);
    const [colors, setColors] = useState(ColorSchemes[currentTheme]);

    // Change the color scheme every 2 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTheme((currentTheme + 1) % ColorSchemes.length);
            setColors(ColorSchemes[currentTheme]);
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentTheme]);

    useFrame(() => {
        // Rotate the car model
        if (carRef.current && !isInteracting) {
            carRef.current.rotation.y += 0.01; // Change this to adjust the rotation speed
        }
    });

    if (colors === undefined) throw new Error("Color scheme is undefined");

    return (
        <group onPointerEnter={() => { setIsInteracting(true); }} onPointerLeave={() => { setIsInteracting(false) }} ref={carRef} dispose={null} position={position} rotation={rotation}>
            <mesh castShadow receiveShadow geometry={(nodes.Cube as Mesh).geometry} material={new MeshStandardMaterial({ color: colors.body })} />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_1 as Mesh).geometry} material={materials.Black} />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_2 as Mesh).geometry} material={new MeshStandardMaterial({ color: colors.window })} />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Cube_3 as Mesh).geometry}
                material={new MeshStandardMaterial({ color: colors.bumpers })}
            />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_4 as Mesh).geometry} material={new MeshStandardMaterial({ color: colors.lights })} />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_5 as Mesh).geometry} material={materials.Bottom} />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_6 as Mesh).geometry} material={materials.Tires} />
            <mesh castShadow receiveShadow geometry={(nodes.Cube_7 as Mesh).geometry} material={new MeshStandardMaterial({ color: colors.wheels })} />
        </group>
    )
}

useGLTF.preload("/models/car.glb");