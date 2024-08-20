import { Canvas, useThree } from "@react-three/fiber";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

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

function RotateCamera({ rotationAngle }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.rotation.y = rotationAngle;
  }, [rotationAngle, camera]);

  return null;
}

function App() {
  const [rotationAngle, setRotationAngle] = useState(0);

  // You can adjust rotationAngle using setRotationAngle or remove these functions entirely if not needed.
  const handleRotateLeft = () => {
    setRotationAngle((prevAngle) => prevAngle - 0.1);
  };

  const handleRotateRight = () => {
    setRotationAngle((prevAngle) => prevAngle + 0.1);
  };

  return (
    <>
      <Canvas camera={{ position: [7.950236292734576, 2, 7.881748094799187], fov: 30, near: 0.1, far: 10000 }} shadows>
        <Experience />
        {/* Disable OrbitControls completely to prevent pointer rotation */}
        <OrbitControls enabled={false} />
        <LogCameraPosition />
        {/* Rotating the camera within the Three.js context */}
        <RotateCamera rotationAngle={rotationAngle} />
      </Canvas>
    </>
  );
}

export default App;
