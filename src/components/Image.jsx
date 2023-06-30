import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";

export function Image2() {
  const texture = useLoader(THREE.TextureLoader, "/textures/coding2.jpg");
  return (
    <mesh position={[0, 1, 0]}>
      <planeGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}
