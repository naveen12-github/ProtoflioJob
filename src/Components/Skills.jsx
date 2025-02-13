import React from "react";

// Import images properly
import kn1 from "../images/kn1.png";
import kn2 from "../images/kn2.png";
import kn7 from "../images/kn7.png";
import kn3 from "../images/kn3.png";
import kn4 from "../images/kn4.png";
import kn5 from "../images/kn5.png";
import express from "../images/express.png";
import sql from "../images/mysql.png";
import kn6 from "../images/kn6.png";
import java from "../images/java.png";


const skills = [
  { name: "HTML", icon: kn1 },
  { name: "CSS", icon: kn2 },
  { name: "TailwindCss", icon: kn7 },
  { name: "JavaScript", icon: kn3 },
  { name: "React JS", icon: kn4 },
  { name: "Node JS", icon: kn5 },
  { name: "Express JS", icon: express },
  { name: "SQL", icon: sql },
  { name: "MongoDB", icon: kn6 },
  { name: "java", icon: java },
];

const Skills = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-[#0B1120] text-white">
      <div className="container mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center">
          Technical <span className="text-blue-400">Skills</span>
        </h1>,

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#141c2f] flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-600"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
