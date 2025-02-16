'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className='h-screen py-12 bg-gray-100 dark:bg-gray-900 text-center'>
            <h1 className='text-4xl font-bold text-gray-800 dark:text-white mb-4 self-center'>Connect with me</h1>
            <div className='flex items-center'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-6'>
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'
                    >
                        <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-4'>Get in Touch</h2>
                        <p className='text-gray-600 dark:text-gray-300 mb-6'>I’m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!</p>
                        <div className='space-y-4'>
                            <div className='flex items-center space-x-4'>
                                <FaEnvelope className='text-xl text-blue-500' />
                                <p className='text-lg text-gray-700 dark:text-white'>example@email.com</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <FaPhone className='text-xl text-green-500' />
                                <p className='text-lg text-gray-700 dark:text-white'>+123 456 7890</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <FaMapMarkerAlt className='text-xl text-red-500' />
                                <p className='text-lg text-gray-700 dark:text-white'>City, Country</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'
                    >
                        <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-4'>Send a Message</h2>
                        <form className='space-y-4'>
                            <div>
                                <label className='block text-gray-700 dark:text-gray-300'>Name</label>
                                <input type='text' className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Name' />
                            </div>
                            <div>
                                <label className='block text-gray-700 dark:text-gray-300'>Email</label>
                                <input type='email' className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Email' />
                            </div>
                            <div>
                                <label className='block text-gray-700 dark:text-gray-300'>Message</label>
                                <textarea className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' rows='4' placeholder='Your Message'></textarea>
                            </div>
                            <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition'>Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
