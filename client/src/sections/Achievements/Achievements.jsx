import {
  Trophy,
  Code2,
  Zap,
  Rocket,
  Users,
  BookOpen,
} from "lucide-react";

import "./Achievements.css";

const achievements = [
  {
    number: "01",
    icon: Trophy,
    title: "Flagship Full-Stack Project",
    description:
      "Built Org-Khana, a complete organic product e-commerce platform with authentication, products, cart, wishlist, reviews, coupons, orders and payment integration.",
    tag: "ORG-KHANA",
  },

  {
    number: "02",
    icon: Code2,
    title: "Multiple Full-Stack Projects",
    description:
      "Developed multiple applications to strengthen practical skills across frontend, backend, databases, APIs and modern JavaScript development.",
    tag: "PROJECT EXPERIENCE",
  },

  {
    number: "03",
    icon: Zap,
    title: "Real-Time Applications",
    description:
      "Explored real-time communication by building WebSocket applications including an echo server, broadcast system and live counter.",
    tag: "WEBSOCKET",
  },

  {
    number: "04",
    icon: Rocket,
    title: "Deployment & Production",
    description:
      "Gained practical experience deploying full-stack applications, configuring environment variables, DNS, domains and production APIs.",
    tag: "DEPLOYMENT",
  },

  {
    number: "05",
    icon: Users,
    title: "Collaborative Development",
    description:
      "Worked on group projects while practicing Git, GitHub, feature development, debugging and collaboration within a development workflow.",
    tag: "TEAMWORK",
  },

  {
    number: "06",
    icon: BookOpen,
    title: "Continuous Technical Growth",
    description:
      "Continuously expanding development knowledge across React, Redux, TanStack Query, TypeScript, WebSocket, Next.js and other modern technologies.",
    tag: "LEARNING",
  },
];

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-container">

        <div className="section-heading">
          <p className="section-label">
            <span></span>
            ACHIEVEMENTS
          </p>

          <h2>
            Career
            <span>Highlights.</span>
          </h2>

          <p className="section-description">
            Milestones and practical experiences built through projects,
            collaboration and continuous technical development.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <article
                className="achievement-card"
                key={achievement.number}
              >
                <div className="achievement-top">
                  <span className="achievement-number">
                    {achievement.number}
                  </span>

                  <div className="achievement-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="achievement-content">
                  <span className="achievement-tag">
                    {achievement.tag}
                  </span>

                  <h3>{achievement.title}</h3>

                  <p>{achievement.description}</p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;