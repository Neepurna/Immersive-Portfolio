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

function App() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [basePosition] = useState([7.950236292734576, 2, 7.881748094799187]);

  const handleExit = () => {
    setIsZoomedIn(false);
    setRotationAngle(0); // Reset rotation if needed
  };

  return (
    <>
      <Canvas camera={{ position: basePosition, fov: 30, near: 0.1, far: 10000 }} shadows>
        <Experience setIsZoomedIn={setIsZoomedIn} />
        {/* Disable OrbitControls if zoomed in */}
        <OrbitControls enabled={!isZoomedIn} />
        <LogCameraPosition />
      </Canvas>
      {/* Show Exit button only when zoomed in */}
      {isZoomedIn && (
        <button 
          onClick={handleExit}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Exit
        </button>
      )}
    </>
  );
}

export default App;
