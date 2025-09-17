import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.jpg";
import project6 from "../assets/images/project-6.jpg";
import project7 from "../assets/images/project-7.jpg";
import project8 from "../assets/images/project-8.jpg";
import project9 from "../assets/images/project-9.jpg";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const projectImages = {
  1: project1,
  2: project2,
  3: project3,
  4: project4,
  5: project5,
  6: project6,
  7: project7,
  8: project8,
  9: project9,
};

const ProjectLink = ({ href, text }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 text-sm"
    >
      {text}
      <ArrowUpRight size={16} />
    </a>
  ) : null;

const ProjectBox = ({
  number,
  title,
  description,
  technologies,
  imageNumber,
  githubLink,
  demoLink,
  caseStudyLink,
  year = "2024",
  delay = 0,
}) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Check if the viewport width is less than 1280px
  const isSmallViewport = window.innerWidth < 1280;

  return (
    <motion.div
      className="bg-neutral-900/50 backdrop-blur-md rounded-lg overflow-hidden mb-6 flex flex-col lg:flex-row min-h-[300px] group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      ref={ref}
    >
      <div className="flex-1 p-6">
        <div className="mb-2 text-white/50 text-sm">
          {number.toString().padStart(2, "0")}
        </div>
        <h2 className="text-2xl lg:text-4xl mb-4 font-light leading-tight min-h-[72px]">
          {title}
        </h2>
        <p className="text-xs text-white/70 mb-4 leading-loose">
          {description}
        </p>
        {/* Separator line with spacing */}
        <div className="w-full h-px bg-white/10 my-6 mx-auto" />
        <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-black/30 border border-white/10 rounded-full text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-center">
        <div
          className={`w-full lg:w-[340px] h-[250px] relative flex items-center justify-center overflow-hidden ${
            isSmallViewport || inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={projectImages[imageNumber]}
            alt={title}
            className={`w-full h-full object-cover ${
              isSmallViewport
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100 lg:transition-opacity lg:duration-500"
            }`}
          />
        </div>
      </div>

      <div className="p-6 flex flex-row lg:flex-col justify-between lg:justify-start lg:w-[200px]">
        <span className="text-white/50 text-sm">{year}</span>
        <div className="flex flex-row lg:flex-col gap-4 lg:mt-4">
          <ProjectLink href={githubLink} text="GitHub" />
          {demoLink && <ProjectLink href={demoLink} text="Demo" />}
          {caseStudyLink && (
            <Link
              to={caseStudyLink}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 text-sm"
            >
              Case Study
              <ArrowUpRight size={16} />
            </Link>
          )}
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
      description:
        "A client-side application built with Angular that interfaces with a movie API, allowing users to browse, search, and manage their favorite movies while maintaining their own watchlist and profile information.",
      technologies: [
        "JavaScript",
        "Angular",
        "TypeScript",
        "Material UI",
        "SCSS",
      ],
      imageNumber: 9,
      githubLink: "https://github.com/ibxibx/mymdb-angular-client",
      demoLink: "https://ibxibx.github.io/mymdb-angular-client/welcome",
      caseStudyLink: "/case-study-mymdb-angular",
    },
    {
      number: 2,
      title: "NextChat - A React Native Mobile App",
      description:
        "A React Native mobile chat application using Expo and Firebase that enables real-time communication through text, images, and location sharing with offline capabilities.",
      technologies: [
        "JavaScript",
        "React Native",
        "Expo",
        "Google Firestore",
        "Firebase Auth",
        "Gifted Chat",
        "Android Studio",
      ],
      imageNumber: 8,
      githubLink: "https://github.com/ibxibx/nextchat",
      caseStudyLink: "/case-study-nextchat",
    },
    {
      number: 3,
      title: "MeetLink - A PWA for Meetups and Events",
      description:
        "A serverless progressive web application built with React that uses Google Calendar API to fetch and display upcoming events for specific cities, featuring data visualization and offline functionality.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Amazon(AWS)",
        "Google Cloud",
        "Jest",
        "Bootstrap",
      ],
      imageNumber: 7,
      githubLink: "https://github.com/ibxibx/meetlink",
      demoLink: "https://ibxibx.github.io/meetlink/",
    },
    {
      number: 4,
      title: "MyMDB - My Movie Database (Client Side)",
      description:
        "A single-page movie database application built with React and Bootstrap that allows users to browse, search, and filter movies while managing their favorites list.",
      technologies: [
        "JavaScript",
        "RESTful API",
        "Bootstrap UI",
        "React",
        "CSS",
        "HTML",
        "Netlify",
      ],
      imageNumber: 6,
      githubLink: "https://github.com/ibxibx/mymdb/tree/clean-mymdb-client",
      demoLink: "https://mymdb-app.netlify.app/login",
    },
    {
      number: 5,
      title: "MyMDB - My Movie Database (Server Side)",
      description:
        "A comprehensive MERN stack implementation of the movie database that combines MongoDB, Express.js, React, and Node.js to provide a complete solution for movie browsing and user management.",
      technologies: [
        "Node.js",
        "JavaScript",
        "Express.js",
        "MongoDB",
        "JWT",
        "CORS",
        "Heroku",
      ],
      imageNumber: 5,
      githubLink: "https://github.com/ibxibx/mymdb",
      demoLink: "https://mymdb-app.netlify.app/login",
    },
    {
      number: 6,
      title: "My Portfolio Website in React",
      description:
        "A responsive React-based portfolio website showcasing web development projects, built with Tailwind CSS and featuring smooth animations and interactive elements.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      imageNumber: 4,
      githubLink: "https://github.com/ibxibx/portfolio-react",
      year: "2025",
    },
    {
      number: 7,
      title: "FinPanel - Personal Finance Dashboard",
      description:
        "A comprehensive personal finance dashboard built with React.js as part of the #80DaysOfCode challenge, that combines modern web development practices with practical financial management tools.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      imageNumber: 3,
      githubLink: "https://github.com/ibxibx/finpanel",
      year: "2025",
    },
    {
      number: 8,
      title: "Samantha - A Voice AI Agent",
      description:
        "Samantha has been built entirely without writing code. She's accessible through phone calls and can assist with brainstorming, fact-checking and more. All conversations can be saved to your Google Drive.",
      technologies: ["n8n", "Google Cloud API", "Vapi.ai", "GPT-4o-mini"],
      imageNumber: 2,
      githubLink: "https://github.com/ibxibx/samantha-voice-ai-agent",
      caseStudyLink: "/case-study-samantha",
      year: "2025",
    },
    {
      number: 9,
      title: "Jasmin Catering - Intelligent Email Automation Platform",
      description:
        "Jasmin Catering (Collaborative Project) - is an AI Agent solution that enhances the catering workflow by handling customer inquiries and generating/sending multiple offers based on the available menu items and other details (providing three packages) with prices by email.",
      technologies: [
        "Azure",
        "Python",
        "Azure Container Apps",
        "GPT-4o-mini",
        "IMAP/SMTP",
        "Slack API",
        "Docker",
        "GitHub Actions",
        "Azure Key Vault",
      ],
      imageNumber: 1,
      githubLink: "https://github.com/ibxibx/jasmin-catering-ai-agent",
      caseStudyLink: "/case-study-jasmin-catering-ai-agent",
      year: "2025",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full overflow-y-auto scrollbar-thin">
        <div className="min-h-full flex flex-col items-center p-4 sm:p-6 md:p-8">
          <br />
          <br />
          <br />
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-12 lg:mb-16 font-light"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            projects
          </motion.h1>
          <div className="max-w-[1000px] w-full">
            {projects.map((project, index) => (
              <ProjectBox key={index} {...project} delay={index * 0.1} />
            ))}
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
