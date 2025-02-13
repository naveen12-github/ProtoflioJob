import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Typical from "react-typical";
import profileImage from "../images/naveen1.png";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
};

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b1120] px-6 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-white mt-6">
          <motion.h2
            className="text-lg font-light"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Hello, I am
          </motion.h2>

          <motion.h1
            className="text-5xl font-bold mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A.<span className="text-blue-400">Naveen</span>
          </motion.h1>

          <motion.h2
            className="text-4xl font-semibold mt-4"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.7 }}
          >
            I'm a{' '}
            <span className="text-blue-400">
              <Typical
                steps={["Full Stack Developer", 2000, "MERN Stack Developer", 2000, "Content Creator", 2000]}
                loop={Infinity}
                wrapper="span"
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-6 text-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1 }}
          >
            Transforming Ideas into Functional Web Solutions: Bridging Creativity and Full-Stack Excellence
          </motion.p>

          {/* Social Media Icons */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-8 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <a href="https://www.linkedin.com/in/a-naveen-b1ab62274/" className="text-white hover:text-blue-400 text-2xl transition-transform duration-500 hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://github.com/naveen12-github" className="text-white hover:text-gray-300 text-2xl transition-transform duration-500 hover:scale-110">
              <FaGithub />
            </a>
            <a href="naveencse4321@gmail.com" className="text-white hover:text-red-400 text-2xl transition-transform duration-500 hover:scale-110">
              <FaEnvelope />
            </a>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a
              href="/NaveenM.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center justify-center w-60 mx-auto lg:mx-0 shadow-lg transition-transform duration-500 hover:scale-110"
            >
              Download Resume <span className="ml-2">&#x1F4E5;</span>
            </a>
          </motion.div>
        </div>

        {/* Right Section - Profile Image with Neon Effect */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="relative rounded-full overflow-hidden w-96 h-96 lg:w-[25rem] lg:h-[25rem] flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            {/* Enhanced Neon Circle Effect */}
            <div className="absolute inset-0 rounded-full border-[6px] border-transparent animate-pulse">
              <div className="absolute inset-0 rounded-full border-[10px] border-blue-400 opacity-70 blur-lg"></div>
              <div className="absolute inset-0 rounded-full border-[8px] border-blue-600 blur-2xl animate-pulse"></div>
            </div>

            {/* Profile Image */}
            <img
              src={profileImage}
              alt="naveen"
              className="w-full h-full object-cover object-center rounded-full shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
