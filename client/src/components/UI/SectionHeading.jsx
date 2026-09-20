import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

const SectionHeading = ({
  label,
  title,
  highlight,
  description,
}) => {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="section-label">
        <span></span>
        {label}
      </p>

      <h2>
        {title}
        {highlight && <span>{highlight}</span>}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;