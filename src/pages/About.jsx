import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, X } from "lucide-react";
import profile500x500 from "../assets/images/profile500x500.jpg";
import resumePDF from "../assets/docs/Ian Buimistr - Junior Full Stack Developer Resume.pdf";
import hobbies1 from "../assets/images/hobbies1.jpg";
import hobbies2 from "../assets/images/hobbies2.jpg";
import hobbies3 from "../assets/images/hobbies3.jpg";
import hobbies4 from "../assets/images/hobbies4.jpg";
import hobbies5 from "../assets/images/hobbies5.jpg";
import hobbies6 from "../assets/images/hobbies6.jpg";

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const hobbiesImages = [
    { src: hobbies1, alt: "Waterfalls" },
    { src: hobbies2, alt: "Jungle" },
    { src: hobbies3, alt: "Beach Volleyball" },
    { src: hobbies4, alt: "Sailing" },
    { src: hobbies5, alt: "Mountain Climbing" },
    { src: hobbies6, alt: "Architecture" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden font-['PP_Object_Sans']">
      <div className="h-full overflow-y-auto scrollbar-thin">
        <div className="min-h-full flex flex-col items-center p-4 sm:p-6 md:p-8">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-12 lg:mb-16 font-light"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            about-me
          </motion.h1>
          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[600px_350px] gap-6">
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
                      Besides travel, my hobbies include: sailing, rock
                      climbing, volleyball and filming.
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
                      Having recently graduated from Career Foundry's Full Stack
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
                {/* Changed from grid to columns */}
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
                    <span className="text-white/50">2.</span>
                    <span>github</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.behance.net/ianbau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white/50">3.</span>
                    <span>behance</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.youtube.com/@avo-mango"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white/50">4.</span>
                    <span>youtube</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.instagram.com/avotravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white/50">5.</span>
                    <span>instagram</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.x.com/ibxavo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-white/50">6.</span>
                    <span>x twitter</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for full-size image */}
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
    </div>
  );
};

export default About;
