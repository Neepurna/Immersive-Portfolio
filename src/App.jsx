import { Canvas, useThree } from "@react-three/fiber";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import LoadingScreen from "./loadingscreen"; // Make sure the path is correct

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
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false); // Hide loading screen when loading is complete
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoaded={handleLoadingComplete} />}
      {!isLoading && (
        <Canvas camera={{ position: [7.950236292734576, 2, 7.881748094799187], fov: 30, near: 0.1, far: 10000 }} shadows>
          <Experience />
          <OrbitControls enabled={false} />
          <LogCameraPosition />
          <RotateCamera rotationAngle={rotationAngle} />
        </Canvas>
      )}
    </>
  );
}

export default App;
