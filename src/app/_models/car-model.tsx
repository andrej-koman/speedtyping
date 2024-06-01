"use client";
// THREE js
import { useGLTF, Text } from "@react-three/drei";
import {
  CatmullRomCurve3,
  type Euler,
  type Group,
  type Mesh,
  type Object3DEventMap,
  type Vector3,
  MeshStandardMaterial,
} from "three";

// Hooks
import { memo, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGame } from "~/contexts/GameContext";
import { useUser } from "@clerk/nextjs";

// 3D model imports
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { loadModelAndCreateCurve } from "~/server/3d";
import { ColorSchemes } from "~/lib/utils";

const CarModel = memo(function CarModel() {
  const { nodes, materials } = useGLTF("/models/car.glb");
  const { user } = useUser();

  const { carRef, curveRef, textRef } = useGame();
  const colors = ColorSchemes[1];

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
  }, [curveRef]);

  if (colors === undefined) throw new Error("Color scheme is undefined");

  return (
    <group
      ref={carRef}
      position={[0, -0.5, 0]}
      rotation={[0, -2, 0]}
      dispose={null}
    >
      <Text
        ref={textRef}
        position={[0, 5, 0]}
        fontSize={2.5}
        font="/fonts/Inter-Regular.woff"
        color="white"
      >
        {user?.username ?? ""}
      </Text>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube as Mesh).geometry}
        material={new MeshStandardMaterial({ color: colors.body })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_1 as Mesh).geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_2 as Mesh).geometry}
        material={new MeshStandardMaterial({ color: colors.window })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_3 as Mesh).geometry}
        material={new MeshStandardMaterial({ color: colors.bumpers })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_4 as Mesh).geometry}
        material={new MeshStandardMaterial({ color: colors.lights })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_5 as Mesh).geometry}
        material={materials.Bottom}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_6 as Mesh).geometry}
        material={materials.Tires}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_7 as Mesh).geometry}
        material={new MeshStandardMaterial({ color: colors.wheels })}
      />
    </group>
  );
});

export function HomeCarModel({
  position,
  rotation,
}: {
  position?: Vector3;
  rotation?: Euler;
  color: number | string;
}) {
  const { nodes, materials } = useGLTF("/models/car.glb");
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
    <group
      onPointerEnter={() => {
        setIsInteracting(true);
      }}
      onPointerLeave={() => {
        setIsInteracting(false);
      }}
      ref={carRef}
      dispose={null}
      position={position}
      rotation={rotation}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube as Mesh).geometry}
        material={new MeshStandardMaterial({ color: colors.body })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_1 as Mesh).geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_2 as Mesh).geometry}
        material={new MeshStandardMaterial({ color: colors.window })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_3 as Mesh).geometry}
        material={new MeshStandardMaterial({ color: colors.bumpers })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_4 as Mesh).geometry}
        material={new MeshStandardMaterial({ color: colors.lights })}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_5 as Mesh).geometry}
        material={materials.Bottom}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_6 as Mesh).geometry}
        material={materials.Tires}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_7 as Mesh).geometry}
        material={new MeshStandardMaterial({ color: colors.wheels })}
      />
    </group>
  );
}

useGLTF.preload("/models/car.glb");

export default CarModel;
