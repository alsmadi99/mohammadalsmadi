import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { VideoTexture, ShaderMaterial } from "three";

// Custom texture URL
const customVideoUrl = "/textures/coding.mp4";
export function Setup(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/models/setup.glb");

  // Function to assign custom texture to a monitor mesh
  const setCustomTexture = (meshName, videoUrl) => {
    const mesh = groupRef.current.getObjectByName(meshName);
    if (mesh && mesh.material) {
      const video = document.createElement("video");
      video.src = videoUrl;
      video.loop = true;
      video.muted = true;
      video.crossOrigin = "Anonymous";
      video.setAttribute("webkit-playsinline", "true");
      video.setAttribute("playsinline", "true");
      video.play();

      const texture = new VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBAFormat;

      const material = new THREE.MeshBasicMaterial({ map: texture });
      mesh.material = material;
    }
  };

  useEffect(() => {
    groupRef.current.scale.set(0.1, 0.1, 0.1);
    groupRef.current.position.set(-31.2, 0, 9.15);
    groupRef.current.rotation.set(0, Math.PI, 0);
    setCustomTexture("GREEN_SCREEN", customVideoUrl);
  }, []);

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Part5Mtl}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Part7Mtl}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Part8Mtl}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Union1Mtl}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Union1Mtl}
          name="GREEN_SCREEN"
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Part4Mtl}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Union2Mtl}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.Union5Mtl}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/setup.glb");
