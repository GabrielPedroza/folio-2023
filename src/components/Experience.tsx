import { useSpring } from "@react-spring/core";
import {
  ContactShadows,
  Environment,
  PresentationControls,
  Cloud,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import Model from "../components/Laptop";
import { Canvas } from "@react-three/fiber";
import Development from "./Development";

export default function Experience() {
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });

  return (
    <>
      <Canvas shadows camera={{ position: [0, 12, -22], fov: 30 }}>
        <color attach="background" args={["lightblue"]} />
        {/* <Development /> */}
        {/* <Sky sunPosition={[200, 1500, 200]}/> */}
        <Suspense fallback={null}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(true))}
          >
            <Cloud depth={1.5} />
            <PresentationControls
              enabled={open ? true : false}
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 3, tension: 1000 }}
              polar={[-Math.PI / 10, Math.PI / 25]} // vertical limits
              azimuth={[-Math.PI - 4, Math.PI + 5]} // horizontal limits
            >
              <Model
                open={open}
                hinge={props.open.to([0, 1], [1.575, -0.425])}
                position={[0, 4, 0]}
              />
            </PresentationControls>
          </group>
          <Suspense fallback={null}>
            <Cloud position={[-4, -2, 25]} speed={0.4} opacity={1} />
            <Cloud position={[7, -4, 20]} speed={0.4} opacity={0.5} /> 
            <Cloud position={[-14, -10, 22]} speed={0.3} opacity={0.75} />
            <Cloud position={[14, -4, 24]} speed={0.3} opacity={1} />
            <Cloud position={[25, -30, 34]} speed={0.4} opacity={1} />
          </Suspense>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </>
  );
}
