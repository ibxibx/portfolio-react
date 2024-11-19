import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Import project images (keeping all imports the same)
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.jpg";
import project6 from "../assets/images/project-6.jpg";

const projectImages = {
  1: project1,
  2: project2,
  3: project3,
  4: project4,
  5: project5,
  6: project6,
};

const ProjectBox = ({
  number,
  title,
  technologies,
  imageNumber,
  githubLink,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-neutral-900/50 backdrop-blur-md rounded-lg overflow-hidden mb-6 h-[240px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex h-full">
        {/* Left side - Content */}
        <div className="flex-1 p-6">
          <div className="mb-2 text-white/50 text-sm">
            {number.toString().padStart(2, "0")}
          </div>
          <h2 className="text-4xl mb-4 font-light leading-tight">{title}</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-black/30 border border-white/10 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Middle - Image */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-[240px] group"
        >
          <img
            src={projectImages[imageNumber]}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <ArrowUpRight className="text-white" size={24} />
          </div>
        </a>

        {/* Right side - Empty space with year and arrow */}
        <div className="w-[200px] p-6 flex items-start">
          <div className="flex items-center gap-2">
            <span className="text-white/50 text-sm">2024</span>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-200"
            >
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const projects = [
    {
      number: 1,
      title: "MyMDB - My Movie Database (Angular / Client Side)",
      technologies: [
        "JavaScript",
        "Angular",
        "TypeScript",
        "Material UI",
        "SCSS",
      ],
      imageNumber: 6,
      githubLink: "https://github.com/ibxibx/mymdb-angular-client",
    },
    {
      number: 2,
      title: "NextChat - A React Native Mobile Chat Application",
      technologies: [
        "JavaScript",
        "React Native",
        "Expo",
        "Google Firestore",
        "Firebase Auth",
        "Gifted Chat",
      ],
      imageNumber: 5,
      githubLink: "https://github.com/ibxibx/nextchat",
    },
    {
      number: 3,
      title: "MeetLink - The PWA for Meetups and Events",
      technologies: ["JavaScript", "HTML", "CSS"],
      imageNumber: 4,
      githubLink: "https://github.com/ibxibx/meetlink",
    },
    {
      number: 4,
      title: "MyMDB - My Movie Database (Client Side)",
      technologies: [
        "JavaScript",
        "RESTful API",
        "Bootstrap UI",
        "CSS",
        "HTML",
      ],
      imageNumber: 3,
      githubLink: "https://github.com/ibxibx/mymdb/tree/clean-mymdb-client",
    },
    {
      number: 5,
      title: "MyMDB - My Movie Database (Server Side)",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "CORS"],
      imageNumber: 2,
      githubLink: "https://github.com/ibxibx/mymdb",
    },
    {
      number: 6,
      title: "Pokédex - Pokemon Index App",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      imageNumber: 1,
      githubLink: "https://github.com/ibxibx/pokemon-js-app",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin">
      <style jsx global>{`
        /* Custom Scrollbar Styles */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <div className="flex flex-col items-center p-8">
        <motion.h1
          className="text-6xl mb-16 font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        <div className="max-w-[1000px] w-full">
          {projects.map((project, index) => (
            <ProjectBox key={index} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
