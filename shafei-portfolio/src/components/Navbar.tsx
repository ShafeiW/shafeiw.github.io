import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import currencyRupee from '../assets/images/CurrencyRupee.svg';

const Navbar: React.FC = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.header 
      className="nav-bar"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div 
        className="logo"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/">
          <img src={currencyRupee} alt="Logo" className="icon-style" />
        </Link>
      </motion.div>
      <nav>
        <motion.ul variants={navVariants}>
          <motion.li variants={itemVariants}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to="/projects">Projects</Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to="/experience">Experience</Link>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Navbar; 