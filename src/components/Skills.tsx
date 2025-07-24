import React from 'react';
import { 
  Cloud, 
  GitBranch, 
  Settings, 
  Container, 
  Monitor, 
  Shield, 
  Code, 
  Users,
  Brain,
  MessageSquare
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="text-blue-600" size={24} />,
      skills: ["AWS EC2", "S3", "Lambda", "VPC", "CloudFront", "Route 53", "RDS", "IAM"]
    },
    {
      title: "CI/CD Tools",
      icon: <GitBranch className="text-green-600" size={24} />,
      skills: ["Jenkins", "GitLab CI/CD", "AWS CodePipeline", "GitHub Actions"]
    },
    {
      title: "Infrastructure as Code",
      icon: <Settings className="text-purple-600" size={24} />,
      skills: ["Terraform", "CloudFormation", "Ansible", "Pulumi"]
    },
    {
      title: "Containerization",
      icon: <Container className="text-orange-600" size={24} />,
      skills: ["Docker", "Kubernetes", "EKS", "Helm", "Docker Compose"]
    },
    {
      title: "Monitoring & Logging",
      icon: <Monitor className="text-red-600" size={24} />,
      skills: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Datadog"]
    },
    {
      title: "Security",
      icon: <Shield className="text-indigo-600" size={24} />,
      skills: ["IAM", "WAF", "KMS", "Secrets Manager", "Security Groups"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-teal-600" size={24} />,
      skills: ["Python", "Bash", "YAML", "JSON", "Go"]
    },
    {
      title: "Version Control",
      icon: <GitBranch className="text-gray-600" size={24} />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Azure DevOps"]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Brain className="text-blue-600" size={20} />, level: 95 },
    { name: "Team Collaboration", icon: <Users className="text-green-600" size={20} />, level: 90 },
    { name: "Communication", icon: <MessageSquare className="text-purple-600" size={20} />, level: 88 },
    { name: "Leadership", icon: <Users className="text-orange-600" size={20} />, level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Comprehensive expertise across modern DevOps technologies and cloud platforms.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Soft Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                  </div>
                  <span className="text-gray-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;