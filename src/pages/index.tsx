import type { NextPage } from "next";
import Head from "next/head";
import Experience from "../components/Experience";
import { Global, css } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gabe&apos;s Folio :)</title>
        <meta name="description" content="Gabriel Pedroza's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global
        styles={css`
          html,
          body,
          #__next {
            height: 100%;
            width: 100%;
            overflow: hidden;
            overflow-y: hidden;a
            position: fixed;
            top: 0;
            left: 0;
          }
        `}
      />
      <Experience />
    </>
  );
};

export default Home;
