import React from 'react';
import { ExternalLink, Github, Cloud, Settings, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AWS Infrastructure Automation",
      description: "Comprehensive Terraform modules for multi-environment provisioning with automated deployment pipelines, EKS cluster management, and load balancer configuration.",
      icon: <Cloud className="text-blue-600" size={24} />,
      technologies: ["Terraform", "Ansible", "EKS", "ALB", "Route 53", "AWS"],
      features: [
        "Multi-environment infrastructure provisioning",
        "Automated EKS cluster deployment",
        "Application Load Balancer configuration",
        "DNS management with Route 53",
        "Infrastructure as Code best practices"
      ]
    },
    {
      title: "CI/CD Pipeline for Microservices",
      description: "Enterprise-grade CI/CD pipeline implementation for microservices architecture with automated testing, security scanning, and deployment orchestration.",
      icon: <Settings className="text-green-600" size={24} />,
      technologies: ["Jenkins", "GitLab CI/CD", "SonarQube", "Nexus", "Helm", "Docker"],
      features: [
        "Automated build and deployment pipelines",
        "Code quality analysis with SonarQube",
        "Artifact management with Nexus",
        "Container orchestration with Helm",
        "Multi-stage deployment strategy"
      ]
    },
    {
      title: "Monitoring & Disaster Recovery",
      description: "Comprehensive monitoring solution with real-time dashboards, alerting systems, and automated disaster recovery mechanisms for high availability.",
      icon: <Monitor className="text-purple-600" size={24} />,
      technologies: ["Grafana", "CloudWatch", "EBS Snapshots", "Cross-region Replication"],
      features: [
        "Real-time monitoring dashboards",
        "Automated alerting and notifications",
        "EBS snapshot automation",
        "Cross-region data replication",
        "Performance metrics tracking"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Showcasing key projects that demonstrate expertise in cloud infrastructure, automation, and DevOps practices.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;