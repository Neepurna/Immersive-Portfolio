import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import { gsap } from 'gsap';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [disableControls, setDisableControls] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [disableClick, setDisableClick] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleExit = () => {
    setDisableControls(false);
    setShowExit(false);
    setDisableClick(false);
    setShowLinkedIn(false);

    const camera = document.querySelector('canvas').__r3f.camera;
    gsap.to(camera.position, {
      x: 0,
      y: 1.6,
      z: 5,
      duration: 1.5,
      onUpdate: () => {
        camera.lookAt(0, 0, 0);
      },
    });
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoaded={handleLoadingComplete} />}
      {!isLoading && (
        <Canvas
          camera={{
            position: [0, 1.6, 5],
            fov: 50,
            near: 0.1,
            far: 1000,
          }}
          shadows
        >
          <Experience
            disableControls={disableControls}
            setDisableControls={setDisableControls}
            setShowExit={setShowExit}
            setDisableClick={setDisableClick}
            disableClick={disableClick}
            setShowLinkedIn={setShowLinkedIn}
          />
        </Canvas>
      )}
      {showExit && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            textAlign: 'center',
          }}
        >
          <button
            onClick={handleExit}
            style={{
              padding: '10px 20px',
              background: '#ff007f',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Exit
          </button>
        </div>
      )}
    </>
  );
}

export default App;
