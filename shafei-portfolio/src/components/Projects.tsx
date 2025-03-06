import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "ExamQBot",
      description: "An OpenAI API powered tool that takes in class notes and can generate exam questions and flashcards.",
      githubUrl: "https://github.com/ShafeiW/ExamQBot"
    },
    {
      title: "Review Analyzer",
      description: "A deep learning-powered web application that performs sentiment analysis on Amazon product reviews using a fine-tuned BERT model.",
      githubUrl: "https://github.com/ShafeiW/ReviewAnalyzer"
    },
    {
      title: "Soundscape Mixer",
      description: "Mobile app that lets you mix ambient sounds to create a personalized soundscape for relaxation, meditation, or focus.",
      githubUrl: "https://github.com/ShafeiW/SoundscapeMixer"
    },
    {
      title: "Canvas2Calendar",
      description: "Python scripts that automatically sync your Canvas assignments with your Google Calendar.",
      githubUrl: "https://github.com/ShafeiW/Canvas2Calendar"
    },
    {
      title: "miXologist",
      description: "An interactive cocktail recommendation web application that allows users to generate custom cocktail recipes. Built for JourneyHacks2025",
      githubUrl: "https://github.com/ShafeiW/JourneyHacks-2025"
    },
    {
      title: "AviHavoc",
      description: "Hackathon project built to display international flights and showcase the dangers of gas emissions.",
      githubUrl: "https://github.com/junhecui/avihavoc"
    }
  ];

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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10,
        delay: i * 0.1
      }
    }),
    hover: { 
      scale: 1.03, 
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      id="projects"
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
        Projects
      </motion.h1>

      {projects.map((project, index) => (
        <motion.div 
          className="project" 
          key={index}
          custom={index}
          variants={projectVariants}
          whileHover="hover"
        >
          <motion.div className="project-details">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {project.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              {project.description}
            </motion.p>
            <motion.a 
              href={project.githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, textDecoration: 'underline' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              View on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Projects; 