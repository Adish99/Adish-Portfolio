import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Users,
} from "lucide-react";

import "./Experience.css";

const experiences = [
  {
    icon: Users,
    period: "PROJECT EXPERIENCE",
    title: "Collaborative Software Development",
    type: "GROUP PROJECTS",
    description:
      "Worked collaboratively on software projects, contributing to frontend development, backend integration, debugging, Git workflows and feature implementation.",
    skills: [
      "Team Collaboration",
      "Git & GitHub",
      "React",
      "API Integration",
    ],
  },

  {
    icon: Code2,
    period: "FULL-STACK DEVELOPMENT",
    title: "MERN Stack Project Development",
    type: "PERSONAL & TEAM PROJECTS",
    description:
      "Built multiple applications using MongoDB, Express.js, React and Node.js while developing practical experience with authentication, REST APIs, databases, state management and deployment.",
    skills: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "REST APIs",
    ],
  },

  {
    icon: BriefcaseBusiness,
    period: "CONTINUOUS LEARNING",
    title: "Modern Web Development",
    type: "TECHNICAL DEVELOPMENT",
    description:
      "Continuously expanded my development skills by working with technologies including WebSocket, TypeScript, React Redux, Next.js, Tailwind CSS and modern development tools.",
    skills: [
      "TypeScript",
      "WebSocket",
      "Next.js",
      "Tailwind CSS",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        {/* Section Header */}
        <div className="section-heading">
          <p className="section-label">
            <span></span>
            EXPERIENCE & EDUCATION
          </p>

          <h2>
            My Development
            <span>Journey.</span>
          </h2>

          <p className="section-description">
            My experience has been built through hands-on development,
            collaborative projects and continuous learning.
          </p>
        </div>

        <div className="experience-layout">

          {/* Experience Timeline */}
          <div className="experience-timeline">

            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <article
                  className="experience-item"
                  key={experience.title}
                >
                  <div className="experience-marker">
                    <Icon size={20} />
                  </div>

                  <div className="experience-content">

                    <div className="experience-top">
                      <span>{experience.period}</span>
                      <span>0{index + 1}</span>
                    </div>

                    <h3>{experience.title}</h3>

                    <p className="experience-type">
                      {experience.type}
                    </p>

                    <p className="experience-description">
                      {experience.description}
                    </p>

                    <div className="experience-skills">
                      {experience.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>

                  </div>
                </article>
              );
            })}

          </div>

          {/* Education Card */}
          <aside className="education-card">

            <div className="education-header">
              <span>EDUCATION</span>
              <GraduationCap size={22} />
            </div>

            <div className="education-number">
              01
            </div>

            <div className="education-content">
              <span>BACHELOR'S DEGREE</span>

              <h3>
                BSc (Hons)
                <br />
                Information Technology
              </h3>

              <p>
                ISMT College
              </p>
            </div>

            <div className="education-footer">
              <span>FIELD</span>
              <strong>INFORMATION TECHNOLOGY</strong>
            </div>

          </aside>

        </div>

      </div>
    </section>
  );
};

export default Experience;