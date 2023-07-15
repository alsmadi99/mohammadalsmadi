import { ContactShadows, Environment, Preload, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Setup } from "./Setup";
import CanvasLoader from "./Loader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame, Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { Setup2 } from "./Setup2";

extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  // Update the camera's target position to focus higher along the y-axis
  useEffect(() => {
    camera.position.set(0, 10, 0); // Set the camera position to a higher y-value (adjust as needed)
    camera.lookAt(0, 0, 0); // Set the camera's target to the center of the scene (adjust as needed)
  }, []);
  useFrame(() => controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableZoom={true}
      minDistance={3}
      maxDistance={6}
      enableRotate
      enablePan={false}
      rotateSpeed={0.1}
      minPolarAngle={1.1} // Limit vertical rotation to 0 degrees (horizontal rotation only)
      maxPolarAngle={Math.PI / 2} // Limit vertical rotation to 90 degrees (horizontal rotation only)
    />
  );
};

export const MainCanvas = () => {
  const isMobile = useIsMobile();
  return (
    <div className="h-full w-screen">
      <Canvas
        shadows
        camera={{
          position: [0, 2, 5],
          fov: 40,
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

            <Setup2 scale={isMobile ? 1.8 : 2} />
            <Avatar scale={isMobile ? 1.4 : 1.6} animation={"Typing"} />
            <mesh
              scale={isMobile ? 4.5 : 5}
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
    </div>
  );
};
