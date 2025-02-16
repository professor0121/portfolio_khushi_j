'use client'

import React, { useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

function Hero() {
    const numParticles = 500; // Increased number of particles
    const particleTypes = ['circle', 'square', 'triangle'];

    const particles = Array.from({ length: numParticles }, (_, i) => {
        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const speed = Math.random() * 5 + 2;
        const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];

        return (
            <div
                key={i}
                className={`particle ${type}`}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${x}%`,
                    top: `${y}%`,
                    animationDuration: `${speed}s`,
                }}
            ></div>
        );
    });

    useEffect(() => {
        let style = '';
        for (let i = 1; i <= numParticles; i++) {
            style += `.particle:nth-child(${i}) {
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${i * 0.02}s; // Adjust delay as needed
            }\n`;
        }

        const styleElement = document.createElement('style');
        styleElement.textContent = style;
        document.head.appendChild(styleElement);

        return () => {
            document.head.removeChild(styleElement); // Clean up on unmount
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="hero-container">
            <div className="navbar-placeholder">
                {/* Replace with your actual navbar component: <Navbar /> */}
            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    Hi, I am <span>Khushi Jain</span>
                </h1>
                <p className="hero-description">
                    I am a frontend web developer passionate about creating responsive,
                    pixel-perfect designs and interactive user experiences. Eager to
                    learn and grow, I focus on clean, maintainable code.
                </p>
                <div className="hero-icons">
                    <a href="#!"><FaInstagram size={24} /></a>
                    <a href="#!"><FaTwitter size={24} /></a>
                    <a href="#!"><FaLinkedin size={24} /></a>
                    <a href="#!"><FaWhatsapp size={24} /></a>
                </div>
            </div>

            {particles}
        </div>
    );
}

export default Hero;