'use client';

import { motion } from 'framer-motion';

const projects = [
  { title: 'Portfolio Website', description: 'A modern portfolio built with Next.js and Tailwind CSS.', link: '#' },
  { title: 'E-commerce Store', description: 'An online store using React, Node.js, and MongoDB.', link: '#' },
  { title: 'Blog Platform', description: 'A full-featured blog platform with a CMS.', link: '#' },
  { title: 'Task Manager', description: 'A task management app with drag-and-drop features.', link: '#' },
  { title: 'Chat Application', description: 'A real-time chat app using WebSockets.', link: '#' },
  { title: 'Weather App', description: 'A weather forecasting app using an API.', link: '#' },
  { title: 'Finance Tracker', description: 'An expense and income tracker with charts.', link: '#' },
  { title: 'Fitness App', description: 'A workout planner with progress tracking.', link: '#' },
  { title: 'Landing Page', description: 'A high-converting landing page for businesses.', link: '#' }
];

const Projects = () => {
  return (
    <section className='h-screen py-12 bg-gray-100 dark:bg-gray-900'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-8'>My Projects</h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }}
              className='p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl'
            >
              <h3 className='text-xl font-semibold text-gray-700 dark:text-white'>{project.title}</h3>
              <p className='mt-2 text-gray-600 dark:text-gray-300'>{project.description}</p>
              <a href={project.link} className='mt-4 inline-block text-blue-500 hover:underline'>View Project</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;