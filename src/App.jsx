import { Canvas, useThree } from "@react-three/fiber";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";

function LogCameraPosition() {
  const { camera } = useThree();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'p') {
        console.log(camera.position);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [camera]);

  return null;
}

function App() {
  return (
    <>
      <Canvas camera={{ position: [7.950236292734576, 2, 7.881748094799187], fov: 30, near: 0.1, far: 10000 }} shadows>
        <Experience />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          target={[0, 0, 0]}
          minDistance={0}
          maxDistance={Infinity}
        />
        <LogCameraPosition />
      </Canvas>
    </>
  );
}

export default App;
