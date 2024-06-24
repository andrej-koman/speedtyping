"use client";
// THREE js
import { useGLTF, Text3D } from "@react-three/drei";
import {
  CatmullRomCurve3,
  Euler,
  type Group,
  type Mesh,
  type Object3DEventMap,
  Vector3,
  MeshStandardMaterial,
} from "three";

// Hooks
import { memo, useEffect, useRef, useState } from "react";
import { useGame } from "~/contexts/GameContext";
import { useUser } from "@clerk/nextjs";

// 3D model imports
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { loadModelAndCreateCurve } from "~/server/3d";
import { ColorSchemes } from "~/lib/utils";

const CarModel = memo(function CarModel() {
  const { nodes, materials } = useGLTF("/models/car.glb");
  const { user } = useUser();

  const {
    carRef,
    curveRef,
    textRef,
    carStartPositionRef,
    carStartRotationRef,
  } = useGame();
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

  carStartPositionRef.current = new Vector3(0, -0.5, 0);
  carStartRotationRef.current = new Euler(0, -2, 0);

  return (
    <group
      ref={carRef}
      position={carStartPositionRef.current}
      rotation={carStartRotationRef.current}
      dispose={null}
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
});

export function HomeCarModel({
  position,
  rotation,
}: {
  position?: Vector3;
  rotation?: Euler;
}) {
  const { nodes, materials } = useGLTF("/models/car.glb");
  const carRef = useRef<Group<Object3DEventMap>>(null);

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

  if (colors === undefined) throw new Error("Color scheme is undefined");

  return (
    <group ref={carRef} dispose={null} position={position} rotation={rotation}>
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
