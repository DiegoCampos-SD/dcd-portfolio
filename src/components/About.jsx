import React from "react";

export const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-60 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Diego.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I consider myself a creative person, passionate about the new and
            the unknown, a person who loves challenges and is constantly
            challenged. I believe that you always learn from other people and/or
            situations that happen on a daily basis and of course always try to
            share my acquired knowledge to solve the impediments that are
            presented to a colleague or the team.
          </p>
          {/*
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded text-lg"
            >
              Work With Me
            </a>
          </div>
  */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding2.svg"
          />
        </div>
      </div>
    </section>
  );
};
