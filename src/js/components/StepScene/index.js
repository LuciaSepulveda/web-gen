import React, {
  // useContext,
  Suspense,
} from 'react';
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
import { OrbitControls, Sky } from '@react-three/drei';
import Camera from '../Camera/camera';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Cat from '../Models/Cat';
import City from '../Models/City';

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
      <Canvas shadows>
        <Camera />
        <Suspense fallback={null}>
          <directionalLight intensity={1} />
          <pointLight intensity={2} position={[7, 5, 1]} />
          <Sky sunPosition={[7, 5, 1]} />
          <City />
          <Cat />
          {/* <primitive object={gltf.scene} /> */}
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default StepScene;
