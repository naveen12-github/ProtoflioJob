import React from "react";
import mernImage from "../images/mern.jpeg";
import javaImage from "../images/java.jpeg";

const certificates = [
  { title: " Mern Fullstack developer", image:  mernImage , link: "https://your-react-cert-link.com" },
  { title: "Java Fullstack developer", image: javaImage , link: "https://your-frontend-cert-link.com" },

];

const Certificates = () => {
  return (
    <section  id="certificates" className="min-h-screen px-6 py-12 bg-[#0B1120] text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">
          My <span className="text-blue-400">Certificates</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {certificates.map((certificate, index) => (
            <a
              key={index}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141c2f] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-600 block"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="rounded-lg w-full h-40 object-cover"
              />
              <h2 className="text-xl font-semibold mt-4">{certificate.title}</h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
