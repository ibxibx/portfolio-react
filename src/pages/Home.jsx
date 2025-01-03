import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHero from "../components/home/SectionHero";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import SuccessModal from "./SuccessModal";
import { useInView } from "react-intersection-observer";

// Import all images and assets
import profile500x500 from "../assets/images/profile500x500.jpg";
import resumePDF from "../assets/docs/Ian Buimistr - Junior Full Stack Developer Resume.pdf";
import hobbies1 from "../assets/images/hobbies1.jpg";
import hobbies2 from "../assets/images/hobbies2.jpg";
import hobbies3 from "../assets/images/hobbies3.jpg";
import hobbies4 from "../assets/images/hobbies4.jpg";
import hobbies5 from "../assets/images/hobbies5.jpg";
import hobbies6 from "../assets/images/hobbies6.jpg";
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

const hobbiesImages = [
  { src: hobbies1, alt: "Waterfalls" },
  { src: hobbies2, alt: "Jungle" },
  { src: hobbies3, alt: "Beach Volleyball" },
  { src: hobbies4, alt: "Sailing" },
  { src: hobbies5, alt: "Mountain Climbing" },
  { src: hobbies6, alt: "Swimming" },
];

// Project Link Component
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

// Project Box Component
const ProjectBox = ({
  number,
  title,
  technologies,
  imageNumber,
  githubLink,
  demoLink,
  caseStudyLink,
  delay = 0,
}) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
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

