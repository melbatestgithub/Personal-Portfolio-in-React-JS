// WorkSection.js

import React from 'react';
import portfolio from '../assets/portfolio.jpg';
import ItLanding from '../assets/download.png';
import gerami from '../assets/gerami.jpg';
import shop from '../assets/shop.png';
import Works from './Works';

const WorkSection = () => {
  return (
    <div name="work" className="w-full min-h-screen bg-[#112240] text-gray-300 p-4 shadow-md">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600">Work</p>
          <p className="py-6"> Check out some of my recent projects</p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Works
            title="IT Issue Tracking System"
            imageUrl={ItLanding}
            liveDemoUrl="https://it-portal-self.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub/LandingUpdate"
            className="custom-work-card"
          />
          <Works
            title="Google gemini chat API"
            imageUrl={gerami}
            liveDemoUrl="https://clone-gemini.vercel.app/"
            sourceCodeUrl="https://github.com/example/repo2"
            className="custom-work-card"
          />
          <Works
            title="Project Two"
            imageUrl={shop}
            liveDemoUrl="https://shop-ka2z7jih7-melakus-projects.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub/shoppingApp"
            className="custom-work-card"
          />
          <Works
            title="Project Two"
            imageUrl={portfolio}
            liveDemoUrl="https://example.com/live-demo3"
            sourceCodeUrl="https://github.com/example/repo3"
            className="custom-work-card"
          />
          <Works
            title="Project Two"
            imageUrl={portfolio}
            liveDemoUrl="https://example.com/live-demo3"
            sourceCodeUrl="https://github.com/example/repo3"
            className="custom-work-card"
          />
          <Works
            title="Project Two"
            imageUrl={portfolio}
            liveDemoUrl="https://example.com/live-demo3"
            sourceCodeUrl="https://github.com/example/repo3"
            className="custom-work-card"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
