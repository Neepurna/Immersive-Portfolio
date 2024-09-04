import React from 'react';
import { OrbitControls } from '@react-three/drei';
import Env from './Env.jsx';
import LinkedInFrame from './LinkedInFrame.jsx';
import Yama from './Yama'; // Import the Yama component

export default function Experience({
  disableControls,
  setDisableControls,
  setShowExit,
  setDisableClick,
  disableClick,
  showLinkedIn,
  setShowLinkedIn,
  iframePosition,
  setIframePosition,
}) {
  return (
    <>
      <OrbitControls
        enabled={!disableControls}
        rotateSpeed={0.3}
        enableDamping={true}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        target={[0, 1.6, 0]}
      />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.5}
      />
      <ambientLight intensity={0.5} />
      <Yama /> {/* Render the Yama component */}
      <Env
        setDisableControls={setDisableControls}
        setShowExit={setShowExit}
        setDisableClick={setDisableClick}
        disableClick={disableClick}
        setShowLinkedIn={setShowLinkedIn}
        setIframePosition={setIframePosition}
      />
      {showLinkedIn && (
        <LinkedInFrame
          showIframe={showLinkedIn}
          onClose={() => setShowLinkedIn(false)}
          position={iframePosition}
        />
      )}
    </>
  );
}
