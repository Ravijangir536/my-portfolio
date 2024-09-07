import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#ebeef1] text-gray-800 py-20">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <form className="max-w-lg mx-10 md:mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="required neumorphism-container border rounded w-full py-2 px-3" type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="required neumorphism-container border rounded w-full py-2 px-3" type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="required neumorphism-container border rounded w-full py-2 px-3" id="message" placeholder="Your Message"></textarea>
          </div>
          <button className="shadow-neumorphism font-semibold text-black bg-gray-200 py-2 px-8 rounded mt-10 hover:bg-gray-300">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
