import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-text">
          <h1>Interactive Online Language Courses You’ll Love</h1>
          <p>
            Learn languages with authentic videos, story dialogues, grammar explanations, and more.
          </p>
          <button className="hero-btn">Try it for free</button>
          <p className="no-card">No credit card required</p>
        </div>

        {/* Right Video */}
        <div className="hero-video">
          <iframe
            src="https://player.vimeo.com/video/684680471?autoplay=1&loop=1&title=0&byline=0&portrait=0"
            title="FluentU Hero Video"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;

