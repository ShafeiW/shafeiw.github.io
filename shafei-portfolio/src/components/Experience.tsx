import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  descriptions: (string | JSX.Element)[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Design Executive",
      company: "SFU Cybersecurity",
      period: "Feb 2025 - Present",
      descriptions: [
        "Designed informative and unique instagram post templates using Figma, Canva and Photoshop to advertise for the club's CTF events."
      ]
    },
    {
      title: "Software Developer",
      company: "PreMedTalk Blog",
      period: "Nov 2024 - Present",
      descriptions: [
        <span key="premedtalk-url"><a href="https://www.premedtalk.com" target="_blank" rel="noopener noreferrer">www.premedtalk.com</a></span>,
        "Worked on a full-stack blogging platform built with Node.js and Express, incorporating rich text editing and saving blog content as HTML in MongoDB for flexible content management for pre-medical prospective students.",
        "Put emphasis on user experience by revamping the platform's design and implementing a UI for admin users.",
        "Collaborated with administrators to ensure that the platform's design aligned with overall club objectives, contributing to improved engagements and user experience."
      ]
    },
    {
      title: "Marketing Executive",
      company: "SFU Canadian Cancer Society",
      period: "Sep 2023 - May 2024",
      descriptions: [
        "Collaborated within a multidisciplinary team of 10+ members to design and develop high-impact graphics, video content, and promotional materials for events, utilizing advanced design and video editing tools.",
        "Coordinated and managed cross-functional projects through the use of collaboration platforms like Slack, Instagram, and Zoom, ensuring effective communication and seamless integration between in-person and remote teams.",
        "Produced and executed a viral video campaign that achieved over 150,000 views, significantly increasing cancer research awareness and engagement."
      ]
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10,
        delay: i * 0.1
      }
    }),
    hover: { 
      scale: 1.02, 
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h1 
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
          }
        }}
      >
        Experience
      </motion.h1>

      {experiences.map((exp, index) => (
        <motion.div 
          className="experience-item" 
          key={index}
          custom={index}
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            {exp.title}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            {exp.company} | {exp.period}
          </motion.h3>
          {exp.descriptions.map((desc, descIndex) => (
            <motion.p
              key={descIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.4 + index * 0.1 + descIndex * 0.05, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              {desc}
            </motion.p>
          ))}
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Experience; 