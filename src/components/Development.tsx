import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Development() {
    return <>
        <OrbitControls makeDefault />
        <Perf position="top-left"/>
    </>
}
