import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section  id="about" className="min-h-screen px-6 py-1 bg-[#0B1120] flex items-center">
      <div className="container mx-auto">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white">About </span>
          <span className="text-blue-400">Me</span>
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hello! I’m <span className="font-semibold text-blue-400">A. Naveen</span>, a dedicated <span className="text-white">Full Stack Developer</span> with experience in <span className="text-blue-400">MERN Stack, React.js, JavaScript, Tailwind CSS, and MongoDB</span>. I have built and managed various web applications, including e-commerce platforms, blog sites, and weather applications, ensuring performance and responsiveness across all devices.
          <br />
          <br />
          My passion lies in transforming ideas into scalable and user-friendly digital solutions. I’m constantly improving my skills in <span className="text-white">JavaScript, backend integration, and mobile app development</span>, and I have a keen interest in creating efficient, high-performance code.
          <br />
          <br />
          Beyond coding, I enjoy <span className="text-white">exploring new technologies</span>, contributing to open-source projects, and working on content creation to help others in their learning journey. I’m also on a mission to create educational content for my <span className="text-blue-400">90-day JavaScript learning challenge</span> on social media.
          <br />
          <br />
          I’m always looking to grow as a developer and contribute to projects that make a difference in the tech world!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
