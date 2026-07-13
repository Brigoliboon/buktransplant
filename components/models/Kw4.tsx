"use client";

import { useGLTF } from "@react-three/drei";
import type { Mesh } from "three";

export default function Kw4(props: Record<string, unknown>) {
  const { nodes, materials } = useGLTF("/models/model/kw4.glb");

  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.geometry_0 as Mesh).geometry}
        material={materials.place_holder}
      />
    </group>
  );
}

useGLTF.preload("/models/model/kw4.glb");
