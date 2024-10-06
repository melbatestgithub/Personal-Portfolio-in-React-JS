import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import resumePdf from '../assets/Melaku_Zeleke_CV.pdf'; // Adjust the path to your resume file
import { Fade } from 'react-reveal'; // For adding animations

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] flex items-center relative overflow-hidden ">
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-800 opacity-30 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800 opacity-30 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>

      {/* Container */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-8 py-24 z-10">
        <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0">

          {/* Right Column (Text Content with fade effect) */}
          <div className="md:w-1/2 md:pl-12 pt-20">
            <Fade bottom>
              <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">
                Melaku Zeleke
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-6">
                Full Stack Developer
              </p>
              <p className="text-lg text-[#8892b0] mb-8 leading-relaxed">
                Hi there! I'm a passionate full-stack developer with experience in building modern web applications. My journey in software development has fueled my fascination with coding, enabling me to transform creative ideas into scalable solutions.
              </p>

              {/* Buttons with hover and arrow animation */}
              <div className="flex gap-4">
                <a href="#work">
                  <button className="text-white bg-sky-700 border-2 border-transparent px-6 py-3 flex items-center hover:bg-sky-600 transition duration-300 group">
                    View Work
                    <HiArrowNarrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </a>
                {/* Resume Download */}
                {/* <a
                  href={resumePdf}
                  download="Melaku_Zeleke_Resume.pdf"
                  className="text-white bg-sky-700 border-2 border-transparent px-6 py-3 flex items-center hover:bg-sky-600 transition duration-300"
                >
                  Download Resume
                </a> */}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
