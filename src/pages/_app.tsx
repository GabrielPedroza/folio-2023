import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Canvas } from "@react-three/fiber";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Canvas shadows camera={{ position: [0, 3, -23], fov: 30 }}>
        <Component {...pageProps} />
      </Canvas>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
