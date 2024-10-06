import React from "react";
import linkedinProfile from "../assets/myProfile.jpg";
import { motion } from 'framer-motion'; // Import framer-motion for animations
import './style.css'; // Import your custom styles here

const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row bg-[#112240] text-gray-300 transition duration-300 ease-in-out">
      {/* Left Section (Profile Image and Introduction) */}
      <motion.div 
        className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 hover:text-cyan-600 transition duration-300">About Me</h2>
          <motion.div
            className="w-12 h-1 bg-cyan-600 mb-4"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
          ></motion.div>
          <p className="text-lg text-center">
            I am a seasoned Full Stack Developer with experience in designing, developing, and maintaining web applications. Equipped with a strong foundation in both front-end and back-end technologies, adept at collaborating with cross-functional teams to deliver innovative solutions that meet business objectives. Seeking to leverage my expertise to contribute effectively to a dynamic development team and drive continuous improvement in the software development process.
          </p>
        </motion.div>
        <motion.div
          className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            src={linkedinProfile}
            alt="Profile Photo"
            className="w-full h-full object-cover hover:opacity-90 transition duration-300"
          />
        </motion.div>
      </motion.div>

      {/* Right Section (Personal Details) */}
      <motion.div
        className="w-full md:w-1/2 p-8 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 hover:text-cyan-600 transition duration-300">Personal Details</h3>
          <motion.div
            className="w-12 h-1 bg-cyan-600 mb-4"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
          ></motion.div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {[
            { label: "Name:", value: "Melaku Zeleke" },
            { label: "Email:", value: "melakuzeleke443@gmail.com", link: true },
            { label: "Github:", value: "https://github.com/melbatestgithub", link: true },
            { label: "Degree:", value: "Bachelor In Computer Science" },
            { label: "Country:", value: "Ethiopia" },
            { label: "City:", value: "Addis Abeba" },
          ].map((detail, index) => (
            <motion.div
              className="flex items-center"
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 * index }}
            >
              <p className="font-bold w-24">{detail.label}</p>
              {detail.link ? (
                <a href={detail.value} className="hover:text-cyan-600 transition duration-300">
                  {detail.value}
                </a>
              ) : (
                <p>{detail.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
