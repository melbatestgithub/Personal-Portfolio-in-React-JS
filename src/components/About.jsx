import React from "react";
import linkedinProfile from "../assets/myProfile.jpg";
import "./style.css"; // Import your custom styles here

const About = () => {
  return (
    <div  id="about"  className=" flex flex-col md:flex-row  bg-[#112240] text-gray-300 transition duration-300 ease-in-out delay-150  ">
      {/* Left Section (Profile Image and Introduction) */}
      <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-12 h-1 bg-cyan-600 mb-4"></div>
          <p className="text-lg text-center">
            I am a seasoned Full Stack Developer over 2+ Years of experience in
            designing, developing, and maintaining web applications. Equipped with
            a strong foundation in both front-end and back-end technologies, adept at
            collaborating with cross-functional teams to deliver innovative solutions
            that meet business objectives. Seeking to leverage my expertise to
            contribute effectively to a dynamic development team and drive
            continuous improvement in the software development process.
          </p>
        </div>
        <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
          <img
            src={linkedinProfile}
            alt="Profile Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Section (Additional Details) */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-4">Personal Details</h3>
          <div className="w-12 h-1 bg-cyan-600 mb-4"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <p className="font-bold w-24">Name:</p>
            <p>Melaku Zeleke</p>
          </div>
          <div className="flex items-center">
            <p className="font-bold w-24">Email:</p>
            <p>melakuzeleke443@gmail.com</p>
          </div>
          <div className="flex items-center">
            <p className="font-bold w-24">Github:</p>
            <p>https://github.com/melbatestgithub</p>
          </div>
          <div className="flex items-center">
            <p className="font-bold w-24">Degree:</p>
            <p>Bachelor In Computer Science</p>
          </div>
          <div className="flex items-center">
            <p className="font-bold w-24">Country:</p>
            <p>Ethiopia</p>
          </div>
          <div className="flex items-center">
            <p className="font-bold w-24">City:</p>
            <p>Addis Abeba</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
