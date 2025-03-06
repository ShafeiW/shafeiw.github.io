import React from 'react';
import { motion } from 'framer-motion';
// We'll use a direct path to the resume file in the public folder
// This avoids TypeScript import issues

const Resume: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      id="resume"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants}>Resume</motion.h1>
      <motion.a 
        href={process.env.PUBLIC_URL + '/resume.pdf'} 
        download 
        className="btn"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05, 
          backgroundColor: "#a00000",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        Download My Resume.
      </motion.a>
    </motion.section>
  );
};

export default Resume; 