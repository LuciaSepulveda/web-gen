import React, {
  useContext,
  // useState,
  // useEffect
} from 'react';
// import PanningImage from 'COMPONENTS/PanningImage';
import './style.scss';
import { AnimatePresence } from 'framer-motion';
import { FadeInOut } from 'HELPERS/framer-animations';
// import ClickAudio from '../../assets/audios/02-click.mp3';
import { AppContext } from '../context/appContext';
import {
  StepContent,
  Root,
  HeaderBlock,
  MenuContainer,
  // Text,
  Content,
  LogoGenoshaContainer,
  LayoutBackgroundContainer,
  StepShareBg,
  // ModalContainer,
} from './layoutStyle';
import Background from '../../assets/images/bg.jpg';
// import TecnologiaJaponesa from '../../assets/images/Logo_TecnologiaJaponesa_white.png';
// import IngenieriaJaponesa from '../../assets/images/Logo_IngenieriaJaponesa_white.png';
// import videoLayoutDesktop from '../../assets/videos/FONDO_video_desktop.mp4';
// import videoLayoutMobile from '../../assets/videos/FONDO_video_mobile.mp4';
// import shareBgDesktop from '../../assets/images/BG_share_desktop.jpg';
// import shareBgMobile from '../../assets/images/BG_share_mobile.jpg';
import Icon from '../components/Icons';

export const DefaultLayout = ({ children }) => {
  const {
    appState,
    // setAppState,
    // setUserState,
    goToStep,
    // getCurrentSceneImages,
    // getTranslation,
  } = useContext(AppContext);
  // const [showBack, setShowBack] = useState(true);

  // const photoSaved = () => {
  //     // When local storage changes, dump the list to
  //     // the console.
  //     if (localStorage.getItem('photoIsReady') === 'true') {
  //         console.log(
  //             'log del storage',
  //             localStorage.getItem('photoIsReady'),
  //             localStorage.getItem('photo')
  //         );
  //         setUserState((prevState) => ({
  //             ...prevState,
  //             photo: localStorage.getItem('photo'),
  //         }));
  //         return setAppState((prevState) => ({
  //             ...prevState,
  //             showIframe: false,
  //             currentStep: 4,
  //             postImg: true,
  //         }));
  //     }
  //     return console.log('No se cargó la foto');
  // };

  // useEffect(() => {
  //     window.addEventListener('storage', photoSaved);
  //     return () => window.removeEventListener('storage', photoSaved);
  // }, []);

  // const backButton = () => {
  //     // const audio = document.getElementById('audio');
  //     // audio.play();
  //     setShowBack(false);
  //     if (appState.currentStep === 7) {
  //         goToStep(appState.currentStep - 2);
  //     }
  //     // if (appState.currentStep === 4 && appState.showIframe) {
  //     //     setAppState((prevState) => ({
  //     //         ...prevState,
  //     //         showIframe: false,
  //     //         // currentStep: 4,
  //     //     }));
  //     // } else {
  //     //     goToStep(appState.currentStep - 1);
  //     // }
  //     setTimeout(() => {
  //         setShowBack(true);
  //     }, 2000);
  // };

  const backgroundAnimProps = {
    entryTransition: { duration: 1 },
    exitTransition: { duration: 1 },
    blur: false,
    animateY: false,
    isNested: false,
    containerProps: {
      style: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      },
    },
  };

  return (
    <Root>
      <Content>
        <LayoutBackgroundContainer>
          <AnimatePresence>
            {appState.currentStep === 0 && (
              <FadeInOut key='StepShareBg' {...backgroundAnimProps}>
                <StepShareBg
                  desktopBg={Background}
                  mobileBg={Background}
                ></StepShareBg>
              </FadeInOut>
            )}
          </AnimatePresence>
          <div className='background-overlay'></div>
        </LayoutBackgroundContainer>

        {/* HEADER */}
        {appState.currentStep !== 0 && (
          <HeaderBlock>
            <FadeInOut
              component={LogoGenoshaContainer}
              isVisible={true}
              animatePresence={true}
            >
              <Icon name='genoshaIsotipo' onClick={() => goToStep(0)} />
            </FadeInOut>
            <FadeInOut
              component={MenuContainer}
              isVisible={true}
              animatePresence={true}
            >
              <Icon name='menu' />
            </FadeInOut>
          </HeaderBlock>
        )}

        {/* STEPS LAYOUT */}
        <FadeInOut
          component={StepContent}
          isVisible={true}
          animatePresence={true}
        >
          <StepContent>{children}</StepContent>
        </FadeInOut>

        {/* {!appState.showIframe && ( */}
        {/* <PositionContainer
                    leftPropMobile="20px"
                    bottomPropMobile="16px"
                    // positionProp="unset"
                    engineerIconMobile
                    engineerIconMobileWidth={
                        appState.lenguaje === 'pt_BR' ? '130px' : '120px'
                    }
                    engineerIconSmallMobileWidth={
                        appState.lenguaje === 'pt_BR' ? '100px' : '90px'
                    }
                >
                    <img
                        src={
                            appState.lenguaje === 'pt_BR'
                                ? TecnologiaJaponesa
                                : IngenieriaJaponesa
                        }
                        // width={appState.lenguaje === 'pt_BR' ? '100px' : '90px'}
                    />
                </PositionContainer> */}
        {/* <PositionContainer
                    rightProp="50px"
                    rightPropMobile="20px"
                    bottomProp="65px"
                    bottomPropMobile="20px"
                    // positionProp="unset"
                    intelligentIcon
                >
                    <img src={NissanIntelligent} width="122px" height="45px" />
                </PositionContainer> */}
        {/* <audio id="audio" src={ClickAudio}></audio> */}
        {/* )} */}
        {/* {appState.showIframe && (
                    <ModalContainer>
                        <iframe
                            src={
                                'https://nissanfrontierexperience.com/photobooth/index.html'
                            }
                            height="100%"
                            width="100%"
                        />
                    </ModalContainer>
                )} */}
      </Content>
    </Root>
  );
};

const LayoutWrapper = (props) => (
  <DefaultLayout {...props}>{props.children}</DefaultLayout>
);

export default LayoutWrapper;
