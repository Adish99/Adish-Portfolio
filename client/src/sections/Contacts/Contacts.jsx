import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { fadeUp } from "../../utils/animations";

import "./Contacts.css";

const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "karkiadish999@gmail.com",
    href: "mailto:karkiadish999@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GITHUB",
    value: "github.com/Adish99",
    href: "https://github.com/Adish99",
  },
  {
    icon: FaLinkedin,
    label: "LINKEDIN",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/adish-karki-983471325/",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Kathmandu, Nepal",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message.");
    }

    console.log(data);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("Contact form error:", error);
  }
};

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="section-label">
            <span></span>
            CONTACT
          </p>

          <h2>
            Let's Build Something
            <span>Together.</span>
          </h2>

          <p className="section-description">
            Have a project, opportunity or idea in mind?
            Feel free to get in touch and let's discuss it.
          </p>
        </motion.div>

        <div className="contact-layout">

          {/* Contact Information */}
          <motion.div
  className="contact-info"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
            <div className="contact-intro">
              <span>GET IN TOUCH</span>

              <h3>
                Open to new
                <br />
                opportunities.
              </h3>

              <p>
                I'm always interested in building meaningful
                projects, learning new technologies and connecting
                with people in the technology community.
              </p>
            </div>

            <motion.div
  className="contact-details"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
>
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                const isExternal =
                  detail.href.startsWith("http");

                return (
  <motion.a
    key={detail.label}
    href={detail.href}
    className="contact-detail"
    variants={fadeUp}
                    target={isExternal ? "_blank" : undefined}
                    rel={
                      isExternal
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`${detail.label}: ${detail.value}`}
                    whileHover={{ x: 4 }}
                  >
                    <div className="contact-detail-icon">
                      <Icon size={19} />
                    </div>

                    <div>
                      <span>{detail.label}</span>
                      <strong>{detail.value}</strong>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
  className="contact-form"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  onSubmit={handleSubmit}
>
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  EMAIL
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="subject">
                SUBJECT
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project / Opportunity"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

           <motion.button
  type="submit"
  className="contact-submit"
  whileHover={{
    y: -2,
  }}
  whileTap={{
    scale: 0.98,
  }}
>
  <Send size={18} />
  Send Message
</motion.button>

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

