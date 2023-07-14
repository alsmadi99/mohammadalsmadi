import { ContactShadows, Environment, Preload, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Setup } from "./Setup";
import CanvasLoader from "./Loader";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame, Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import useIsMobile from "../hooks/useIsMobile";

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
      minPolarAngle={1.1} // Limit vertical rotation to 0 degrees (horizontal rotation only)
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
  const isMobile = useIsMobile();
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 2, 5],
        fov: 35,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <CameraControls />
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

          <Setup scale={isMobile ? 0.65 : 0.85} />
          <Avatar scale={isMobile ? 0.5 : 0.7} animation={"Typing"} />
          <mesh
            scale={isMobile ? 1 : 1.5}
            rotation-x={-Math.PI * 0.5}
            position-y={-0.001}
            position-z={0.5}
          >
            <circleGeometry />
            <meshStandardMaterial color="darkgrey" />
          </mesh>
        </group>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
