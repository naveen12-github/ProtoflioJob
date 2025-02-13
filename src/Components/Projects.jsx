import React from "react";
import sky from "../images/sky.png";
import bulkmail from "../images/bulk.png";
import actodo from "../images/actodo.png";
import weather from "../images/weather.png";

const projects = [
  { title: "Sky Lark E-Commerce", image: sky, link: "https://ecommerce-frontend-omega-nine.vercel.app/" },
  { title: "BulkMail", image: bulkmail, link: "https://frontend-f4ll.vercel.app/" },
  { title: "AcToDo", image: actodo, link: "https://actodo-lac-six.vercel.app/" },
  { title: "Weather App", image: weather, link: "https://weather-app-sage-ten-49.vercel.app/" }
];

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-[#0B1120] text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">
          My <span className="text-blue-400">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141c2f] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-600 block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-40 object-cover"
              />
              <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
