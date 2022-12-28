import { Vector3 } from "three";
import { useSpring } from "@react-spring/three";
import { Html } from "@react-three/drei";

export default function Content({ open }) {
  const springs = useSpring({
    position: open ? new Vector3(0, 2.66, -0.89) : new Vector3(0, 0.12, 3.39),
  });

  return (
    <>
      <Html
        transform
        occlude
        distanceFactor={3}
        position={[0, 2.66, -0.89]}
        rotation-x={-0.43}

      >
        <iframe
          className="h-[750px] w-[1130px] rounded-2xl border-none bg-black"
          src="https://folio2023-gabrielpedroza.vercel.app/static"
        />
      </Html>
    </>
  );
}
