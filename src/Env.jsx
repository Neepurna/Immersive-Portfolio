import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

export default function Env({
  setDisableControls,
  setShowExit,
  setDisableClick,
  disableClick,
  setShowLinkedIn,
  setIframePosition,
}) {
  const env = useGLTF('./env.glb');
  const { camera } = useThree();
  const clickableObjects = useRef([]);
  const originalCameraPosition = useRef(new THREE.Vector3());
  const originalCameraTarget = useRef(new THREE.Vector3());

  const handleZoom = (clickedObject) => {
    setDisableControls(true);
    setShowExit(true);
    setDisableClick(true);

    const box = new THREE.Box3().setFromObject(clickedObject);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    originalCameraPosition.current.copy(camera.position);
    originalCameraTarget.current.copy(center);

    const direction = new THREE.Vector3()
      .subVectors(camera.position, center)
      .normalize();

    const distance = size.length() * 0.75;
    const newPosition = center.clone().add(direction.multiplyScalar(distance));

    gsap.to(camera.position, {
      x: newPosition.x,
      y: newPosition.y,
      z: newPosition.z,
      duration: 1.5,
      onUpdate: () => {
        camera.lookAt(center);
      },
      onComplete: () => {
        camera.lookAt(center);
        if (clickedObject.name === 'capture') {
          setShowLinkedIn(true);
          if (typeof setIframePosition === 'function') {
            setIframePosition(newPosition);
          } else {
            console.error('setIframePosition is not a function');
          }
        }
      },
    });
  };

  useEffect(() => {
    const targets = ['capture', 'photos', '69763848_2695650407126493_296809581915406336_n'];
    env.scene.traverse((child) => {
      if (targets.includes(child.name)) {
        clickableObjects.current.push(child);
      }
    });
  }, [env]);

  return (
    <primitive
      object={env.scene}
      scale={3}
      position={[0, -2, 0]}
      rotation-y={0}
      onClick={(event) => {
        if (clickableObjects.current.includes(event.object) && !disableClick) {
          handleZoom(event.object);
        }
      }}
    />
  );
}
