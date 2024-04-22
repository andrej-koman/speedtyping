import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props: unknown) {
    const { nodes, materials } = useGLTF('/car-model/scene.gltf')

    if (!props || !nodes || !materials) return null;
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard12_part02_brakedisk_0.geometry}
                        material={materials.brakedisk}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard12_part01_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard13_part02_brakedisk_0.geometry}
                        material={materials.brakedisk}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard13_part01_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard36_part02_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard36_part01_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_15_Car_Textured_Rough_Plastic_0.geometry}
                        material={materials.Car_Textured_Rough_Plastic}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_14_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_13_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_12_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_11_interior_fifth_0.geometry}
                        material={materials.interior_fifth}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_10_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_09_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_014_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_07_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_013_interior_fifth_0.geometry}
                        material={materials.interior_fifth}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_012_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_04_gold_0.geometry}
                        material={materials.gold}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_03_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_011_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.St_wheel_010_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mirror_back_05_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mirror_back_04_AR3DMat_Procedural_Realistic_Mirror_0.geometry}
                        material={materials.AR3DMat_Procedural_Realistic_Mirror}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface2155_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface2154_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface2153_Car_Textured_Rough_Plastic_0.geometry}
                        material={materials.Car_Textured_Rough_Plastic}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface2152_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats23_red_0.geometry}
                        material={materials.material}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats22_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard113_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard112_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard111_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard110_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard109_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard108_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard107_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard106_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard105_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard104_red_0.geometry}
                        material={materials.material}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface2145_clearglass_0.geometry}
                        material={materials.clearglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard103_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior27_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface2141_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard102_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard101_interior_third_0.geometry}
                        material={materials.interior_third}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard100_interior_third_0.geometry}
                        material={materials.interior_third}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard99_interior_third_0.geometry}
                        material={materials.interior_third}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard98_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard97_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard96_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard95_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard94_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard93_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard92_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard91_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard90_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard89_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats20_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats19_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats18_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats17_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats16_red_0.geometry}
                        material={materials.material}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats15_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats14_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.interior03_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.interior02_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.interior01_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard88_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard87_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard86_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard85_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard84_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard83_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard82_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard81_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard80_red_0.geometry}
                        material={materials.material}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard79_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard78_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard77_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard76_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard75_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard74_red_0.geometry}
                        material={materials.material}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard73_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard72_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard70_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard69_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface1955_clearglass_0.geometry}
                        material={materials.clearglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard68_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard67_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard66_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard65_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard64_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.interior1_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard63_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats13_Car_Textured_Rough_Plastic_0.geometry}
                        material={materials.Car_Textured_Rough_Plastic}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats12_Car_Textured_Rough_Plastic_0.geometry}
                        material={materials.Car_Textured_Rough_Plastic}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats11_Car_Textured_Rough_Plastic_0.geometry}
                        material={materials.Car_Textured_Rough_Plastic}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats10_Car_Textured_Rough_Plastic_0.geometry}
                        material={materials.Car_Textured_Rough_Plastic}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard62_interior_third_0.geometry}
                        material={materials.interior_third}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard61_interior_third_0.geometry}
                        material={materials.interior_third}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats09_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.interior_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats08_Car_Textured_Rough_Plastic_0.geometry}
                        material={materials.Car_Textured_Rough_Plastic}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats07_Car_Textured_Rough_Plastic_0.geometry}
                        material={materials.Car_Textured_Rough_Plastic}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats05_Car_Textured_Rough_Plastic_0.geometry}
                        material={materials.Car_Textured_Rough_Plastic}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard60_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats04_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mirror_back_03_clearglass_0.geometry}
                        material={materials.clearglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mirror_back_02_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mirror_back_01_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats03_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats02_interior_fourth_0.geometry}
                        material={materials.interior_fourth}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats01_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard59_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard58_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard57_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard56_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard55_interior_fifth_0.geometry}
                        material={materials.interior_fifth}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard54_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard53_blue_0.geometry}
                        material={materials.blue}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard52_blue_0.geometry}
                        material={materials.blue}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard51_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard50_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard49_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard48_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard47_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard46_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard45_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard44_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard43_darkglass_0.geometry}
                        material={materials.darkglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard42_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard41_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard40_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard39_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface117_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard37_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard35_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard34_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard33_blue_0.geometry}
                        material={materials.blue}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard32_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard31_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard30_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard29_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard28_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Int_Floor_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard27_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard26_blue_0.geometry}
                        material={materials.blue}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard25_blue_0.geometry}
                        material={materials.blue}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard24_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard23_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard22_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard21_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard20_blue_0.geometry}
                        material={materials.blue}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard19_red_0.geometry}
                        material={materials.material}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard18_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard17_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard16_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard15_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard14_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard11_red_0.geometry}
                        material={materials.material}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard10_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard09_red_0.geometry}
                        material={materials.material}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard08_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard07_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard06_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard05_red_0.geometry}
                        material={materials.material}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard04_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard03_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard02_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dashboard01_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.logo_chevrolet_08_gold_0.geometry}
                        material={materials.gold}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.logo_chevrolet_12_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.logo_chevrolet_06_gold_0.geometry}
                        material={materials.gold}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.logo_chevrolet_11_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.logo_chevrolet_04_gold_0.geometry}
                        material={materials.gold}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.logo_chevrolet_09_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior26_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FrontLight10_clearglass_0.geometry}
                        material={materials.clearglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior24_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior25_clearglass_0.geometry}
                        material={materials.clearglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior23_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior22_gold_0.geometry}
                        material={materials.gold}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior21_green_0.geometry}
                        material={materials.green}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior20_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior19_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior18_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RearLight07_clearglass_0.geometry}
                        material={materials.clearglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RearLight06_redglass_0.geometry}
                        material={materials.redglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RearLight05_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RearLight04_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FrontLight09_clearglass_0.geometry}
                        material={materials.clearglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FrontLight08_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FrontLight07_orangeglass_0.geometry}
                        material={materials.orangeglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FrontLight06_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FrontLight05_Glass001_0.geometry}
                        material={materials['Glass.001']}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FrontLight04_clearglass_0.geometry}
                        material={materials.clearglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FrontLight03_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FrontLight02_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_15_brakedisk_0.geometry}
                        material={materials.brakedisk}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_14_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_13_rim_0.geometry}
                        material={materials.material_21}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_12_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_11_brakedisk_0.geometry}
                        material={materials.brakedisk}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_10_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_09_rim_0.geometry}
                        material={materials.material_21}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_08_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_07_brakedisk_0.geometry}
                        material={materials.brakedisk}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_06_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_05_Wheel_Brake_Disk_0.geometry}
                        material={materials.Wheel_Brake_Disk}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_03_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_04_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_02_brakedisk_0.geometry}
                        material={materials.brakedisk}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.logo_chevrolet_01_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.logo_chevrolet_03_gold_0.geometry}
                        material={materials.gold}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior17_gold_0.geometry}
                        material={materials.gold}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior16_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_01_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.disk_17_Wheel_Brake_Disk_0.geometry}
                        material={materials.Wheel_Brake_Disk}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior15_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior14_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior13_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RearLight03_redglass_0.geometry}
                        material={materials.redglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RearLight02_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior12_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RearLight01_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior11_redglass_0.geometry}
                        material={materials.redglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior10_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior010_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior09_Glass001_0.geometry}
                        material={materials['Glass.001']}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior08_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior07_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior06_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior05_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FrontLight01_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior04_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior03_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior02_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tire001_Tire_0.geometry}
                        material={materials.Tire}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tire02_Tire_0.geometry}
                        material={materials.Tire}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tire03_Tire_0.geometry}
                        material={materials.Tire}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tire04_Tire_0.geometry}
                        material={materials.Tire}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door01_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door02_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door03_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door04_Glass001_0.geometry}
                        material={materials['Glass.001']}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door05_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door06_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door07_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door08_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door09_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door10_interior_fifth_0.geometry}
                        material={materials.interior_fifth}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door11_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door12_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door13_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door14_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door15_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door16_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door17_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door18_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door19_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door20_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door21_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LB_door22_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door03_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door02_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door04_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door07_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door08_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door09_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door10_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door11_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door12_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door13_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door14_AR3DMat_Procedural_Realistic_Mirror_0.geometry}
                        material={materials.AR3DMat_Procedural_Realistic_Mirror}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door15_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door16_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door17_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door18_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door19_Glass001_0.geometry}
                        material={materials['Glass.001']}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door20_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door21_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door23_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door24_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door25_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door26_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door27_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door28_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door29_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door30_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door31_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door32_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door33_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door34_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door35_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door37_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door38_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door39_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door40_interior_fifth_0.geometry}
                        material={materials.interior_fifth}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LF_door41_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Seats21_white_0.geometry}
                        material={materials.white}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface38_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface39_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface31_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface32_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface15_windowglass_0.geometry}
                        material={materials.windowglass}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door01_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door02_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door03_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door04_Glass001_0.geometry}
                        material={materials['Glass.001']}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door07_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door08_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door09_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door10_interior_fifth_0.geometry}
                        material={materials.interior_fifth}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door11_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door12_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door13_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door14_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door15_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door16_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door17_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door18_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door19_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door20_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door21_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RB_door22_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface2151_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door02_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door07_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door08_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door09_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door10_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door11_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door12_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door13_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door14_AR3DMat_Procedural_Realistic_Mirror_0.geometry}
                        material={materials.AR3DMat_Procedural_Realistic_Mirror}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door15_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door16_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door17_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door18_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door19_Glass001_0.geometry}
                        material={materials['Glass.001']}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door20_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door21_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door23_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door24_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door25_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door26_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door27_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door28_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door29_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door30_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door31_chrome_0.geometry}
                        material={materials.chrome}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door32_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door33_Car_plastic_dark_0.geometry}
                        material={materials.Car_plastic_dark}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door34_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door35_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door36_interior_fifth_0.geometry}
                        material={materials.interior_fifth}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door37_interior_second_0.geometry}
                        material={materials.interior_second}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door38_carpaint_0.geometry}
                        material={materials.carpaint}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.RF_door39_black_0.geometry}
                        material={materials.black}
                        position={[0, 31.675, 55.53]}
                        rotation={[-Math.PI, 0, 0]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/car-model/scene.gltf')