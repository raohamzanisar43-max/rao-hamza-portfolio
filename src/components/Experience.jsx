import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Full-Stack Developer",
      company: "Mars BPO",
      location: "Islamabad, Pakistan",
      period: "Sept 2025 – Present",
      responsibilities: [
        "Developed full-stack web applications using React, Django, and FastAPI",
        "Designed RESTful APIs with JWT authentication and database integration (PostgreSQL, MongoDB)",
        "Implemented AI automation workflows using n8n and third-party APIs",
        "Optimized application performance and deployed production-ready solutions",
        "Led code reviews and mentored junior developers"
      ]
    },
    {
      title: "Full-Stack Development Intern",
      company: "Mars BPO",
      location: "Islamabad, Pakistan",
      period: "June 2025 – Aug 2025",
      responsibilities: [
        "Assisted in full-stack application development using React, Django, and FastAPI",
        "Built and tested REST API endpoints and frontend components",
        "Worked with relational and non-relational databases for CRUD operations",
        "Participated in agile development processes and daily standups",
        "Collaborated with senior developers on feature implementation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Professional Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12">
              <div className="bg-dark-accent p-8 rounded-xl card-hover">
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-dark-text mb-1">{exp.company}</p>
                    <p className="text-dark-muted">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-dark-text mb-4">Key Responsibilities & Contributions:</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="text-purple-400 mr-3 mt-1">▸</span>
                        <span className="text-dark-muted">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {index === 0 && (
                  <div className="mt-6 pt-6 border-t border-dark-secondary">
                    <p className="text-green-400 text-sm">
                      <strong>Achievement:</strong> Successfully delivered 5+ production applications, 
                      improved system performance by 35%, and reduced development time through automation workflows.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-600/30">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Career Growth</h3>
              <p className="text-dark-muted">
                Progressed from intern to junior developer within 3 months through exceptional performance, 
                technical expertise, and strong problem-solving skills. Currently leading key projects and 
                contributing to architectural decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
