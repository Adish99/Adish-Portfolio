import { useState } from "react";

import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "./Contacts.css";

const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "karkiadish999@gmail.com",
    href: "karkiadish999@gmail.com",
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

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form:", formData);

    // Email/API integration will be added later.
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Section Heading */}
        <div className="section-heading">
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
        </div>

        <div className="contact-layout">

          {/* Contact Information */}
          <div className="contact-info">

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

            <div className="contact-details">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                const isExternal =
                  detail.href.startsWith("http");

                return (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="contact-detail"
                    target={isExternal ? "_blank" : undefined}
                    rel={
                      isExternal
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`${detail.label}: ${detail.value}`}
                  >
                    <div className="contact-detail-icon">
                      <Icon size={19} />
                    </div>

                    <div>
                      <span>{detail.label}</span>
                      <strong>{detail.value}</strong>
                    </div>
                  </a>
                );
              })}
            </div>

          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
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

            <button
              type="submit"
              className="contact-submit"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;