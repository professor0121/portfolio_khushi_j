'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaWordpress, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTensorflow } from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: <FaReact className='text-blue-500' /> },
  { name: 'Next.js', icon: <FaReact className='text-gray-900' /> },
  { name: 'Node.js', icon: <FaNodeJs className='text-green-500' /> },
  { name: 'Python', icon: <FaPython className='text-yellow-500' /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-blue-400' /> },
  { name: 'MongoDB', icon: <SiMongodb className='text-green-700' /> },
  { name: 'WordPress', icon: <FaWordpress className='text-blue-600' /> },
  { name: 'TensorFlow', icon: <SiTensorflow className='text-orange-500' /> },
  { name: 'Database', icon: <FaDatabase className='text-gray-500' /> },
];

const Skills = () => {
  return (
    <section className='py-12 bg-gray-100 dark:bg-gray-900 h-screen'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-8'>My Skills</h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1 }}
              className='p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl flex flex-col items-center justify-center transition duration-300'
            >
              <div className='text-4xl'>{skill.icon}</div>
              <p className='mt-2 text-lg font-semibold text-gray-700 dark:text-white'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;