import * as THREE from "three";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";

export default function Staging() {

    const pointLightRef = useRef<THREE.PointLight>(null!);
    useHelper(pointLightRef, THREE.PointLightHelper, 1, "hotpink")

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 13.5, 15]} castShadow intensity={1} ref={pointLightRef} />
    </>
  );
}
