import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Icons for the demo and source code links
import portfolio from '../assets/portfolio.jpg';
import ItLanding from '../assets/download.png';
import gerami from '../assets/gerami.jpg';
import shop from '../assets/shop.png';
import restaurant from '../assets/restaurant.png';
import backtest from '../assets/backtest.jpg';
import integram from '../assets/integram.jpg';
import garden from '../assets/garden.jpg';
import bookRenting from '../assets/bookRenting.png';
import image from '../assets/image.png';
import elearning from '../assets/elearning.jpg';
import Works from './Works';
import balemuya from '../assets/balemuya_vid.mp4';

const WorkSection = () => {
  return (
    <div id="work" className="w-full min-h-screen bg-[#0a192f] text-gray-300 p-8 shadow-md">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600">Work</p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* Video Section */}
        <div className="mb-8">
          <p className="text-xl text-white font-semibold mb-4">Admin Panel for Hello Balemuya Mobile App</p>
          <video controls className="w-full h-auto rounded-lg shadow-lg">
            <source src={balemuya} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Projects Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Works
            title="IT Issue Tracking System"
            imageUrl={ItLanding}
            liveDemoUrl="https://it-portal-self.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub/LandingUpdate"
          />
          <Works
            title="Google Gemini Chat API"
            imageUrl={gerami}
            liveDemoUrl="https://clone-gemini.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub/gemini-api"
          />
          <Works
            title="Book Renting App"
            imageUrl={bookRenting}
            liveDemoUrl="https://book-renting.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub/book_renting"
          />
          <Works
            title="E-commerce Platform with Stripe Payment"
            imageUrl={shop}
            liveDemoUrl="https://shopping-app-six-amber.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub/shoppingApp"
          />
          <Works
            title="The Garden Platform"
            imageUrl={garden}
            liveDemoUrl="https://thegarden.gg/"
            sourceCodeUrl="https://github.com/melbatestgithub/"
          />
          <Works
            title="Mobile-friendly Backtesting Tool"
            imageUrl={backtest}
            liveDemoUrl="https://optionscrack.in/"
            sourceCodeUrl="https://github.com/melbatestgithub"
          />
          <Works
            title="Integram Chatting App"
            imageUrl={integram}
            liveDemoUrl="https://tgig.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub"
          />
          <Works
            title="ETSY Landing Page"
            imageUrl={image}
            liveDemoUrl="https://etsy-landing-page.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub/Etsy_landing_page"
          />
          <Works
            title="E-learning Platform"
            imageUrl={elearning}
            liveDemoUrl="https://e-learning-user.vercel.app/"
            sourceCodeUrl="https://github.com/melbatestgithub/E_Learning_Platform"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
