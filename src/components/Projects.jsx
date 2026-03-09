import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Role-Based Employee Dashboard",
      description: "Comprehensive dashboard for monitoring employee records, attendance, and performance metrics. Implemented secure REST APIs with JWT authentication and role-based access control.",
      tech: ["React", "Django", "PostgreSQL", "JWT"],
      features: [
        "Employee data management system",
        "Real-time attendance tracking",
        "Performance analytics dashboard",
        "Secure role-based authentication",
        "RESTful API architecture"
      ],
      outcome: "Increased operational efficiency by 40% through automated monitoring and reporting systems."
    },
    {
      title: "Reporting & Analytics Dashboard",
      description: "Interactive dashboard for operational data visualization and reporting with efficient backend data aggregation. Features real-time data processing and customizable reporting.",
      tech: ["React", "Django", "REST APIs", "PostgreSQL"],
      features: [
        "Real-time data visualization",
        "Customizable reporting templates",
        "Advanced filtering and search",
        "Export functionality (PDF, Excel)",
        "Responsive design for mobile"
      ],
      outcome: "Reduced reporting time by 60% and improved data-driven decision making."
    },
    {
      title: "Laptop E-Commerce Store",
      description: "Full-stack e-commerce platform for laptop sales with comprehensive product management, shopping cart, order processing, and secure payment integration.",
      tech: ["TypeScript", "React", "FastAPI", "MongoDB", "JWT"],
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing",
        "Order tracking and management",
        "Admin dashboard for inventory"
      ],
      outcome: "Successfully launched with 500+ products and achieved 95% customer satisfaction rate."
    },
    {
      title: "Email Validation & Authentication API",
      description: "Robust backend service for email validation and secure JWT-based user authentication. Handles user registration, login, and account verification processes.",
      tech: ["FastAPI", "PostgreSQL", "JWT"],
      features: [
        "Email validation and verification",
        "JWT-based authentication system",
        "Password reset functionality",
        "Rate limiting and security measures",
        "Comprehensive API documentation"
      ],
      outcome: "Deployed as microservice serving 10,000+ authentication requests daily with 99.9% uptime."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-accent p-8 rounded-xl card-hover">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">{project.title}</h3>
              <p className="text-dark-muted mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-dark-text mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-dark-text mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-purple-400 mr-2">▸</span>
                      <span className="text-dark-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-dark-secondary pt-4">
                <p className="text-sm text-green-400">
                  <strong>Outcome:</strong> {project.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