const Home = () => {
  // State management
  const spotlightTopRef = useRef(null);
  const spotlightBottomRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    website: "",
    email: "",
    message: "",
    agreedToPolicy: false,
  });
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Effects
  useEffect(() => {
    const tl = gsap.timeline();
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    tl.to(spotlightTopRef.current, {
      scale: 0.5,
      duration: 1.5,
      ease: "power2.inOut",
    }).to(
      spotlightBottomRef.current,
      {
        scale: 0.7,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );

    return () => tl.kill();
  }, []);

  // Handlers
  const handlePolicyAccept = () => {
    setFormData((prev) => ({ ...prev, agreedToPolicy: true }));
    setIsPolicyModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company || "N/A",
          website: formData.website || "N/A",
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setIsSuccessModalOpen(true);
      setFormData({
        fullName: "",
        company: "",
        website: "",
        email: "",
        message: "",
        agreedToPolicy: false,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Projects data
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

  // Section component
  const Section = ({ id, children }) => (
    <motion.section
      id={id}
      className="relative w-full py-32 scroll-mt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );

  return (
    <div className="relative">
      {/* Hero Section */}
      <Section id="hero">
        <SectionHero />
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-12 lg:mb-16 font-light text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            about-me
          </motion.h1>

          <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[600px_350px] gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* About Me Box */}
              <motion.div
                className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-6 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-4 sm:mb-6 border-b border-white/10 pb-2">
                  <h2 className="text-2xl font-mono mb-2">about-me</h2>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="space-y-6 text-sm text-white/80">
                  {/* Global Explorer */}
                  <div className="space-y-2">
                    <h3 className="text-white font-medium text-base">
                      Global Perspective
                    </h3>
                    <p>
                      A world traveler at heart, having lived in 4 countries and
                      explored all 5 continents, visiting over 250 cities. This
                      global exposure has shaped my perspective on technology's
                      role in connecting and improving lives across cultures.
                      Besides travel my hobbies include sailing, rock climbing,
                      volleyball and filming.
                    </p>
                  </div>

                  {/* Creative Origins */}
                  <div className="space-y-2">
                    <h3 className="text-white font-medium text-base">
                      From Arts to Tech
                    </h3>
                    <p>
                      My journey began in fine arts, where I discovered a
                      natural talent for drawing and painting, leading to a
                      degree in art education. Growing up alongside the digital
                      revolution, my passion for computers and gaming naturally
                      evolved into exploring digital and interior design. This
                      creative foundation became the springboard for my entry
                      into the tech world.
                    </p>
                  </div>

                  {/* Entrepreneurial Journey */}
                  <div className="space-y-2">
                    <h3 className="text-white font-medium text-base">
                      Startup Adventures
                    </h3>
                    <p>
                      The intersection of creativity and technology led me to
                      co-found three startups, where I managed and marketed
                      diverse real estate portfolios across Europe and the USA.
                      Working closely with developers and immersing myself in
                      the tech ecosystem sparked a deeper fascination with
                      software development.
                    </p>
                  </div>

                  {/* Tech Transition */}
                  <div className="space-y-2">
                    <h3 className="text-white font-medium text-base">
                      Embracing Development
                    </h3>
                    <p>
                      Recently graduated from Career Foundry's Full Stack
                      Development program, I've built a strong foundation in
                      coding with expertise in React, JavaScript, Node.js, and
                      Angular. My background in design and marketing brings a
                      unique perspective to creating user-centric solutions.
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="space-y-2">
                    <h3 className="text-white font-medium text-base">
                      Pursuing My Dream
                    </h3>
                    <p>
                      I'm fascinated by today's rapidly evolving technology
                      landscape, particularly in AI and automation. Seeking
                      opportunities to merge my business experience with
                      technical skills, I aim to contribute to forward-thinking
                      companies that create innovative solutions that have a
                      meaningful impact on people's lives.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* My Hobbies Box */}
              <motion.div
                className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="flex justify-between items-center mb-4 sm:mb-6 border-b border-white/10 pb-2">
                  <h2 className="text-2xl font-mono mb-2">my-hobbies</h2>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {hobbiesImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Portrait Box */}
              <motion.div
                className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                  <h2 className="text-2xl font-mono mb-2">portrait</h2>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>
                <img
                  src={profile500x500}
                  alt="Ian Baumeister"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </motion.div>

              {/* Skills Box */}
              <motion.div
                className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                  <h2 className="text-2xl font-mono mb-2">skilled-in</h2>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>
                <ul className="columns-2 gap-8 text-sm text-white/80">
                  <li className="break-inside-avoid mb-3">React Development</li>
                  <li className="break-inside-avoid mb-3">JavaScript</li>
                  <li className="break-inside-avoid mb-3">Node.js</li>
                  <li className="break-inside-avoid mb-3">Angular</li>
                  <li className="break-inside-avoid mb-3">API</li>
                  <li className="break-inside-avoid mb-3">
                    HTML and CSS / SCSS
                  </li>
                  <li className="break-inside-avoid mb-3">
                    Full-Stack Technologies
                  </li>
                  <li className="break-inside-avoid mb-3">
                    Agile Methodologies
                  </li>
                  <li className="break-inside-avoid mb-3">Web Design</li>
                  <li className="break-inside-avoid mb-3">Wireframing</li>
                  <li className="break-inside-avoid mb-3">Coding</li>
                  <li className="break-inside-avoid mb-3">Troubleshooting</li>
                  <li className="break-inside-avoid mb-3">Debugging</li>
                  <li className="break-inside-avoid mb-3">Testing</li>
                  <li className="break-inside-avoid mb-3">Adobe Suite</li>
                </ul>
              </motion.div>

              {/* Where I Work Box */}
              <motion.div
                className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                  <h2 className="text-2xl font-mono mb-2">where-i-work</h2>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex gap-2">
                    <span className="text-white/50 flex-shrink-0">1.</span>
                    <p>Currently based in Berlin, Germany</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-white/50 flex-shrink-0">2.</span>
                    <p>
                      Looking for a productive and intense full time
                      collaboration
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Resume Download Box */}
              <motion.div
                className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                  <h2 className="text-2xl font-mono mb-2">my-resume</h2>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>
                <a
                  href={resumePDF}
                  download="Ian Buimistr - Junior Full Stack Developer Resume.pdf"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <span className="text-white/50">1.</span>
                  <span>Download Resume</span>
                  <FileText size={16} className="ml-1" />
                </a>
              </motion.div>

              {/* Me Online Box */}
              <motion.div
                className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                  <h2 className="text-2xl font-mono mb-2">me-online</h2>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>
                <div className="space-y-4 text-sm text-white/80">
                  <a
                    href="https://www.linkedin.com/in/avoiann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white/50">1.</span>
                    <span>linkedin</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://github.com/ibxibx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white/50">5.</span>
                    <span>github</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.behance.net/ianbau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white/50">4.</span>
                    <span>behance</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.youtube.com/@avo-mango"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white/50">3.</span>
                    <span>youtube</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.instagram.com/avotravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white/50">2.</span>
                    <span>instagram</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.x.com/ibxavo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white/50">3.</span>
                    <span>x twitter</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Work Section */}
      <Section id="work">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-12 lg:mb-16 font-light text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            projects
          </motion.h1>
          <div className="max-w-[1000px] mx-auto">
            {projects.map((project, index) => (
              <ProjectBox key={index} {...project} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="container mx-auto px-4 relative">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-12 lg:mb-16 font-light text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            contact
          </motion.h1>
          <div className="max-w-[1000px] mx-auto mb-32">
            <motion.div
              className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-mono mb-2">write-me</h2>
                <p className="text-sm font-neue-machina">
                  Seeking full-time roles in technology companies.
                  <br />
                  Onsite, hybrid or remote working arrangements are welcome.
                  <br />
                  <br />
                  Reach me via this form or at ian(at)ianworks.dev
                  <br />I reply within a day, max. within 48 hours.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 font-mono relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <label className="block text-sm mb-2" htmlFor="fullName">
                    1 full-name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary focus:ring-0 focus-visible:ring-0"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" htmlFor="company">
                    2 company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary focus:ring-0 focus-visible:ring-0"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" htmlFor="website">
                    3 website
                  </label>
                  <input
                    id="website"
                    type="text"
                    className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary focus:ring-0 focus-visible:ring-0"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" htmlFor="email">
                    4 email-address*
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary focus:ring-0 focus-visible:ring-0"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" htmlFor="message">
                    5 your-message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary focus:ring-0 focus-visible:ring-0"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="rounded border-white/10"
                    checked={formData.agreedToPolicy}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreedToPolicy: e.target.checked,
                      })
                    }
                  />
                  <label htmlFor="privacy" className="text-sm">
                    I agree with the terms of the{" "}
                    <button
                      type="button"
                      onClick={() => setIsPolicyModalOpen(true)}
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-black/50 border border-white/10 rounded hover:bg-white/5 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "submit-message →"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Spotlights */}
      <div className="fixed aspect-square w-full xl:w-[800px] -right-1/4 -top-1/4 pointer-events-none">
        <div
          ref={spotlightTopRef}
          className="w-full h-full rounded-full bg-[#4ADE80] opacity-30 blur-[200px]"
        />
      </div>
      <div className="fixed aspect-square w-full xl:w-[800px] -left-1/4 -bottom-1/4 pointer-events-none">
        <div
          ref={spotlightBottomRef}
          className="w-full h-full rounded-full bg-[#4ADE80] opacity-30 blur-[200px]"
        />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="text-white" size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Modals */}
      <PrivacyPolicyModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
        onAccept={handlePolicyAccept}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
};

export default Home;
