import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Interface from "./Interface";

function App() {
  return (
    <>
      <Canvas camera={{ position: [2, 1.5, 2.5], fov: 30 }} shadows>
        <Experience />
      </Canvas>
      {/* <Interface /> */}
    </>
  );
}

export default App;