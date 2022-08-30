import React, {
  Fragment,
  // useContext,
  Suspense,
  //   useEffect,
  //   useState,
  //   useRef,
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

import { OrbitControls, Sky } from '@react-three/drei';

import Camera from '../Camera/camera';

import Cat from '../Models/Cat';
import Plane from '../Models/Plane';
import { PerspectiveCamera } from 'three';

const Scene = () => {
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

  function CameraHelper() {
    const camera = new PerspectiveCamera(60, 1, 1, 3);
    return (
      <group position={[0, 10, -1]} rotation={[130, 0, 0]}>
        <cameraHelper args={[camera]} />
      </group>
    );
  }

  return (
    <Fragment>
      <Suspense fallback={null}>
        <directionalLight intensity={0.1} />
        <ambientLight intensity={0.1} />
        <pointLight intensity={2} position={[7, 5, 1]} />
        <Sky sunPosition={[7, 5, 1]} />
        <Camera />
        <Cat position={[0, 0, -4]} />

        <Plane onClick={() => {}} rotation={[0, 0, 0]} position={[0, 0, 0]} />
        <CameraHelper />
      </Suspense>

      <OrbitControls />
    </Fragment>
  );
};

export default Scene;
