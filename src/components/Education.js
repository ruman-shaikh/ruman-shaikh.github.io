import React from "react";
import { education } from "../data";
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function Education() {
  return (
    <section id="education" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col w-full mb-20">
        <div className="text-center">  {/* This div centers its children horizontally */}
          <AcademicCapIcon className="w-10 inline-block mb-4" />
        </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
            Education
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {education.map((edu, idx) => (
            <div key={idx} className="p-4 lg:w-1/2 md:w-full">
              <div className="h-full bg-gray-800 p-8 rounded-lg">
                <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-3">
                  {edu.school}
                </h2>
                <h3 className="text-sm sm:text-base text-green-400 mb-1">{edu.degree} in {edu.field}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-3">{edu.startDate} - {edu.endDate}</p>
                <ul className="list-disc ml-5 text-left text-xs sm:text-sm text-gray-400">
                  {edu.description.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
