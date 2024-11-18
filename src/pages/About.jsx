import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center p-8">
      <div className="max-w-[1000px] grid grid-cols-[600px_350px] gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* About Me Box */}
          <motion.div
            className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-2">
              <h2 className="text-sm font-mono">about-me</h2>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="space-y-6 text-sm text-white/80">
              <div className="flex gap-4">
                <span className="text-white/50">1.</span>
                <p>
                  Recent Career Foundry Full Stack Development graduate with a
                  passion for React development and exploring cutting-edge
                  frameworks
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-white/50">2.</span>
                <p>
                  Startup entrepreneur who has launched three startups, bringing
                  a unique blend of business acumen to software development
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-white/50">3.</span>
                <p>
                  Managed and marketed diverse real estate portfolios across
                  Europe and USA, developing both digital and traditional
                  marketing strategies
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-white/50">4.</span>
                <p>
                  Proven track record in building and leading international
                  teams across multiple industries and markets
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-white/50">5.</span>
                <p>
                  Tech enthusiast transitioning from successful business
                  ventures to full-stack development, combining entrepreneurial
                  mindset with coding expertise
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-white/50">6.</span>
                <p>
                  Currently seeking opportunities to merge business experience
                  with newly acquired technical skills to create innovative
                  digital solutions
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Box */}
          <motion.div
            className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
              <h2 className="text-sm font-mono">skilled-in</h2>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>React development</li>
              <li>Full-stack technologies</li>
              <li>Public speaking</li>
              <li>Team leadership</li>
              <li>Strategic partnerships</li>
              <li>SAAS solutions</li>
              <li>Real estate management</li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Portrait Box */}
          <motion.div
            className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
              <h2 className="text-sm font-mono">portrait</h2>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
            </div>
            <img
              src="/images/profile500x500.jpg"
              alt="Ian Baumeister"
              className="w-full rounded-lg object-cover"
            />
          </motion.div>

          {/* Where I Work Box */}
          <motion.div
            className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
              <h2 className="text-sm font-mono">where-i-work</h2>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex gap-2">
                <span className="text-white/50">1.</span>
                <p>Currently based in Berlin, Germany</p>
              </div>
              <div className="flex gap-2">
                <span className="text-white/50">2.</span>
                <p>
                  Looking for a productive and intense full time collaboration
                </p>
              </div>
            </div>
          </motion.div>

          {/* Me Online Box */}
          <motion.div
            className="bg-neutral-900/50 backdrop-blur-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
              <h2 className="text-sm font-mono">me-online</h2>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <a
                href="https://www.linkedin.com/in/avoian"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="text-white/50">1.</span>
                <span>linkedin</span>
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
                href="https://github.com/ibxibx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="text-white/50">5.</span>
                <span>github</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
