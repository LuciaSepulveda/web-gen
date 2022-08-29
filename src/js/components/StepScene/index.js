import React, { useContext, Suspense } from 'react';
// import Button from 'COMPONENTS/Button/button';
// import { FadeInOut, Staggers } from 'HELPERS/framer-animations';
import { AppContext } from '../../context/appContext';
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
import { OrbitControls } from '@react-three/drei';
import Camera from '../Camera/camera';
import Cat from '../Models/Cat';

const StepScene = () => {
    const {
        appState,
        // setAppState,
        goToStep,
        // setLanguage,
        // cleanStorage,
    } = useContext(AppContext);

    // useEffect(() => {
    //     cleanStorage();
    //     localStorage.removeItem('character');
    // }, []);

    // const finishStep = function (language) {
    //     // const audio = document.getElementById('audio-intro');
    //     // audio.play();
    //     // setLanguage(language);
    //     // localStorage.setItem('language', language);
    //     goToStep(appState.currentStep + 1);
    // };

    return (

            <div styles={{width: '100%', height: '100vh'}}>
                    <Canvas shadows>
                        <Camera />
                        {/* <Suspense fallback={null}>
                            <Cat />
                        </Suspense> */}
                        <mesh position={[3, 0, 0]}>
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
                        </mesh>

                        <OrbitControls />
                    </Canvas>
                </div>

    );
};

export default StepScene;
