import React from 'react'; // Suspense, // useContext,
// import Button from 'COMPONENTS/Button/button';
// import { FadeInOut, Staggers } from 'HELPERS/framer-animations';
// import { AppContext } from '../../context/appContext';
// import Icon from '../Icons';
// import {
//     Container,
//     // FontierIconContainer,
//     // Text,
//     BtnsContainer,
//     ButtonContainer,
// } from './stepIntroStyles';
// import IntroAudio from '../../../assets/audios/01-first-open.mp3';
import { Canvas } from '@react-three/fiber';
// import {
//   OrbitControls,
//   Sky
// } from '@react-three/drei';
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// import Camera from '../Camera/camera';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Cat from '../Models/Cat';
// import Plane from '../Models/Plane';
import Scene from '../Scene';

const StepScene = () => {
  //   const gltf = useLoader(GLTFLoader, '/models/cat/scene.gltf');
  //   const {
  //     // appState,
  //     // setAppState,
  //     goToStep,
  //     // setLanguage,
  //     // cleanStorage,
  //   } = useContext(AppContext);

  // const finishStep = function (language) {
  //     // const audio = document.getElementById('audio-intro');
  //     // audio.play();
  //     // setLanguage(language);
  //     // localStorage.setItem('language', language);
  //     goToStep(appState.currentStep + 1);
  // };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas shadows camera={{ position: [2, 2, 2], fov: 90 }}>
        <Scene />
        {/* <Suspense fallback={null}>
          <directionalLight intensity={0.1} />
          <ambientLight intensity={0.1} />
          <pointLight intensity={2} position={[7, 5, 1]} />
          <Sky sunPosition={[7, 5, 1]} />
          <Camera>
            <Cat />
          </Camera>
          <Plane onClick={() => {}} rotation={[0, 0, 0]} position={[0, 0, 0]} />
          <primitive object={gltf.scene} />
        </Suspense> */}

        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default StepScene;
