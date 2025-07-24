import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Mechanical Engineering",
      institution: "GMR Institute of Technology",
      duration: "2013 – 2017",
      grade: "CGPA: 7.9",
      type: "Undergraduate",
      description: "Strong foundation in engineering principles, problem-solving, and analytical thinking."
    },
    {
      degree: "Intermediate",
      institution: "Geethanjali Junior College",
      duration: "2011 – 2013",
      grade: "98.3%",
      type: "Higher Secondary",
      description: "Excellent academic performance with focus on mathematics and sciences."
    },
    {
      degree: "10th Grade",
      institution: "Akshara School",
      duration: "2010 – 2011",
      grade: "CGPA: 10",
      type: "Secondary",
      description: "Outstanding academic achievement with perfect score."
    }
  ];

  const certifications = [
    {
      name: "AWS Certified DevOps Engineer",
      issuer: "Amazon Web Services",
      status: "Professional Level",
      description: "Validates expertise in provisioning, operating, and managing AWS environments."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Academic Background</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-white" size={20} />
                    </div>
                    <div>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {edu.type}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-800 mb-2">{edu.degree}</h4>
                  <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      <span>{edu.grade}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Professional Certifications</h3>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                    <p className="text-blue-100 font-medium mb-2">{cert.issuer}</p>
                    <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-3">
                      {cert.status}
                    </div>
                    <p className="text-blue-50 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Learning */}
          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Continuous Learning</h4>
              <p className="text-gray-600 leading-relaxed">
                Committed to staying current with the latest DevOps technologies and best practices through 
                continuous learning, online courses, and hands-on experimentation with emerging tools and platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;