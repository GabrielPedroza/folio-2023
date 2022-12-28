import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const StaticSite = () => {
  return (
    <>
      <div className="h-full w-full bg-gradient-to-tr from-yellow-200 via-pink-200 to-pink-400 flex justify-center flex-col">
        <MainContent />
        {/* <AboutMe /> */}
      <SocialLinks />
      </div>
    </>
  );
};

const AboutMe = () => {
  return (
    <div className="mb-10 rounded-m p-5">
      <h2 className="mb-5 text-2xl font-bold">About Me</h2>
      <p className="mb-5 text-lg leading-relaxed">
        Hi, my name is Gabriel and I am a fullstack software engineer with a
        passion for building web applications. I have experience working with a
        variety of technologies, including JavaScript, React, Node.js, and
        Express. In my spare time, I enjoy learning about new technologies and
        keeping up to date with industry trends.
      </p>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Skills</h3>
        <ul className="inline-flex">
          <li className="mr-2 animate-pulse font-bold">JavaScript</li>
          <li className="mr-2 animate-pulse font-bold">React</li>
          <li className="mr-2 animate-pulse font-bold">Node.js</li>
          <li className="mr-2 animate-pulse font-bold">Express</li>
        </ul>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="mb-5 flex flex-col justify-center">
      <h2 className="text-2xl font-bold self-center mb-4">Connect with me</h2>
      <div className="self-center">
        <div className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl">
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <FaGithub size={32} className="text-gray-800 hover:text-gray-600" />
          </a>
        </div>
        <div className="mx-2 inline-block transform rounded-full shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl">
          <a
            href="https://linkedin.com/in/yourhandle"
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
            href="https://linkedin.com/in/yourhandle"
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
            href="https://linkedin.com/in/yourhandle"
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
  <main className="container mx-auto py-10 self-center">
    <h1 className="mb-5 text-7xl font-bold">Gabriel Pedroza</h1>
    <p className="mb-8 text-4xl text-gray-700">
      Fullstack Software Engineer
    </p>
    <ul>
      <li className="mb-5">
        <h2 className="text-2xl font-bold">Project 1</h2>
        <p className="mb-2 text-gray-700">Description of Project 1</p>
        <a
          href="#"
          className="inline-block rounded-full bg-gray-800 px-4 py-2 text-white"
        >
          View Project
        </a>
      </li>
      <li className="mb-5">
        <h2 className="text-2xl font-bold">Project 2</h2>
        <p className="mb-2 text-gray-700">Description of Project 2</p>
        <a
          href="#"
          className="inline-block rounded-full bg-gray-800 px-4 py-2 text-white"
        >
          View Project
        </a>
      </li>
      <li className="mb-5">
        <h2 className="text-2xl font-bold">Project 3</h2>
        <p className="mb-2 text-gray-700">Description of Project 3</p>
        <a
          href="#"
          className="inline-block rounded-full bg-gray-800 px-4 py-2 text-white"
        >
          View Project
        </a>
      </li>
    </ul>
    <AboutMe />
  </main>
);

export default StaticSite;
