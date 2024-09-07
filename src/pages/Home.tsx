import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="bg-[#ebeef1] h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Photo */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className=" rounded-full p-4">
            <img
              className="rounded-full w-64 h-64 object-cover neumorphism-container"
              src="https://maanox.krishanmaan.com/assets/ravi.png" // Replace with your photo URL
              alt="Your Photo"
            />
          </div>
        </div>

        {/* Right Side: Profession */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="neumorphism-container p-6 rounded-lg mx-5 md:mx-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-700">Hi, I'm Ravi Jangir</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              I’m a Web Developer with a passion for creating impactful and engaging digital experiences.
            </p>
            <a
              href="/path-to-your-resume.pdf" // Replace with your resume URL
              download
              className="inline-block px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-neumorphism hover:bg-gray-300 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
