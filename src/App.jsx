import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { useEffect, useState } from 'react';
import LoadingScreen from './loadingscreen';
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
              background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0px 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
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
