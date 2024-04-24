
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { type Mesh } from 'three'

export default function FinishLineModel() {
    const { nodes, materials } = useGLTF('/models/finish-line.glb')
    return (
        <group dispose={null} rotation={[0, 7.9, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.pole001 as Mesh).geometry}
                material={materials.Metal}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Finish as Mesh).geometry}
                material={materials['Material.002']}
                position={[0, 0, -0.035]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.matel_tab as Mesh).geometry}
                material={materials.Metal}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.matel_tab_bottom as Mesh).geometry}
                material={materials.Metal}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Board001 as Mesh).geometry}
                material={materials['CP Black']}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/finish-line.glb')