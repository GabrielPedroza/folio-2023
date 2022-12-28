import { type NextPage } from "next";
import Experience from "../components/Experience";
import { Global, css } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <>
      <Global
        styles={css`
        html,
          body,
          #__next {
            height: 100%; 
            width: 100%;
            overflow: hidden;
            position: fixed;
            top: 0;
            left: 0;

        `}
      />
      <Experience />
    </>
  );
};

export default Home;
