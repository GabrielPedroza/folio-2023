import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const StaticSite = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col justify-center bg-gradient-to-tr from-yellow-200 via-pink-200 to-pink-400">
        <MainContent />
        <SocialLinks />
      </div>
    </>
  );
};

const AboutMe = () => {
  return (
    <div className="rounded-m -mx-5 mb-10 mt-[11rem] p-5">
      <h2 className="mb-5 text-center text-4xl font-bold">About Me</h2>
      <p className="mb-5 w-[45ch] text-lg leading-loose">
        Hey, I&apos;m Gabe, a Software Engineer based in 🏝️ Miami! I initally
        started my career as a <b>3D Frontend Engineer</b> and have since
        pivoted to being a <b>Fullstack Engineer</b> with a focus in React and
        TypeScript. I am completely <b>self-taught</b> and currently majoring in
        Computer Science at <i>Florida International University</i>. I am very
        involved in my university. I am a former <b>Web Dev Lead</b> that led 15
        engineers to create a Fullstack Web Application in 9 weeks. I am also a
        former <b>committee</b> member for the CS Club with a focus on helping
        students fix their resumes and prepare for interviews. Feel free to
        connect to me! My links are below :)
      </p>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="mb-5 flex flex-col justify-center">
      <h2 className="mb-4 self-center text-2xl font-bold">Connect with me</h2>
      <div className="self-center">
        <div className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl">
          <a
            href="https://github.com/GabrielPedroza"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <FaGithub size={32} className="text-gray-800 hover:text-gray-600" />
          </a>
        </div>
        <div className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl">
          <a
            href="https://www.linkedin.com/in/gabrielpedroza/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <FaLinkedin
              size={32}
              className="text-gray-800 hover:text-gray-600"
            />
          </a>
        </div>
        <div className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl">
          <a
            href="https://twitter.com/gpaebdez"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <FaTwitter
              size={32}
              className="text-gray-800 hover:text-gray-600"
            />
          </a>
        </div>
        <div className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl">
          <a
            href="mailto:theegabrielpedroza@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <FaEnvelope
              size={32}
              className="text-gray-800 hover:text-gray-600"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => (
  <main className="container mx-auto flex justify-between self-center py-10 ml-15">
    <div>
      <h1 className="mb-5 text-7xl font-bold whitespace-nowrap">Gabriel Pedroza</h1>
      <p className="mb-[4rem] text-4xl text-gray-700">
        Fullstack Software Engineer
      </p>
      <ul>
        <li className="mb-5">
          <h2 className="text-2xl font-bold">CodeClash</h2>
          <p className="mb-2 w-[45ch] text-gray-700">
            A competitive coding platform for developers to showcase their
            skills and learn from each other all while enhancing their technical
            interview abilities
          </p>
          <hr className="my-4 w-[150px] border-black" />
          <p className="text-black-700 mb-2 w-[45ch]">
            Next.js, Next-auth, React, TypeScript, PostgreSQL, TailwindCSS,
            Nginx, Web Sockets, Docker, Prisma, Python, CentOS
          </p>
          <a
            href="https://web-dev-ii-frontend.vercel.app/"
            className="inline-block rounded-full bg-gray-800 px-4 py-2 text-white"
          >
            View Project
          </a>
        </li>
        <li className="mb-5">
          <h2 className="text-2xl font-bold">E-Commerce</h2>
          <p className="mb-2 w-[45ch] text-gray-700">
            A fullstack application that allows users to buy products and track
            all their items with a cart. Implemented Stripe API for purchases.{" "}
          </p>
          <hr className="my-4 w-[150px] border-black" />
          <p className="text-black-700 mb-2 w-[45ch]">
            Next.js, React, JavaScript/TypeScript, SASS, Sanity CMS, Stripe API,
            Context API (State), helper libraries
          </p>
          <a
            href="https://e-commerce-gamma-beryl.vercel.app/"
            className="inline-block rounded-full bg-gray-800 px-4 py-2 text-white"
          >
            View Project
          </a>
        </li>
      </ul>
    </div>
    <AboutMe />
  </main>
);

export default StaticSite;
