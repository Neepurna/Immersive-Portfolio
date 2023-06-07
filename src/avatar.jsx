
import {  useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
export default function Avatar()
{
    const avatar = useGLTF('./Yama.glb')
    const animations = useAnimations(avatar.animations,avatar.scene)
    
    // const {animationName} = useControls({
    //     animationName: {options: ['Idle','Rituals','Sitting']}
    // })

    // useEffect(() =>
    // {
    //     const action = animations.actions.Idle
    //     action.play()

    //     window.setTimeout(()=>
    //     {
    //         animations.actions.Idle.play()
    //         animations.actions.Idle.crossFadeFrom(animations.actions.Idle,1 )
    //     }, 2000)
    // }, [])

    
    
   

    return <primitive
        object={ avatar.scene }
        scale={ 3 }
        position={ [ 0, -1, 0 ] }
        rotation-y={ 0 }
    />
}