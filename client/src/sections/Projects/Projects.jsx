import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "../../data/projects";
import { fadeUp, staggerContainer } from "../../utils/animations";
import "./Projects.css";
import SectionHeading from "../../components/UI/SectionHeading";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* Section Header */}
       <SectionHeading
  label="PROJECTS"
  title="Selected"
  highlight="Projects."
  description="A collection of full-stack and modern web applications I've built."
/>

        {/* Project Cards */}
       <motion.div
  className="projects-list"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
          {projects.map((project, index) => (
            <motion.article
  className={`project-card ${
    project.featured ? "project-featured" : ""
  }`}
  key={project.id}
  variants={fadeUp}
  whileHover={{ y: -6 }}
>
              {/* Card Header */}
              <div className="project-card-header">

                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

                <Trophy size={20} />

              </div>

              {/* Main Project Information */}
              <div className="project-card-main">

                <div className="project-title-area">
                  <div className="project-rating">
                    <strong>{project.rating}</strong>
                    <span>RATING</span>
                  </div>

                  <div>
                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Attributes */}
                <div className="project-attributes">

                  <div className="attribute">
                    <div className="attribute-info">
                      <span>FRONTEND</span>
                      <strong>{project.attributes.frontend}</strong>
                    </div>

                    <div className="attribute-bar">
                      <span
                        style={{
                          width: `${project.attributes.frontend}%`,
                        }}
                      ></span>
                    </div>
                  </div>

                  <div className="attribute">
                    <div className="attribute-info">
                      <span>BACKEND</span>
                      <strong>{project.attributes.backend}</strong>
                    </div>

                    <div className="attribute-bar">
                      <span
                        style={{
                          width: `${project.attributes.backend}%`,
                        }}
                      ></span>
                    </div>
                  </div>

                  <div className="attribute">
                    <div className="attribute-info">
                      <span>DATABASE</span>
                      <strong>{project.attributes.database}</strong>
                    </div>

                    <div className="attribute-bar">
                      <span
                        style={{
                          width: `${project.attributes.database}%`,
                        }}
                      ></span>
                    </div>
                  </div>

                  <div className="attribute">
                    <div className="attribute-info">
                      <span>ARCHITECTURE</span>
                      <strong>{project.attributes.architecture}</strong>
                    </div>

                    <div className="attribute-bar">
                      <span
                        style={{
                          width: `${project.attributes.architecture}%`,
                        }}
                      ></span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Technologies */}
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {/* Project Footer */}
              <div className="project-card-footer">

                <div className="project-meta">
                  <div>
                    <span>ROLE</span>
                    <strong>{project.role}</strong>
                  </div>

                  <div>
                    <span>STATUS</span>
                    <strong>{project.status}</strong>
                  </div>
                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </a>
                  )}

                </div>

              </div>

            </motion.article>
          ))}
        </motion.div>

     </div>
     </section>
  );
};

export default Projects;