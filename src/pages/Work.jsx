import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

const ProjectLink = ({ href, text }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 text-sm"
    >
      {text}
      <ArrowUpRight size={16} />
    </a>
  );
};

const ProjectBox = ({
  number,
  title,
  technologies,
  imageNumber,
  githubLink,
  demoLink,
  caseStudyLink,
  delay = 0,
  deviceType,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <motion.div
      className="bg-neutral-900/50 backdrop-blur-md rounded-lg overflow-hidden mb-6 flex flex-col lg:flex-row"
      style={{ height: deviceType === "mobile" ? "auto" : "280px" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => deviceType === "desktop" && setIsHovered(true)}
      onMouseLeave={() => deviceType === "desktop" && setIsHovered(false)}
      onViewportEnter={() => deviceType !== "desktop" && setIsVisible(true)}
      onViewportLeave={() => deviceType !== "desktop" && setIsVisible(false)}
    >
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <div className="mb-2 text-white/50 text-sm">
          {number.toString().padStart(2, "0")}
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-4xl mb-4 font-light leading-tight">
          {title}
        </h2>
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

      <motion.div className="w-full lg:w-[340px] h-[200px] lg:h-auto relative">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full relative group"
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
      </motion.div>

      <div className="p-4 sm:p-6 flex flex-row lg:flex-col justify-between lg:justify-start lg:w-[200px]">
        <span className="text-white/50 text-sm">2024</span>
        <div className="flex flex-row lg:flex-col gap-4 lg:mt-4">
          <ProjectLink href={githubLink} text="GitHub" />
          {demoLink && <ProjectLink href={demoLink} text="Demo" />}
          {caseStudyLink && (
            <ProjectLink href={caseStudyLink} text="Case Study" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [deviceType, setDeviceType] = React.useState("desktop");

  React.useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setDeviceType("mobile");
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      demoLink: "https://ibxibx.github.io/mymdb-angular-client/welcome",
    },
    {
      number: 2,
      title: "NextChat - A React Native Mobile App",
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
      caseStudyLink: "/case-study-nextchat",
    },
    {
      number: 3,
      title: "MeetLink - A PWA for Meetups and Events",
      technologies: ["JavaScript", "HTML", "CSS"],
      imageNumber: 4,
      githubLink: "https://github.com/ibxibx/meetlink",
      demoLink: "https://ibxibx.github.io/meetlink/",
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
      demoLink: "https://mymdb-app.netlify.app/login",
    },
    {
      number: 5,
      title: "MyMDB - My Movie Database (Server Side)",
      technologies: [
        "Node.js",
        "JavaScript",
        "Express.js",
        "MongoDB",
        "JWT",
        "CORS",
      ],
      imageNumber: 2,
      githubLink: "https://github.com/ibxibx/mymdb",
      demoLink: "https://mymdb-app.netlify.app/login",
    },
    {
      number: 6,
      title: "My Portfolio Website in React",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      imageNumber: 1,
      githubLink: "https://github.com/ibxibx/portfolio-react",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full overflow-y-auto scrollbar-thin">
        <div className="min-h-full flex flex-col items-center p-4 sm:p-6 md:p-8">
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-6xl mb-6 sm:mb-8 lg:mb-12 font-light"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h1>
          <div
            className={`max-w-[1000px] w-full ${
              deviceType === "mobile"
                ? "flex flex-col gap-6"
                : "grid grid-cols-1 md:grid-cols-2 gap-6"
            }`}
          >
            {projects.map((project, index) => (
              <ProjectBox
                key={index}
                {...project}
                delay={index * 0.1}
                deviceType={deviceType}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
