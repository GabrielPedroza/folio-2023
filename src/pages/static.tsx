import React from "react";

const StaticSite = () => {
  return (
    <div>
      <MainContent />
    </div>
  );
};

const MainContent = () => (
  <main className="container mx-auto py-10">
    <h1 className="mb-5 text-3xl font-bold">Gabriel Pedroza</h1>
    <p className="mb-8 text-gray-700">
      FullStack Software Engineer
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
  </main>
);

export default StaticSite;
