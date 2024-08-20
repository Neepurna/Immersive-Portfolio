import { useGLTF } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

export default function Env({ setIsZoomedIn }) {
  const env = useGLTF('./env.glb')
  const { camera } = useThree()
  const clickableObjects = useRef([])
  const [targetPosition, setTargetPosition] = useState(null)
  const [targetLookAt, setTargetLookAt] = useState(null)

  // Function to handle camera zoom
  const handleZoom = (clickedObject) => {
    const box = new THREE.Box3().setFromObject(clickedObject)
    const center = box.getCenter(new THREE.Vector3())

    const direction = new THREE.Vector3().subVectors(center, camera.position).normalize()
    const distance = 5
    const newPosition = camera.position.clone().add(direction.multiplyScalar(distance))

    setTargetPosition(newPosition)
    setTargetLookAt(center)
    setIsZoomedIn(true)
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

  useFrame(() => {
    if (targetPosition && targetLookAt) {
      camera.position.lerp(targetPosition, 0.1)
      const currentLookAt = new THREE.Vector3()
      camera.getWorldDirection(currentLookAt)
      currentLookAt.lerp(targetLookAt.sub(camera.position).normalize(), 0.1)
      camera.lookAt(camera.position.clone().add(currentLookAt))

      if (camera.position.distanceTo(targetPosition) < 0.1) {
        setTargetPosition(null)
        setTargetLookAt(null)
      }
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
