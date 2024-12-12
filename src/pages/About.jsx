import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import profile500x500 from "../assets/images/profile500x500.jpg";
import resumePDF from "../assets/docs/Ian Buimistr - Junior Full Stack Developer Resume.pdf";

const About = () => {
  return (
    <div className="absolute inset-0 overflow-hidden font-['PP_Neue_Machina']">
      <div className="h-full overflow-y-auto scrollbar-thin">
        <div className="min-h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[600px_350px] gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              {/* About Me Box */}
              <motion.div
                className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-4 sm:p-6"
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

                <div className="space-y-4 sm:space-y-6 text-sm text-white/80">
                  <div className="flex gap-3 sm:gap-4">
                    <span className="text-white/50 flex-shrink-0">1.</span>
                    <p>
                      Career Foundry Full Stack Development graduate with a
                      passion for React development and exploring cutting-edge
                      frameworks
                    </p>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <span className="text-white/50 flex-shrink-0">2.</span>
                    <p>
                      Startup enthusiast who has launched three startups,
                      bringing a unique blend of business acumen to software
                      development
                    </p>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <span className="text-white/50 flex-shrink-0">3.</span>
                    <p>
                      Managed and marketed diverse real estate portfolios across
                      Europe and USA, developing both digital and traditional
                      marketing strategies
                    </p>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <span className="text-white/50 flex-shrink-0">4.</span>
                    <p>
                      Proven track record in building and leading international
                      teams across multiple industries and markets
                    </p>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <span className="text-white/50 flex-shrink-0">5.</span>
                    <p>
                      Tech enthusiast transitioning from successful business
                      ventures to full-stack development, combining
                      entrepreneurial mindset with coding expertise
                    </p>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <span className="text-white/50 flex-shrink-0">6.</span>
                    <p>
                      Currently seeking opportunities to merge business
                      experience with newly acquired technical skills to create
                      innovative digital solutions
                    </p>
                  </div>
                </div>
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
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-white/80">
                  <li>React Development</li>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>Angular</li>
                  <li>API</li>
                  <li>HTML and CSS / SCSS</li>
                  <li>Full-Stack Technologies</li>
                  <li>Agile Methodologies</li>
                  <li>Web Design</li>
                  <li>Wireframing</li>
                  <li>Coding</li>
                  <li>Troubleshooting</li>
                  <li>Debugging</li>
                  <li>Testing</li>
                  <li>Adobe Suite</li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
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
                <div className="space-y-2 text-sm text-white/80">
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
      </div>
    </div>
  );
};

export default About;
