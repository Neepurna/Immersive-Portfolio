import React, { useEffect } from 'react';
import './LoadingScreen.css';

function LoadingScreen({ onLoaded }) {
  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      onLoaded(); // Simulate loading completion
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(fakeLoading);
  }, [onLoaded]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-title">Immersive Portfolio</h1>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
