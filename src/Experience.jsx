import {Environment,Sky,OrbitControls } from '@react-three/drei'

import Env from './Env.jsx'
import Avatar from '/avatar.jsx'
import Yama from './Yama.jsx'




export default function Experience()
{
    return <>

        

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
                shadow-normalBias={ 0.5 } 
/>
        <ambientLight 
                intensity={ 0.5 } 
/>

        
        
        
        {/* <Avatar /> */}
        <Yama />
        <Env />
        <Sky/>

    </>
}