import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Camera from './js/components/Camera/camera';
import Button from './js/components/Button/button';
import Cat from './js/components/Models/Cat';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Button />
      <Canvas>
        <Camera />
        <Suspense fallback={null}>
          <Cat />
        </Suspense>
        {/* <mesh position={[3, 0, 0]}>
          <boxBufferGeometry args={[1.2, 1.2, 1.2]} />
          <meshNormalMaterial />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereBufferGeometry args={[0.8, 26, 16]} />
          <meshNormalMaterial />
        </mesh>
        <mesh position={[-3, 0, 0]}>
          <torusKnotBufferGeometry args={[0.8, 0.2, 100, 100]} />
          <meshNormalMaterial />
        </mesh> */}

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
