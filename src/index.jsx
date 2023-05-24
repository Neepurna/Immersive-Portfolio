import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { PerspectiveCamera } from '@react-three/drei'


const root = ReactDOM.createRoot(document.querySelector('#root'))



root.render(

    

    <Canvas
        shadows
        camera={ {
            fov: 30,
            near: 0.1,
            far: 300,
            position: [ 5, 2.8, 5 ]
            
        } }




        
    >
        <Experience />
        
    </Canvas>
)