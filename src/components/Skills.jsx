import { CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";

import { skills } from "../data/data";

export const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-40 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills & Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.title} className="w-100 p-4">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img
                  title={skill.title}
                  className="ml-1 w-20 h-20 items-center"
                  src={skill.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
