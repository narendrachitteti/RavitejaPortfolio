import React from 'react';
import { Award, Calendar, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Professional Summary</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                AWS Certified DevOps Engineer with 3 years of hands-on experience in designing and implementing 
                robust cloud infrastructure solutions. Passionate about automation, scalability, and building 
                secure, cost-effective systems that drive business growth.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Known for expertise in cloud infrastructure automation, CI/CD pipelines, containerization, 
                and AWS services. I thrive on solving complex technical challenges and continuously learning 
                new technologies to deliver innovative solutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Award className="text-blue-600" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">AWS Certified</div>
                    <div className="text-sm text-gray-600">DevOps Engineer</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="text-blue-600" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">3+ Years</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Location</div>
                    <div className="text-gray-600">Andhra Pradesh, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Phone</div>
                    <div className="text-gray-600">(+91) 9848098480</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-600">rajaraviboom@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-200">
                <h4 className="font-semibold text-gray-800 mb-3">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'DevOps', 'CI/CD', 'Kubernetes', 'Terraform', 'Docker'].map((skill) => (
                    <span key={skill} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
