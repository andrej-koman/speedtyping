/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { type Vector3 } from 'three'

export function RoadModel(props: {
    position: Vector3
}) {
  const { nodes } = useGLTF('/models/road.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane?.geometry}
        material={nodes.Plane?.material}
        rotation={[0.2, 0.5, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/road.glb')