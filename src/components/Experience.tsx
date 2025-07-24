import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AWS DevOps Engineer",
      company: "Areteans Technology Solutions",
      location: "Remote",
      duration: "Dec 2021 – Dec 2024",
      type: "Full-time",
      achievements: [
        "Designed secure AWS architecture using EC2, S3, RDS, VPC, CloudFront, IAM, and Lambda",
        "Created Infrastructure as Code (IaC) with Terraform and CloudFormation",
        "Built comprehensive CI/CD pipelines using Jenkins, GitLab, and AWS CodePipeline",
        "Implemented containerization solutions with Docker, Kubernetes (EKS), and Helm",
        "Set up monitoring and logging using ELK stack, Prometheus, and Grafana",
        "Automated infrastructure tasks with Ansible and Lambda functions",
        "Achieved significant cost optimization through resource management and automation"
      ]
    },
    {
      title: "Business Development Executive",
      company: "Genpact India",
      location: "India",
      duration: "Feb 2018 – Aug 2021",
      type: "Full-time",
      achievements: [
        "Managed client relationships and increased engagement by 15%",
        "Conducted product demonstrations and client onboarding sessions",
        "Collaborated with cross-functional teams to deliver customer solutions",
        "Developed strong communication and problem-solving skills"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-blue-200"></div>
              )}
              
              <div className="bg-white rounded-xl shadow-lg p-8 ml-16 relative">
                <div className="absolute -left-20 top-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase className="text-white" size={20} />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {exp.type}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;