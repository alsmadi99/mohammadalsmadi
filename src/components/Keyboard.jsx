/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 .\public\models\keyboard.glb
Author: unknown.fbx (https://sketchfab.com/unknown.fbx)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/custom-mechanical-keyboard-90d61eec0c484332ab562c5f4eda6f52
Title: Custom - Mechanical Keyboard
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Keyboard(props) {
  const { nodes, materials } = useGLTF("/models/keyboard.glb");
  const groupRef = useRef();

  useEffect(() => {
    groupRef.current.scale.set(0.0005, 0.0005, 0.0005); // Adjust the scale here
    groupRef.current.position.set(0.25, 0.65, 0.7); // Adjust the position here
    groupRef.current.rotation.set(0, Math.PI, 0); // Rotate by 180 degrees
  }, []);

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Keyboard}
            position={[0, -23.907, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Wood_00}
            position={[0, -23.907, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.Keyboard}
            position={[-21.666, 173.137, -75.702]}
            rotation={[-1.476, 0, 0]}
            scale={5.744}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/keyboard.glb");
