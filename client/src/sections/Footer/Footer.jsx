import {motion} from "framer-motion";
import {
  ArrowUp,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "./Footer.css";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Adish99",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "#",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:your-email@example.com",
  },
];

//Footer component 
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              AB
            </a>

            <h3>
              Full-Stack MERN
              <span>Developer.</span>
            </h3>

            <p>
              Building modern, scalable and user-focused
              web applications with the MERN stack.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <span className="footer-heading">
              QUICK LINKS
            </span>

            <nav>
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="footer-connect">
            <span className="footer-heading">
              CONNECT
            </span>

            <div className="footer-socials">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                const isExternal =
                  social.href.startsWith("http");

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target={
                      isExternal ? "_blank" : undefined
                    }
                    rel={
                      isExternal
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Icon size={18} />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="footer-location">
              <MapPin size={17} />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            © {currentYear} Adish Babu Karki. All rights
            reserved.
          </p>

          <p className="footer-built">
            Built with React + Vite
          </p>

          <motion.button
  className="footer-top"
  onClick={scrollToTop}
  aria-label="Scroll to top"
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.95 }}
>
  <ArrowUp size={18} />
</motion.button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;