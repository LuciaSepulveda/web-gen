import React, { useRef, useState } from 'react';

const ButtonMesh = ({ handleButtonClicked }) => {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  //   const [clicked, click] = useState(false);

  return (
    <mesh
      ref={ref}
      scale={hovered ? 1.2 : 1}
      onClick={handleButtonClicked}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      rotation={[7.82, 110, 0]}
      position={[0, 0, 1]}
    >
      <planeBufferGeometry attach='geometry' args={[1, 1]} />
      <meshStandardMaterial
        attach='material'
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
};

export default ButtonMesh;
