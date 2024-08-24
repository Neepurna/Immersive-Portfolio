import React, { useEffect } from 'react';
import loadingImage from './LoadingScreen_One.jpg'; // Import your PNG image here
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
      <img src={loadingImage} alt="Loading" className="background-image" />
      <div className="loading-content">
        <h1 className="loading-title">Loading Your Experience...</h1>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
