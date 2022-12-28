import { useSpring } from "@react-spring/core";
import {
  ContactShadows,
  Environment,
  PresentationControls,
  Cloud,
  Sky
} from "@react-three/drei";
import { Suspense, useState } from "react";
import Development from "../components/Development";
import Model from "../components/Laptop";
import Floor from "./Floor";
import Staging from "./Staging";
import { softShadows, Sparkles } from "@react-three/drei";
import * as THREE from "three";

softShadows({
  frustum: 3.75,
  size: 0.005,
  near: 9.5,
  samples: 17,
  rings: 11,
});

export default function Experience() {
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });

  // const backgroundColor = props.open.to([0, 1], ["#blue", "#whitesmoke"]);
  return (
    <>
      {/* <Development /> */}
      <Sky />
      <Suspense fallback={null}>
        <group
          rotation={[0, Math.PI, 0]}
          onClick={(e) => (
            e.stopPropagation(), setOpen((open) => (open = true))
          )}
        >
          <Cloud depth={1.5}/>
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
        <Environment preset="city" />
      </Suspense>
      <ContactShadows
        position={[0, -3.5, 0]}
        opacity={0.4}
        scale={20}
        blur={1.75}
        far={4.5}
      />
    </>
  );
}
