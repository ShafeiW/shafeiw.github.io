import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
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
      id="home" 
      className="home-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <motion.h1 
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: {
              duration: 0.8
            }
          }}
        >
          <motion.span
            initial={{ display: "inline-block", overflow: "hidden" }}
            animate={{ 
              transition: {
                staggerChildren: 0.05
              }
            }}
          >
            {"Hi, I'm Shafei Waqar.".split("").map((char, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block" }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: index * 0.05
                  }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>
      </motion.div>

      <motion.p 
        className="subtagline"
        variants={itemVariants}
      >
        Bsc. in Computer Science student at SFU.
      </motion.p>
    </motion.section>
  );
};

export default Home; 