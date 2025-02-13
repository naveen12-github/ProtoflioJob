import React from "react";
import { FaCode, FaVideo, FaPalette } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-5xl text-blue-400" />, 
    description:
      "As a web developer, I create dynamic and functional websites using a combination of front-end and back-end technologies. I specialize in building responsive, user-friendly interfaces that enhance the user experience. Whether it's an e-commerce site, a blog, or a custom web application, I bring ideas to life through code.",
  },
  {
    title: "Video Editing",
    icon: <FaVideo className="text-5xl text-blue-400" />, 
    description:
      "I specialize in video editing, creating engaging and high-quality videos for various platforms. From cutting and merging clips to adding effects, transitions, and color grading, I ensure that your content stands out and effectively communicates your message.",
  },
  {
    title: "UI & UX Designing",
    icon: <FaPalette className="text-5xl text-blue-400" />, 
    description:
      "UI & UX design is all about aesthetics and usability. As a UI & UX designer, I craft visually appealing layouts, choose color schemes, and create intuitive navigation. I pay attention to details like typography, spacing, and consistency to enhance the overall look and feel of your digital product.",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-[#0B1120] text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">
          My <span className="text-blue-400">Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#141c2f] p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-600"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
