import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import {
    Decal,
    useGLTF,
    useTexture
} from "@react-three/drei";



const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTecture = useTexture(snap.fullDecal);

  return (
    <div>
      
    </div>
  )
}

export default Shirt
