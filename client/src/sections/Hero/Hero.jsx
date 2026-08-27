import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-pitch-lines"></div>

      <div className="hero-container">
        <div className="hero-content">

          <p className="hero-label">
            <span></span>
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            ADISH
            <span>BABUKARKI</span>
          </h1>

          <h2>
            Full-Stack <strong>Software Engineer</strong>
          </h2>

          <p className="hero-description">
            I build modern, scalable and user-focused web applications
            using the MERN stack, combining clean engineering with
            thoughtful digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary-btn">
              View My Projects
              <ArrowDown size={18} />
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Let's Connect
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Adish99"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
             <FaGithub size={20} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
             <FaLinkedinIn size={20} />
            </a>
          </div>

        </div>

        <div className="hero-player-card">

          <div className="player-card-top">
            <span>FULL-STACK</span>
            <span>01</span>
          </div>

          <div className="player-avatar">
            <span>AB</span>
          </div>

          <div className="player-card-info">
            <p>SOFTWARE ENGINEER</p>
            <h3>ADISH</h3>
            <h3>BABUKARKI</h3>
          </div>

          <div className="player-stats">
            <div>
              <strong>MERN</strong>
              <span>STACK</span>
            </div>

            <div>
              <strong>3+</strong>
              <span>YEARS</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>PASSION</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;