import React from 'react';

function About() {
  return (
    <section className="flex flex-col lg:flex-row h-screen gap-10 px-6 py-12 lg:px-20 lg:py-24 bg-black text-white">
      {/* Profile Image */}
      <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg border-4 border-gray-700">
        <img 
          src="/path/to/your/image.jpg" 
          alt="Akshit Thakur" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="text-start lg:text-left max-w-2xl">
        <h1 className="text-3xl font-bold">
          Hi There! I'm <span className="text-blue-400">Akshit Thakur</span>
        </h1>
        <p className="mt-4 text-gray-300 leading-relaxed">
          I am a Visual Designer with a strong focus on digital branding. Visual design 
          seeks to attract, inspire, create desires, and motivate people to respond to 
          messages, with a view to making a favorable impact.
        </p>

        {/* Info Section */}
        <div className="mt-6 space-y-2 text-gray-300">
          <p><strong className="text-white">Birthday:</strong> Oct 16, 2004</p>
          <p><strong className="text-white">Phone:</strong> +91 9691111098</p>
          <p><strong className="text-white">Email:</strong> akshitthakur371@gmail.com</p>
          <p><strong className="text-white">Language:</strong> Hindi, English</p>
        </div>

        {/* Download CV Button */}
        <button className="mt-6 px-6 py-3 bg-blue-500 text-black font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300">
          Download CV
        </button>
      </div>
    </section>
  );
}

export default About;
