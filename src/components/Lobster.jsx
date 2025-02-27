/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/Lobster.glb -o src/components/Lobster.jsx -k -K -r public 
*/

import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Lobster(props) {
  const meshRef = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]); // Initialize rotation state

  useFrame(() => {
    if (meshRef.current) {
      setRotation((prev) => [prev[0] + 0.005, prev[1] + 0.02, prev[2] + 0.015]);
    }
  });

  const { nodes, materials } = useGLTF('/models/Lobster.glb')
  return (
    <group {...props} dispose={null}>
      <group ref={meshRef} rotation={rotation}>
        <mesh name="Lobster_mesh" geometry={nodes.Lobster_mesh.geometry} material={materials.Lobster_Mat} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Lobster.glb')
