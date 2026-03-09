import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      icon: "🎨"
    },
    {
      title: "Backend Development",
      skills: ["Python", "Django", "FastAPI", "REST APIs", "Node.js"],
      icon: "⚙️"
    },
    {
      title: "Authentication & Security",
      skills: ["JWT", "Role-Based Access Control", "OAuth 2.0", "Password Security"],
      icon: "🔐"
    },
    {
      title: "AI & Automation",
      skills: ["Python", "n8n", "Workflow Automation", "AI Agents", "API Integration"],
      icon: "🤖"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Database Design", "Query Optimization"],
      icon: "💾"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Docker", "AWS"],
      icon: "🛠️"
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "System Design", "Clean Code"],
      icon: "🧠"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        
        {/* Skills Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-blue-900/40 rounded-2xl p-8 md:p-12 border border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Full-Stack Developer & AI Enthusiast
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Passionate about building scalable web applications and integrating cutting-edge AI technologies. 
                My expertise spans from crafting beautiful user interfaces to implementing robust backend systems 
                and intelligent automation solutions.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">React</div>
                  <div className="text-sm text-gray-400">Expert Level</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">Python</div>
                  <div className="text-sm text-gray-400">Advanced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">AI/ML</div>
                  <div className="text-sm text-gray-400">Growing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">Cloud</div>
                  <div className="text-sm text-gray-400">Proficient</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-dark-accent p-6 rounded-xl card-hover">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-purple-400">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-dark-accent p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Proficiency Overview</h3>
            <p className="text-dark-muted mb-6">
              With expertise spanning the full development stack, I excel at creating end-to-end solutions 
              from concept to deployment. My focus is on writing clean, maintainable code and implementing 
              best practices in software development.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-dark-muted text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-dark-muted text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-dark-muted text-sm">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
