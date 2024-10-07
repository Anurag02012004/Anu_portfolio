// client/src/pages/Home.js
import React from 'react';
import { AnuGithub, AnuLinkedin, AnuEnvelop } from 'react-icons/fa';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white p-8 rounded-lg backdrop-blur-md bg-white bg-opacity-10 shadow-xl">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">I'm a Full Stack Developer specializing in the MERN stack.</p>
        {/* <div className="space-x-4">
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
            View Projects
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition duration-300">
            Contact Me
          </button>
        </div> */}
        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-indigo-200 transition duration-300">
            <AnuGithub size={24} />
          </a>
          <a href="#" className="text-white hover:text-indigo-200 transition duration-300">
            <AnuLinkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-indigo-200 transition duration-300">
            <AnuEnvelop size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
