import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#ebeef1] text-gray-800 py-20">
      <div>
        <h2 className="text-center mb-10 text-3xl font-bold">About Me</h2>
      </div>
      <div className="container mx-auto px-6 text-center md:text-left max-w-6xl md:flex md:space-x-10">
        {/* Brief Introduction */}
        <div className="neumorphism-container p-6 rounded-lg mb-8 md:h-60 md:w-96 hover:shadow-2xl  hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            Hi, I’m Ravi Jangir, a passionate web developer with expertise in creating modern, responsive, and user-friendly websites using React and Tailwind CSS.
          </p>
        </div>

        {/* Skills & Expertise */}
        <div className="neumorphism-container p-6 rounded-lg mb-8 md:h-60 md:w-96 hover:shadow-2xl  hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Skills & Expertise</h3>
          <p className="text-lg text-gray-600">
            I specialize in front-end development using React, Tailwind CSS, TypeScript, and have experience in Neumorphism design.
          </p>
        </div>

        {/* Experience & Projects */}
        <div className="neumorphism-container p-6 rounded-lg mb-8 md:h-60 md:w-96 hover:shadow-2xl  hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Experience & Projects</h3>
          <p className="text-lg text-gray-600">
            Over the past 2 months, I’ve worked on several projects including E-commerce website.
          </p>
        </div>
      </div>



      <div className="container mx-auto px-6 text-center md:text-left max-w-6xl md:flex md:space-x-10">
        {/* Education & Certifications */}
        <div className="neumorphism-container p-6 rounded-lg mb-8 md:h-60 md:w-96 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Education & Certifications</h3>
          <p className="text-lg text-gray-600">
            I hold a Bachelor Of Computer Application from University Of Engineering And Management Jaipur.
          </p>
        </div>

        {/* Passions & Hobbies */}
        <div className="neumorphism-container p-6 rounded-lg mb-8 md:h-60 md:w-96 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Passions & Hobbies</h3>
          <p className="text-lg text-gray-600">
            Outside of development, I enjoy hobbies, such as traveling, playing cricket, or gaming.
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="neumorphism-container p-6 rounded-lg md:h-60 md:w-96 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Let's Connect</h3>
          <p className="text-lg text-gray-600 mb-10">
            Feel free to check out my projects or get in touch for collaborations.
          </p>
          <a
            href="#contact"
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-neumorphism hover:bg-green-400 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
