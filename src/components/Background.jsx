import React from 'react';

const Background = () => {
  return (
    <section id="background" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Background & Education</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="card card-hover animate-fade-in">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-dark-text mb-2">
                  Bachelor of Computer Science
                </h4>
                <p className="text-dark-muted mb-1">
                  Government College University Faisalabad - Sahiwal Campus
                </p>
                <p className="text-sm text-purple-400">2021 - 2025</p>
                <p className="text-dark-muted mt-3">
                  Specialized in software development, web technologies, and artificial intelligence. 
                  Graduated with honors, focusing on full-stack development and modern programming paradigms.
                </p>
              </div>
            </div>
          </div>

          <div className="card card-hover animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Certifications</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="text-lg font-semibold text-dark-text">Full Stack Web Development</h4>
                <p className="text-dark-muted">Advanced React, Node.js, and Database Technologies</p>
                <p className="text-sm text-purple-400">2024</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="text-lg font-semibold text-dark-text">Python & Django Framework</h4>
                <p className="text-dark-muted">Professional Backend Development Certification</p>
                <p className="text-sm text-purple-400">2023</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="text-lg font-semibold text-dark-text">AI & Automation</h4>
                <p className="text-dark-muted">Machine Learning, n8n, and Workflow Automation</p>
                <p className="text-sm text-purple-400">2024</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="text-lg font-semibold text-dark-text">Cloud & DevOps</h4>
                <p className="text-dark-muted">AWS, Docker, and Modern Deployment Practices</p>
                <p className="text-sm text-purple-400">2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
