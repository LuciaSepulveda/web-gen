import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';

const Camera = ({ position }) => {
  return (
    <PerspectiveCamera
      makeDefault
      position={position ? position : [0, 10, -1]}
      rotation={[-Math.PI / 2, 0, 0]}
      fov={40}
    />
  );
};

export default Camera;
