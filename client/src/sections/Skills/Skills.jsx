import {
  Braces,
  Database,
  GitBranch,
  Globe,
  Server,
  Wrench,
} from "lucide-react";
import "./Skills.css";

const skillCategories = [
  {
    icon: Braces,
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "React Redux",
      "React Router",
      "Tailwind CSS",
      "Shadcn UI",
      "Next.js",
    ],
  },

  {
    icon: Server,
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Authentication",
      "WebSocket",
    ],
  },

  {
    icon: Database,
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "MongoDB Atlas",
      "MySQL",
    ],
  },

  {
    icon: Globe,
    title: "Development",
    skills: [
      "Responsive Design",
      "API Integration",
      "State Management",
      "Git",
      "GitHub",
    ],
  },

  {
    icon: Wrench,
    title: "Tools",
    skills: [
      "VS Code",
      "Postman",
      "NPM",
      "Chrome DevTools",
    ],
  },

  {
    icon: GitBranch,
    title: "Deployment",
    skills: [
      "Netlify",
      "Render",
      "Environment Variables",
      "DNS",
    ],
  },
];

const playerStats = [
  { label: "Frontend", value: 88 },
  { label: "Backend", value: 85 },
  { label: "Database", value: 82 },
  { label: "Problem Solving", value: 90 },
  { label: "Teamwork", value: 87 },
  { label: "Adaptability", value: 84 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Section Header */}
        <div className="section-heading">
          <p className="section-label">
            <span></span>
            TECHNICAL SKILLS
          </p>

          <h2>
            My Technical
            <span>Game.</span>
          </h2>
        </div>

        <div className="skills-layout">

          {/* Skill Categories */}
          <div className="skills-grid">
            {skillCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article className="skill-card" key={category.title}>
                  <div className="skill-card-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{category.title}</h3>

                  <div className="skill-list">
                    {category.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Player Stats */}
          <aside className="skill-stats-card">

            <div className="skill-stats-header">
              <div>
                <span>PLAYER ATTRIBUTES</span>
                <h3>ADISH</h3>
              </div>

              <strong>10</strong>
            </div>

            <p className="skill-stats-position">
              FULL-STACK SOFTWARE ENGINEER
            </p>

            <div className="skill-stat-list">
              {playerStats.map((stat) => (
                <div className="skill-stat" key={stat.label}>
                  <div className="skill-stat-info">
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>

                  <div className="skill-stat-bar">
                    <span style={{ width: `${stat.value}%` }}></span>
                  </div>
                </div>
              ))}
            </div>

          </aside>

        </div>
      </div>
    </section>
  );
};

export default Skills;