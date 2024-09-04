import React from 'react';
import { Html } from '@react-three/drei';

export default function CustomPageFrame({ showIframe, onClose, position }) {
  if (!showIframe) return null;

  return (
    <Html
      position={position} // Position the iframe correctly in the 3D scene
      transform
      occlude
      zIndexRange={[1, 0]}
    >
      <div style={{
        position: 'relative',
        width: '800px',
        height: '450px',
        zIndex: 1,
        border: '2px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: '#fff'
      }}>
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 2,
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
        <div style={{ padding: '20px' }}>
          <h1>About Us</h1>
          <p>
            Welcome to our immersive portfolio! We specialize in creating
            interactive 3D experiences that engage and inspire.
          </p>
        </div>
      </div>
    </Html>
  );
}
