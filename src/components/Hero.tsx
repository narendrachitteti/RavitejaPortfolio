import React from 'react';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
       <br/>
       <br/>
       <br/>
       <br/>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fadeInUp animation-delay-200">
            Hi, I'm <span className="text-blue-600">PMV Raviteja</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 animate-fadeInUp animation-delay-400">
            AWS Certified DevOps Engineer
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-600">
            3+ years of experience in cloud infrastructure automation, CI/CD pipelines, containerization, and AWS services. 
            Building secure, scalable, and cost-effective infrastructure solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeInUp animation-delay-800">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span>Andhra Pradesh, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={16} />
              <span>(+91) 93983 57445</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={16} />
              <span>ravitejapmv79@gmail.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-1000">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More About Me
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-600 animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;