import React, {
  Fragment,
  // useContext,
  Suspense,
  //   useEffect,
  //   useState,
  //   useRef,
} from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Camera from '../Camera/camera';
import Cat from '../Models/Cat';
import Plane from '../Models/Plane';
import ButtonMesh from '../Models/Button';
import { PerspectiveCamera } from 'three';
gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const { camera } = useThree();

  function handleStart() {
    let timeline = gsap.timeline();
    timeline
      .to(camera.position, { duration: 2 })
      .to(camera.position, {
        y: 5,
        z: -8,
        duration: 3,
        onUpdate: function () {
          camera.lookAt(0, 0, -1);
        },
      })
      .to(
        camera.rotation,
        {
          x: 110,
          duration: 3,
          onUpdate: function () {
            camera.lookAt(0, 0, -1);
          },
        },
        '<'
      );
  }

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
      // rotation={[110, 0, 0]} -> vista trasera horizontal
      <group position={[0, 3, -8]} rotation={[110, 0, 0]}>
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
        <ButtonMesh handleButtonClicked={handleStart} />
        <Cat position={[0, 0, -4]} />

        <Plane onClick={() => {}} rotation={[0, 0, 0]} position={[0, 0, 0]} />
        <CameraHelper />
      </Suspense>

      <OrbitControls />
    </Fragment>
  );
};

export default Scene;
