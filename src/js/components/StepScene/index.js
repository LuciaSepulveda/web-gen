import React from 'react'; // Suspense, // useContext,
import { Canvas } from '@react-three/fiber';
import Scene from '../Scene';

const StepScene = () => {
  //   const {
  //     // appState,
  //     // setAppState,
  //     goToStep,
  //     // setLanguage,
  //     // cleanStorage,
  //   } = useContext(AppContext);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas shadows camera={{ position: [2, 2, 2], fov: 90 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default StepScene;
