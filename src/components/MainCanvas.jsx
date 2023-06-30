import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Chair } from "./Chair";
import { Setup } from "./Setup";
import { KeyboardMouse } from "./KeyboardMouse";
import { Image2 } from "./Image";

export const MainCanvas = () => {
  // const { animation } = useControls({
  //   animation: {
  //     value: "Typing",
  //     options: ["Typing", "Falling", "Standing"],
  //   },
  // });
  return (
    <>
      <OrbitControls
        enableZoom={
          !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        }
      />
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

        <KeyboardMouse />
        <Avatar animation={"Typing"} />
        <Chair />
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="lightgreen" />
        </mesh>
      </group>
    </>
  );
};
