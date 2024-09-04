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
        backgroundColor: '#fff',
        padding: '20px'
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
        <h1 style={{ textAlign: 'center' }}>About Us</h1>
        <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.5' }}>
          Welcome to our 3D portfolio! We are passionate about creating immersive experiences 
          that blend technology and creativity. Our team specializes in WebGL, Three.js, and 
          React, bringing ideas to life in an interactive 3D space. Explore our projects, and 
          don't hesitate to reach out if you'd like to collaborate!
        </p>
      </div>
    </Html>
  );
}
