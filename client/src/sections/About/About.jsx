import { Code2, GraduationCap, Trophy } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Header */}
        <div className="section-heading">
          <p className="section-label">
            <span></span>
            ABOUT ME
          </p>

          <h2>
            More Than Just
            <span>Code.</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="about-grid">

          <div className="about-content">
            <p className="about-intro">
              I'm Adish Babu karki, a Full-Stack Software Engineer
              passionate about building modern, scalable and
              user-focused web applications.
            </p>

            <p>
              I work primarily with the MERN stack and enjoy turning
              ideas into functional digital products. Through personal
              projects and collaborative development, I've gained
              practical experience across frontend, backend, databases
              and deployment.
            </p>

            <p>
              I believe good software development is similar to football:
              strong teamwork, clear strategy, consistent practice and
              the ability to adapt when the game changes.
            </p>

            <div className="about-highlights">

              <div className="about-highlight">
                <Code2 size={22} />
                <div>
                  <strong>MERN Stack</strong>
                  <span>Full-Stack Development</span>
                </div>
              </div>

              <div className="about-highlight">
                <GraduationCap size={22} />
                <div>
                  <strong>BSc (Hons) IT</strong>
                  <span>ISMT College</span>
                </div>
              </div>

            </div>
          </div>

          {/* Career Stats Card */}
          <div className="about-card">

            <div className="about-card-header">
              <span>PLAYER PROFILE</span>
              <Trophy size={20} />
            </div>

            <div className="about-card-number">
              01
            </div>

            <div className="about-card-name">
              <span>SOFTWARE ENGINEER</span>
              <h3>ADISH<br />BABUKARKI</h3>
            </div>

            <div className="about-stats">

              <div>
                <strong>MERN</strong>
                <span>POSITION</span>
              </div>

              <div>
                <strong>FULL</strong>
                <span>STACK</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>DRIVE</span>
              </div>

              <div>
                <strong>TEAM</strong>
                <span>MINDSET</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;