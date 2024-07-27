import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profileImage from '../assets/profile.jpg'; // Assuming you have a profile image
import resumePdf from '../assets/Software Developer.pdf'; // Adjust the path to your resume file

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] flex items-center">
      {/* Container */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column (Profile Image and Introduction) */}
          {/* Right Column (Text Content) */}
          <div className="md:w-1/2 md:pl-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">
              Melaku Zeleke
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-6">
            Junior Software Developer
            </p>
            <p className="text-lg text-[#8892b0] mb-8">
              Hi there! I'm a passionate Software developer with experience
              in building web applications using modern technologies. My journey
              in software development began several years ago, and since then,
              I've been fascinated by the endless possibilities that coding
              offers.
            </p>
            <div className="flex gap-4" >
              <a href="#work">
              <button className="text-white bg-sky-700 border-2 border-transparent px-6 py-3 flex items-center hover:bg-sky-600 transition duration-300">
                View Work
                <HiArrowNarrowRight className="ml-2" />
              </button>
              </a>
              <a
                href={resumePdf}
                download="Melaku_Zeleke_Resume.pdf"
                className="text-white bg-sky-700 border-2 border-transparent px-6 py-3 flex items-center hover:bg-sky-600 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
