import { Canvas } from "@react-three/fiber";
import { MainCanvas } from "./components/MainCanvas";
import * as THREE from "three";

if (!("THREE" in window) || !window.THREE) {
  window.THREE = THREE;
}

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 35 }}>
      <color attach="background" args={["#ececec"]} />
      <MainCanvas />
    </Canvas>
  );
}

export default App;
