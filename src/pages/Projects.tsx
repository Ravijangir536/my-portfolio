import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'E-commerce Website',
      description: 'Description of Project 1.',
      imageUrl: 'https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg', // Replace with your project image URL
      projectUrl: '#'
    },
    {
      title: 'Crypto Coin Website',
      description: 'Description of Project 2.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfJ6TaQZ4SozXizNgd_l7hQ3Md_fbvym87g&s', // Replace with your project image URL
      projectUrl: '#'
    },
    {
      title: 'Color Prediction Website',
      description: 'Description of Project 1.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5hN61mcnMQdUY-9JhH96WabVY4AHsJ_h0w&s', // Replace with your project image URL
      projectUrl: '#'
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="bg-[#ebeef1] text-gray-800 py-20 flex items-center justify-center">
      <div className="container mx-6 text-center">
        <h2 className="text-3xl font-bold mb-12 ">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projectList.map((project, index) => (
            <a 
              href={project.projectUrl} 
              key={index} 
              className="max-w-sm w-full bg-[#ebeef1] neumorphism-container shadow-lg rounded-lg overflow-hidden hover:shadow-2xl  hover:-translate-y-1 transition-all duration-300"
            >
              <img 
                className="w-full h-48 object-cover" 
                src={project.imageUrl} 
                alt={project.title} 
              />
              <div className="p-6 neumorphism-container">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <button className="text-blue-600 font-bold">Learn More</button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
