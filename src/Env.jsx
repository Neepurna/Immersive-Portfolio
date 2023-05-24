import {  useGLTF } from '@react-three/drei'


export default function Env()
{
    const env = useGLTF('./env.glb')
    
   

    return <primitive
        object={ env.scene }
        scale={ 3 }
        position={ [ 0, -2, 0 ] }
        rotation-y={ 0 }
    />
}
