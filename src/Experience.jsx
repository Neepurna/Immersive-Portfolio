import {TransformControls, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Env from './Env.jsx'




export default function Experience()
{
    return <>

        <Perf position="top-left" />

        <OrbitControls 
             rotateSpeed={.3}
             
             enableDamping = {true}
             enableZoom = {false} 
             maxPolarAngle={2}
             minPOlarAngle={1}
             target={3}
             
            
             
            
        />



        <directionalLight 
                castShadow position={ [ 1, 2, 3 ] } 
                intensity={ 1.5 } 
                shadow-normalBias={ 0.04 } 
        />
        <ambientLight 
                intensity={ 0.5 } 
        />
        
        <Env />

    </>
}