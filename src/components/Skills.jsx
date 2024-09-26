import React from 'react';
import { FaAws, FaCss3Alt, FaGithub, FaHtml5, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiMysql, SiPostgresql,SiLaravel } from 'react-icons/si';

const skills = [
  { name: 'AWS', icon: <FaAws className="w-16 h-16 text-yellow-400" /> },
  { name: 'GitHub', icon: <FaGithub className="w-16 h-16 text-gray-500" /> },
  { name: 'React', icon: <FaReact className="w-16 h-16 text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-16 h-16 text-green-500" /> },
  { name: 'Laravel', icon: <SiLaravel className="w-16 h-16 text-green-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-16 h-16 text-teal-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-16 h-16 text-green-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-16 h-16 text-white" /> },
  { name: 'MySQL', icon: <SiMysql className="w-16 h-16 text-blue-600" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-16 h-16 text-blue-500" /> },
 
];

const Skills = () => {
  return (
    <div id='skill' className="w-full min-h-screen bg-[#00072D] text-gray-300">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full py-8">
        <div className="text-center pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600">My Skills</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md hover:scale-110 transition-transform duration-300 p-6 rounded-lg bg-[#112240]"
            >
              <div className="flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <p className="mt-2 font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
