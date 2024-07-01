import React from "react";
import { workExperience } from "../data";

export default function WorkExperience() {
  return (
    <section id="work-experience" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Work Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {workExperience.map((experience, idx) => (
            <div key={idx} className="p-4 lg:w-1/2">
              <div className="h-full bg-gray-800 p-8 rounded">
                <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-5">
                  {experience.company}
                </h2>
                {experience.roles.map((role, roleIdx) => (
                  <div key={roleIdx} className="mb-6">
                    <h3 className="text-sm sm:text-base text-green-400 mb-1">{role.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">{role.startDate} - {role.endDate}</p>
                    <ul className="list-disc ml-5 text-left text-xs sm:text-sm text-gray-400">
                      {role.description.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
