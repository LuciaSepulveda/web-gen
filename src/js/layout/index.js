import React, { useContext } from 'react';

import './style.scss';
import { AnimatePresence } from 'framer-motion';
import { FadeInOut } from 'HELPERS/framer-animations';

import { AppContext } from '../context/appContext';
import {
  StepContent,
  Root,
  HeaderBlock,
  MenuContainer,
  Content,
  LogoGenoshaContainer,
  LayoutBackgroundContainer,
  StepShareBg,
} from './layoutStyle';
import Background from '../../assets/images/bg.jpg';
import Icon from '../components/Icons';

export const DefaultLayout = ({ children }) => {
  const { appState, goToStep } = useContext(AppContext);

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
      </Content>
    </Root>
  );
};

const LayoutWrapper = (props) => (
  <DefaultLayout {...props}>{props.children}</DefaultLayout>
);

export default LayoutWrapper;
