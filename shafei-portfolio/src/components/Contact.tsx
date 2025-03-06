import React from 'react';
import { motion } from 'framer-motion';
import linkedinIcon from '../assets/images/linkedin.svg';
import githubIcon from '../assets/images/github.svg';
import mailIcon from '../assets/images/mail.svg';

const Contact: React.FC = () => {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <motion.section 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants}>Contact</motion.h1>
      <motion.div className="contact-icons" variants={containerVariants}>
        <motion.a 
          href="https://www.linkedin.com/in/shafei-waqar-215090295/" 
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          <motion.img 
            src={linkedinIcon} 
            alt="LinkedIn" 
            className="icon-style"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          />
        </motion.a>
        <motion.a 
          href="https://github.com/ShafeiW" 
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          <motion.img 
            src={githubIcon} 
            alt="GitHub" 
            className="icon-style"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          />
        </motion.a>
        <motion.a 
          href="mailto:shafei.waqar@gmail.com"
          variants={itemVariants}
        >
          <motion.img 
            src={mailIcon} 
            alt="Email" 
            className="icon-style"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          />
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact; 