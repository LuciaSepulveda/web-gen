/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: the Show Orange (https://sketchfab.com/orangetheshow)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/cat-is2-670791315b634cb0b1f59cbfe7cff3e4
title: Cat IS2
*/

import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Cat = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/cat/scene.gltf');
  const { actions } = useAnimations(animations, group);

  console.log(actions);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group
          name='Sketchfab_model'
          rotation={[-Math.PI / 2, 0, 0]}
          scale={860.73}
        >
          <group
            name='153a0d5dcc9149cfb9856363b51a1918fbx'
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='Object_4'>
                  <primitive object={nodes._rootJoint} />
                  <group
                    name='Object_6'
                    position={[-0.01, -0.1, 0.22]}
                    scale={1.3}
                  />
                  <skinnedMesh
                    name='Object_7'
                    geometry={nodes.Object_7.geometry}
                    material={materials.cu_cat2_mt}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/cat/scene.gltf');

export default Cat;
