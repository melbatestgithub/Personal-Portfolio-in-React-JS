// WorkSection.js

import React from 'react';
import portfolio from '../assets/portfolio.jpg';
import ItLanding from '../assets/download.png';
import gerami from '../assets/gerami.jpg';
import shop from '../assets/shop.png';
import restaurant from '../assets/restaurant.png';
import backtest from '../assets/backtest.jpg';
import integram from '../assets/integram.jpg';
import garden from '../assets/garden.jpg';
import Works from './Works';

const WorkSection = () => {
  return (
    <div id="work"  className="w-full min-h-screen bg-[#112240] text-gray-300 p-4 shadow-md">
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
            sourceCodeUrl="https://github.com/melbatestgithub/gemini-api"
            className="custom-work-card"
          />
          <Works
            title="Eccomerce platform with stripe payment"
            imageUrl={shop}
            liveDemoUrl="https://shopping-app-six-amber.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub/shoppingApp"
            className="custom-work-card"
          />
          <Works
            title=" The Garden Platform"
            imageUrl={garden}
            liveDemoUrl="https://thegarden.gg/"
            sourceCodeUrl="https://github.com/melbatestgithub/"
            className="custom-work-card"
          />
          <Works
            title="A mobile-friendly tool to backtest your discretionary options strategy"
            imageUrl={backtest}
            liveDemoUrl="https://optionscrack.in/"
            sourceCodeUrl="https://github.com/melbatestgithub"
            className="custom-work-card"
          />
          <Works
            title="Integram chatting app"
            imageUrl={integram}
            liveDemoUrl="https://tgig.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub"
            className="custom-work-card"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
