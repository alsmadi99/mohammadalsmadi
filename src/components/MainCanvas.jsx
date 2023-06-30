import { ContactShadows, Environment, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Setup } from "./Setup";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableZoom={false}
      enableRotate
      enablePan={false}
      rotateSpeed={0.1}
      maxPolarAngle={Math.PI / 2} // Limit vertical rotation to 90 degrees (horizontal rotation only)
    />
  );
};

export const MainCanvas = () => {
  // const { animation } = useControls({
  //   animation: {
  //     value: "Typing",
  //     options: ["Typing", "Falling", "Standing"],
  //   },
  // });
  return (
    <Suspense fallback={null}>
      <CameraControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Setup />
        <Avatar animation={"Typing"} />
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="lightgreen" />
        </mesh>
      </group>
    </Suspense>
  );
};
