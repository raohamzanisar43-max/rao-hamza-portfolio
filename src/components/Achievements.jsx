import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Achievements & Awards</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-10 rounded-2xl border border-purple-600/30 mb-8">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-yellow-500/20 rounded-full mb-4">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-3xl font-bold text-purple-400 mb-2">Crust Corner - Food Delivery App</h3>
              <p className="text-xl text-dark-text mb-4">Final Year Project Achievement</p>
              <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                First Place in University Innovation Competition
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-dark-text mb-3">Project Overview</h4>
                <p className="text-dark-muted leading-relaxed">
                  Developed a comprehensive food delivery application that connects local restaurants with customers. 
                  The platform features real-time order tracking, secure payment processing, and an intuitive user interface 
                  that revolutionized the food delivery experience in the university area.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-dark-text mb-3">Technical Implementation</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-dark-accent/50 p-4 rounded-lg">
                    <h5 className="text-purple-400 font-semibold mb-2">Frontend</h5>
                    <ul className="text-dark-muted text-sm space-y-1">
                      <li>• React Native for cross-platform mobile app</li>
                      <li>• React web dashboard for restaurant owners</li>
                      <li>• Real-time order tracking with WebSocket</li>
                      <li>• Google Maps integration for delivery</li>
                    </ul>
                  </div>
                  <div className="bg-dark-accent/50 p-4 rounded-lg">
                    <h5 className="text-purple-400 font-semibold mb-2">Backend</h5>
                    <ul className="text-dark-muted text-sm space-y-1">
                      <li>• Django REST API for backend services</li>
                      <li>• PostgreSQL for data management</li>
                      <li>• JWT authentication for secure access</li>
                      <li>• Payment gateway integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-dark-text mb-3">Key Achievements</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-dark-accent/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-1">First</div>
                    <div className="text-dark-muted text-sm">Place in University</div>
                  </div>
                  <div className="bg-dark-accent/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
                    <div className="text-dark-muted text-sm">Active Users</div>
                  </div>
                  <div className="bg-dark-accent/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-1">20+</div>
                    <div className="text-dark-muted text-sm">Restaurant Partners</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-dark-text mb-3">Impact & Recognition</h4>
                <p className="text-dark-muted leading-relaxed">
                  This project was recognized as the most innovative final year project in the university's history, 
                  being the first to successfully implement a complete food delivery ecosystem. The achievement was 
                  highlighted in university publications and led to internship opportunities with multiple tech companies. 
                  The project demonstrated advanced technical skills in full-stack development, real-time communication, 
                  and scalable architecture design.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-accent p-6 rounded-xl card-hover">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🎓</span>
                <h3 className="text-xl font-bold text-purple-400">Academic Excellence</h3>
              </div>
              <ul className="space-y-2 text-dark-muted">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Dean's List for academic performance
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Top 5% in Computer Science department
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Perfect attendance award
                </li>
              </ul>
            </div>

            <div className="bg-dark-accent p-6 rounded-xl card-hover">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">💼</span>
                <h3 className="text-xl font-bold text-purple-400">Professional Recognition</h3>
              </div>
              <ul className="space-y-2 text-dark-muted">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Employee of the Month at Mars BPO
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Best Intern Project Award
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Innovation in Automation Certificate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
