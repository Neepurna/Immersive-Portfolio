import { useGLTF } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Env() {
  const env = useGLTF('./env.glb')
  const { camera } = useThree()
  const clickableObjects = useRef([])

  // Function to handle camera zoom
  const handleZoom = (clickedObject) => {
    const box = new THREE.Box3().setFromObject(clickedObject)
    const center = box.getCenter(new THREE.Vector3())

    // Calculate a new camera position that zooms in on the clicked object
    const newPosition = center.clone().add(new THREE.Vector3(0, 2, 5))
    camera.position.copy(newPosition)
    camera.lookAt(center)
  }

  // This hook will populate the clickableObjects array with specific targets
  useEffect(() => {
    const targets = ['Capture', 'ObjectName2'] // Replace these with your target object names
    env.scene.traverse((child) => {
      if (targets.includes(child.name)) {
        clickableObjects.current.push(child)
      }
    })
  }, [env])

  useFrame(({ mouse, raycaster }) => {
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(clickableObjects.current, true)

    if (intersects.length > 0) {
      document.body.style.cursor = 'pointer'
    } else {
      document.body.style.cursor = 'auto'
    }
  })

  return (
    <primitive
      object={env.scene}
      scale={3}
      position={[0, -2, 0]}
      rotation-y={0}
      onClick={(event) => {
        if (clickableObjects.current.includes(event.object)) {
          handleZoom(event.object)
        }
      }}
    />
  )
}
