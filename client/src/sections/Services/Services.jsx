import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Smartphone,
  GitBranch,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building modern, responsive and interactive interfaces using React and its ecosystem, with reusable components and clean UI architecture.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Next.js",
    ],
  },

  {
    number: "02",
    icon: Server,
    title: "Backend & REST APIs",
    description:
      "Developing backend applications and REST APIs using Node.js and Express.js with structured routes, controllers, middleware and business logic.",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "Axios",
      "API Integration",
    ],
  },

  {
    number: "03",
    icon: Database,
    title: "Database Development",
    description:
      "Working with both NoSQL and relational databases to design, store and manage application data efficiently.",
    skills: [
      "MongoDB",
      "Mongoose",
      "MongoDB Atlas",
      "MySQL",
    ],
  },

  {
    number: "04",
    icon: ShieldCheck,
    title: "Authentication & Security",
    description:
      "Implementing authentication and authorization systems with protected routes, JWT-based sessions and secure user workflows.",
    skills: [
      "JWT",
      "Authentication",
      "Authorization",
      "Protected Routes",
      "Middleware",
    ],
  },

  {
    number: "05",
    icon: Smartphone,
    title: "State & Data Management",
    description:
      "Managing application state and server-side data using modern React libraries to create scalable and responsive applications.",
    skills: [
      "React Redux",
      "Context API",
      "React Query",
      "TanStack Query",
      "React Router",
    ],
  },

  {
    number: "06",
    icon: GitBranch,
    title: "Real-Time & Modern Web",
    description:
      "Building real-time applications and working with modern development tools, version control and deployment workflows.",
    skills: [
      "WebSocket",
      "Socket.IO",
      "Git",
      "GitHub",
      "Postman",
      "Deployment",
    ],
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="section-heading">
          <p className="section-label">
            <span></span>
            WHAT I DO
          </p>

          <h2>
            My Development
            <span>Strengths.</span>
          </h2>

          <p className="section-description">
            Practical development skills built through real projects,
            continuous learning and hands-on problem solving.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>

                <div className="service-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="service-skills">
                    {service.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;