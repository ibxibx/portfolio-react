import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logoImg =
  "https://raw.githubusercontent.com/ibxibx/workscanai/main/pics/WorkScanAILogo.png";
const screenshot1 =
  "https://raw.githubusercontent.com/ibxibx/workscanai/main/pics/Screenshot1.jpg";
const screenshot2 =
  "https://raw.githubusercontent.com/ibxibx/workscanai/main/pics/Screenshot2.jpg";
const screenshot3 =
  "https://raw.githubusercontent.com/ibxibx/workscanai/main/pics/Screenshot3.jpg";
const screenshot4 =
  "https://raw.githubusercontent.com/ibxibx/workscanai/main/pics/Screenshot4.jpg";

const CaseStudyWorkScanAI = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 200);
  };
  const Modal = ({ isOpen, onClose, image }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={onClose}
          >
            <div className="relative max-w-3xl max-h-[80vh] w-auto h-auto">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative bg-black bg-opacity-20 rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={image}
                  alt="Full size view"
                  className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg"
                  loading="eager"
                />
                <button
                  onClick={onClose}
                  className="absolute top-2 right-2 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-70 hover:bg-opacity-90 transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full overflow-y-auto scrollbar-thin">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl mb-12 font-light text-center font-['PP_Object_Sans']"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Case Study
          </motion.h1>

          {/* Hero Section */}
          <section className="mb-16">
            <div className="flex flex-col items-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-64 mb-8"
              >
                <img
                  src={logoImg}
                  alt="WorkScanAI Logo"
                  className="w-full h-full object-contain rounded-lg cursor-pointer bg-white/5 p-4"
                  onClick={() => openModal(logoImg)}
                />
              </motion.div>

              <div className="text-center mb-8">
                <h2 className="text-4xl text-blue-500 font-['PP_Object_Sans'] mb-2">
                  WorkScanAI
                </h2>
                <h3 className="text-2xl text-gray-200 font-['PP_Object_Sans'] mb-4">
                  AI-Powered Workflow Analysis for the Age of Automation
                </h3>
                <br />
                <p className="mb-2">
                  <strong>AI Product Engineer:</strong> Ian Baumeister (solo
                  build)
                </p>
                <p className="mb-2">
                  <strong>Live:</strong>{" "}
                  <a
                    href="https://workscanai.vercel.app"
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    workscanai.vercel.app
                  </a>
                </p>
                <p className="mb-2">
                  <strong>GitHub Repository:</strong>{" "}
                  <a
                    href="https://github.com/ibxibx/workscanai"
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/ibxibx/workscanai
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Tech Stack:</strong> Next.js 16, TypeScript, FastAPI,
                  Python, Anthropic Claude, Turso (libSQL), Docker, Vercel,
                  Render
                </p>
                <p>
                  <strong>Timeline:</strong> April 2026 – present (in active,
                  weekly-shipped development)
                </p>
              </div>
            </div>
          </section>

          {/* Project Description */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Project Description
            </h2>
            <br />
            <div className="prose prose-lg prose-invert max-w-none font-['PP_Neue_Machina']">
              <p>
                WorkScanAI is a full-stack SaaS platform I designed, built, and
                ship solo: it analyzes a person's or team's day-to-day
                workflows and tells them, task by task, what an AI agent can
                automate today, what it can't, and what that's actually worth
                in euros and hours per year. A user submits their tasks by
                voice recording, document upload, or manual entry; the system
                scores every task for automation readiness, projects ROI,
                builds a phased implementation roadmap, and — where relevant —
                generates ready-to-import n8n automation workflows, all
                exportable as a polished PDF or DOCX report.
              </p>
              <br />
              <p>
                The idea came from watching companies debate automation in the
                abstract with no systematic way to answer the concrete
                question: <em>which of our tasks can be automated today, and
                what does that actually save us?</em> WorkScanAI answers that
                in minutes across three contexts — Individual, Team, and
                Company — instead of the months a manual consulting engagement
                would take.
              </p>
              <br />
              <p>
                Architecturally it's a Next.js 16 / TypeScript frontend talking
                to a FastAPI / Python backend, with Anthropic's Claude models
                doing the actual task extraction and automation scoring, Turso
                (a distributed libSQL/SQLite-compatible cloud database) for
                persistence, and Docker for a reproducible local dev
                environment mirroring the two-service split used in
                production (frontend on Vercel, backend on Render).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col items-center">
                <img
                  src={screenshot1}
                  alt="WorkScanAI Landing Page"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(screenshot1)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  Landing page
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={screenshot2}
                  alt="WorkScanAI Input Methods"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(screenshot2)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  Voice, document, or manual task input
                </p>
              </div>
            </div>
          </section>
          <br />

          {/* Project Objectives */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Project Objectives
            </h2>
            <br />
            <ul className="list-disc list-inside space-y-2 font-['PP_Neue_Machina']">
              <li>
                <strong>Turn a vague question into a scored answer:</strong>{" "}
                convert "can this be automated?" into a per-task readiness
                score, ROI number, and roadmap in under 45 seconds
              </li>
              <li>
                <strong>Serve three audiences from one engine:</strong>{" "}
                Individual, Team, and Company contexts, each with
                context-aware report sections and role-specific strategy
              </li>
              <li>
                <strong>Make the product usable in Germany:</strong> ship full
                EN/DE localization and a GDPR/TTDSG-compliant consent flow, not
                as an afterthought but as a first-class requirement
              </li>
              <li>
                <strong>Close the loop from insight to action:</strong>{" "}
                generate real, importable n8n automation workflows instead of
                stopping at "this task is automatable"
              </li>
              <li>
                <strong>Build for a cold-start, low-cost hosting reality:</strong>{" "}
                design the UX around Render's free-tier cold starts rather than
                pretending they don't exist
              </li>
              <li>
                <strong>Instrument everything:</strong> first-party and
                PostHog analytics, an admin dashboard, and funnel tracking from
                day one, so product decisions are based on real usage, not
                guesses
              </li>
              <li>
                <strong>Treat security as a feature, not a patch:</strong>{" "}
                centralize secrets, remove hardcoded bypasses, and add
                brute-force protection before, not after, an incident
              </li>
            </ul>
          </section>
          <br />

          {/* Tech Stack and Specs */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Tech Stack and Specifications
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">Frontend</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Next.js 16</strong> (App Router) + React 19 +
                    TypeScript
                  </li>
                  <li>
                    <strong>Tailwind CSS</strong> for styling, fully responsive
                    down to small phones
                  </li>
                  <li>
                    <strong>Server-Sent Events (SSE)</strong> for live
                    multi-stage analysis progress
                  </li>
                  <li>
                    <strong>next/og</strong> dynamic Open Graph image
                    generation for shared reports
                  </li>
                  <li>
                    <strong>Vercel</strong> deployment with programmatic SEO
                    role pages
                  </li>
                </ul>
                <br />
                <h3 className="text-xl mb-4">Backend</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>FastAPI</strong> (Python) with async routes for
                    extraction, analysis, reports, auth, and admin
                  </li>
                  <li>
                    <strong>Anthropic Claude</strong> — Haiku for fast task
                    extraction, larger models for automation scoring and
                    roadmap generation
                  </li>
                  <li>
                    <strong>Turso (libSQL)</strong> — persistent, distributed
                    cloud database (replacing an earlier local SQLite setup)
                  </li>
                  <li>
                    <strong>Docker</strong> — containerized local dev
                    environment mirroring the production frontend/backend split
                  </li>
                  <li>
                    <strong>Render</strong> deployment with keep-alive and
                    cold-start recovery logic
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-col items-center">
                  <img
                    src={screenshot3}
                    alt="Analysis Results and ROI"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(screenshot3)}
                  />
                  <p className="text-sm text-center text-gray-400 mt-2">
                    Analysis results &amp; ROI projection
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={screenshot4}
                    alt="Implementation Roadmap"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(screenshot4)}
                  />
                  <p className="text-sm text-center text-gray-400 mt-2">
                    Phased implementation roadmap
                  </p>
                </div>
              </div>
            </div>
          </section>
          <br />

          {/* Feature deep dive: SSE + cold start */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Live-Progress Streaming &amp; Cold-Start UX
            </h2>
            <br />
            <div className="prose prose-lg prose-invert max-w-none font-['PP_Neue_Machina']">
              <p>
                Running on Render's free tier means the backend spins down
                after inactivity, so the first request after idle time can
                take 30-60 seconds. Rather than hide that, I designed for it: I
                added an SSE-based{" "}
                <code>/api/analyze</code> stream that pushes each analysis
                stage (extracting tasks, scoring automation readiness,
                calculating ROI, building the roadmap) to the frontend in real
                time, backed by a dedicated unit test suite for the stage
                generator.
              </p>
              <p>
                Every entry point also does a "wake-ping" health check first,
                and shows a warm-up toast if the server is still spinning up,
                so a slow first request reads as progress instead of a broken
                app. Uploads and document parsing got the same treatment:
                automatic retries (up to three attempts) against cold-start
                500s, a persistent progress overlay that survives switching
                input modes mid-upload, and honest error messages when parsing
                genuinely fails rather than a silent hang.
              </p>
            </div>
          </section>
          <br />

          {/* Feature deep dive: n8n */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              From Score to Action: The n8n Automation Library
            </h2>
            <br />
            <div className="prose prose-lg prose-invert max-w-none font-['PP_Neue_Machina']">
              <p>
                Early on I wired automation suggestions to n8n's public
                template search API, which turned out to be unreliable and
                returned results that didn't actually match the task category.
                Rather than paper over it, I replaced it entirely with a
                curated, purpose-built workflow library: it started at 20 job
                function categories (PM, Marketing, Sales, HR, Finance, Design,
                DevOps, Legal, Content, Product, Support, plus 10 core
                categories) and grew to 40 categories and 130 aliases covering
                everything from SEO and Social to Healthcare, Compliance, and
                Investor Relations, each mapped to real, working
                Jira/Slack/Gmail/Sheets/Calendar-style integration templates
                instead of generic placeholders.
              </p>
              <p>
                Every analysis type — not just the job-title scanner — now
                generates a merged n8n canvas per task, downloadable directly
                from the report, with an admin backfill endpoint to
                regenerate canvases for existing workflows as the library
                improved.
              </p>
            </div>
          </section>
          <br />

          {/* Feature deep dive: i18n + GDPR */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Full EN/DE Localization &amp; GDPR/TTDSG Compliance
            </h2>
            <br />
            <div className="prose prose-lg prose-invert max-w-none font-['PP_Neue_Machina']">
              <p>
                Building for a Berlin/EU audience meant localization couldn't
                be a token language switcher. I rolled out German coverage in
                deliberate, tracked stages across the whole product surface:
                landing page and language toggle infrastructure first, then
                the auth pages, dashboard, role and job-scan pages, the entire
                multi-step workflow form (progress states, error and
                rate-limit messaging included), the results and report pages
                section by section (task breakdown, AI-readiness badges,
                individual/team/company blocks, n8n export section, email
                gate), transactional emails, and finally the generated PDF
                report itself — down to locale-aware currency and hour-unit
                formatting so a German user sees "Std." and € formatted
                correctly rather than a literal translation.
              </p>
              <p>
                I finished the rollout with a dedicated QA pass to catch
                English string leaks and align German terminology across
                surfaces, and built a 3D flag toggle for the language switch
                so the control itself felt considered rather than bolted on.
              </p>
              <br />
              <p>
                Alongside localization I implemented a GDPR/TTDSG-compliant
                cookie consent flow with dedicated Privacy and Impressum pages
                — a legal requirement for any product actually serving German
                users that's easy to skip when you're moving fast, and that I
                treated as a launch blocker rather than a nice-to-have.
              </p>
            </div>
          </section>
          <br />

          {/* Feature deep dive: analytics + admin */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Analytics, Growth Instrumentation &amp; Admin Dashboard
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">First-Party + PostHog</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Server-side PostHog analytics on both workflow and
                    analysis events, plus session replay and six funnel events
                  </li>
                  <li>
                    A separate first-party traffic-tracking layer with
                    country/region/city resolution, independent of third-party
                    cookies
                  </li>
                  <li>
                    Niche audience attribution as PostHog super properties, so
                    traffic from the dedicated Job Scanner landing is
                    distinguishable from the general funnel
                  </li>
                  <li>
                    Viewer-to-creator conversion tracking on shared reports
                    (the product's k-factor / viral loop)
                  </li>
                </ul>
              </div>
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">Admin Dashboard</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Geo time filters with percentages, top-7 Visits-by-Country
                    and Visits-by-City cards
                  </li>
                  <li>
                    Confidence-backfill tooling for retroactively improving
                    older analyses
                  </li>
                  <li>
                    Growth surfaces built on top of the same data: a
                    public sample-report gallery, a vertical-templates gallery
                    (industry-specific sample wedges), programmatic SEO/GEO
                    role pages, one-click LinkedIn sharing with a dynamic OG
                    image, an email-gated full report for lead capture, and an
                    automated "quick win of the week" T+3 retention email
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <br />
          <br />

          {/* User Stories */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              User Stories
            </h2>
            <br />
            <ul className="list-disc list-inside space-y-4 font-['PP_Neue_Machina']">
              <li>
                As a job seeker, I want to type in any job title and instantly
                see which of its tasks are already automatable, so I can
                understand how AI-exposed my role is and where to focus my own
                upskilling.
              </li>
              <li>
                As a team lead, I want to upload our task list or describe our
                workflow by voice and get back a scored, ROI-ranked automation
                roadmap in minutes, so I can bring a concrete business case to
                leadership instead of a vague "we should look into AI."
              </li>
              <li>
                As a non-English-speaking German user, I want the entire
                product — forms, results, PDF report, emails — in fluent
                German with correctly formatted currency and hours, so the
                report reads as genuinely local rather than machine-translated.
              </li>
              <li>
                As someone evaluating a task for automation, I want a
                ready-to-import n8n workflow attached to the recommendation, so
                the output is something I can actually deploy, not just a
                score on a page.
              </li>
              <li>
                As the product owner, I want an admin dashboard with real
                traffic, funnel, and geographic data, so I can see what's
                actually working and iterate on the parts of the funnel that
                are leaking users.
              </li>
            </ul>
          </section>
          <br />

          {/* Implementation Journey */}
          <section className="space-y-12 mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
              Implementation Journey
            </h2>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-2">
                  Phase 1 (April): Core Analysis Engine &amp; Mobile-First Pass
                </h3>
                <p>
                  Built the core extraction-to-report pipeline: task
                  extraction from job titles and documents, Claude-based
                  automation scoring, PDF report generation, and n8n workflow
                  suggestions. In parallel I ran an early, deliberate mobile
                  responsiveness pass — nav truncation, form heading sizes, tab
                  labels, dashboard cards — because most first-touch traffic to
                  a shared report link is on a phone, not a desktop.
                </p>
              </div>

              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-2">
                  Phase 2 (May): Reliability &amp; SSE Streaming
                </h3>
                <p>
                  Shipped SSE-based live progress for the analyze endpoint with
                  a dedicated cold-start UX overhaul and its own unit test
                  suite for the streaming stage generator — merged via the
                  project's first formal pull request.
                </p>
              </div>

              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-2">
                  Phase 3 (June): Growth, Analytics &amp; Security Hardening
                </h3>
                <p>
                  Integrated PostHog and first-party traffic tracking, built
                  the admin dashboard's geo/traffic views, shipped the
                  email-gated full report and n8n download as a lead-capture
                  mechanism, added one-click LinkedIn sharing and a
                  sample-report gallery, and ran a security pass that removed
                  hardcoded admin secrets and owner-IP bypasses from source,
                  replaced fabricated competitor benchmark figures with
                  sourced data, and centralized secret management with a
                  fail-loud config and a pre-commit secret-leak guard.
                </p>
              </div>

              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-2">
                  Phase 4 (July): Full Localization, Compliance &amp; Polish
                </h3>
                <p>
                  Executed the staged EN/DE localization rollout across every
                  surface of the product (see above), shipped GDPR/TTDSG
                  cookie consent and legal pages, added OTP brute-force
                  protection with CSPRNG codes, built the 3D flag language
                  toggle, expanded the sample-report gallery and vertical
                  templates grid, and closed the loop with a full README and
                  documentation overhaul reflecting everything shipped.
                </p>
              </div>
            </div>
          </section>
          <br />
          <br />

          {/* Technical Challenges */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Technical Challenges &amp; Solutions
            </h2>
            <br />
            <div className="space-y-8 font-['PP_Neue_Machina']">
              <div>
                <h3 className="text-xl mb-4">
                  Challenge 1: An Unreliable Third-Party Automation API
                </h3>
                <p>
                  n8n's public template search returned mismatched or broken
                  results for most task categories, which made automation
                  suggestions look unreliable at the exact moment I needed them
                  to build trust.
                </p>
                <p>
                  <strong>Solution:</strong> I replaced the API dependency
                  entirely with a self-maintained, curated workflow library —
                  40 categories and 130 aliases of real integration templates —
                  trading a "free" external API for a source of truth I fully
                  control and can extend on demand.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 2: Silent Failures on Render's Cold Starts
                </h3>
                <p>
                  The free-tier backend spinning down after idle time meant
                  the first request after a lull could time out or 500,
                  presenting as a broken app rather than a slow one.
                </p>
                <p>
                  <strong>Solution:</strong> wake-ping health checks before key
                  actions, automatic retries on cold-start 500s, SSE-driven
                  live progress instead of a spinner, and a warm-up toast that
                  reframes the wait as visible progress. This turned a
                  reliability problem into a UX design problem I could
                  actually solve.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 3: A Detached-Session Write Bug in Turso
                </h3>
                <p>
                  Writing the generated n8n workflow JSON back to the database
                  intermittently failed silently because the ORM session had
                  already been detached by the time the write happened.
                </p>
                <p>
                  <strong>Solution:</strong> traced it to the session
                  lifecycle, then switched that specific write path to a raw
                  SQL <code>UPDATE</code> against a direct Turso connection,
                  bypassing the stale session state entirely and making the
                  download-after-generate flow reliable.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 4: An Invalid Model String Taking Down Extraction
                </h3>
                <p>
                  A typo'd Claude model identifier in the extraction routes
                  caused silent 500s on parse-tasks and extract-tasks — the
                  kind of bug that's invisible until a real user hits it.
                </p>
                <p>
                  <strong>Solution:</strong> corrected the model strings across
                  every extraction route and standardized on
                  claude-haiku-4-5 for the fast extraction path, then added
                  real error surfacing on upload failures so the next
                  regression would show an actual message instead of a silent
                  hang.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 5: Secrets and Bypasses Living in Source Control
                </h3>
                <p>
                  An admin secret and an owner-IP quota bypass had been
                  hardcoded directly into route files — functional, but a real
                  security liability the moment the repository is public.
                </p>
                <p>
                  <strong>Solution:</strong> centralized all secret handling
                  behind a fail-loud config module, removed every hardcoded
                  fallback, added a pre-commit hook that scans for leaked
                  secrets before they can be committed, and separately
                  hardened the OTP login flow itself with brute-force locking
                  and CSPRNG-generated codes.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 6: A Turbopack Tree-Shaking Bug Silently Breaking a
                  Quota Check
                </h3>
                <p>
                  A quota-check function scoped inside a component was being
                  tree-shaken out by Turbopack in a way that only broke in
                  production, silently disconnecting the rate-limit modal from
                  three of the four entry buttons.
                </p>
                <p>
                  <strong>Solution:</strong> moved the check to module scope
                  so the bundler couldn't strip it, forced a chunk rebuild to
                  confirm the fix, and added a pre-flight quota check on all
                  four entry points so the modal fires before any work starts
                  rather than after a failed request.
                </p>
              </div>
            </div>
          </section>
          <br />
          <br />

          {/* Results */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Results
            </h2>
            <br />
            <div className="prose prose-lg prose-invert max-w-none font-['PP_Neue_Machina']">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Full analysis pipeline — extraction, scoring, ROI, roadmap,
                  n8n export — running end-to-end in under 45 seconds
                </li>
                <li>
                  100% of the product surface (forms, results, PDF reports,
                  transactional emails) available in both English and German
                </li>
                <li>
                  40-category, 130-alias self-maintained automation workflow
                  library replacing an unreliable third-party API
                </li>
                <li>
                  GDPR/TTDSG-compliant consent flow and legal pages shipped as
                  a launch requirement, not an afterthought
                </li>
                <li>
                  Admin dashboard with live traffic, funnel, and geographic
                  analytics across PostHog and a first-party tracking layer
                </li>
                <li>
                  A security hardening pass that removed every hardcoded
                  secret and bypass from source and added a pre-commit
                  secret-leak guard
                </li>
              </ul>
            </div>
          </section>
          <br />
          <br />

          {/* Skills Acquired */}
          <section className="space-y-8 mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
              Skills Acquired
            </h2>
            <div className="space-y-6 font-['PP_Neue_Machina']">
              <div>
                <h3 className="text-xl mb-4">Backend &amp; AI Engineering:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Building and operating a production FastAPI backend with
                    async routes, streaming responses, and a real test suite
                  </li>
                  <li>
                    Orchestrating multiple Claude models for different jobs in
                    the same pipeline (fast extraction vs. deeper scoring),
                    and debugging model-string and prompt-shape failures in
                    production
                  </li>
                  <li>
                    Working with Turso/libSQL as a distributed cloud database,
                    including diagnosing session-lifecycle bugs that don't
                    show up in local SQLite
                  </li>
                  <li>
                    Containerizing a two-service app with Docker for a local
                    environment that actually mirrors production
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Product &amp; Growth Engineering:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Designing UX around infrastructure constraints (Render
                    cold starts) instead of hiding them
                  </li>
                  <li>
                    Instrumenting a product end-to-end with PostHog and
                    first-party analytics, and turning that data into an admin
                    dashboard
                  </li>
                  <li>
                    Building growth loops (viral share, email-gated lead
                    capture, retention email) directly into the core product
                    experience
                  </li>
                  <li>
                    Running a staged, QA'd full localization rollout across an
                    entire product surface, not just UI strings
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Security &amp; Compliance:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Recognizing and removing hardcoded secrets and bypasses
                    from a live codebase, and building process (pre-commit
                    guard) to stop it recurring
                  </li>
                  <li>
                    Implementing GDPR/TTDSG-compliant consent flows for the
                    German market as a legal, not just technical, requirement
                  </li>
                  <li>
                    Hardening authentication against brute force with CSPRNG
                    codes and lockouts
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Debugging Discipline:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Tracing a production-only Turbopack tree-shaking bug back
                    to a function's scope, not its logic
                  </li>
                  <li>
                    Treating "it works locally" as a starting point, not a
                    conclusion, especially around bundlers, cold starts, and
                    ORM session lifecycles
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <br />
          <br />

          {/* Final Thoughts */}
          <section className="space-y-8 mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
              Final Thoughts and Reflections
            </h2>
            <div className="space-y-6 font-['PP_Neue_Machina']">
              <p>
                WorkScanAI is the project where I stopped building demos and
                started building a product. Every feature above came from a
                real gap I hit while trying to make the thing usable by an
                actual German-speaking user on a slow connection, not from a
                feature wishlist — the localization rollout, the cold-start
                UX, the security hardening pass, all started as "this is
                embarrassing if a real user hits it" problems.
              </p>
              <p>
                It's also the project that forced me to own the full stack in
                a way none of my previous work did: choosing and defending
                Turso over SQLite for a persistent production database,
                debugging a bundler-level bug instead of a logic bug, deciding
                GDPR compliance was a blocker rather than a backlog item. Those
                are product-engineering decisions as much as coding ones.
              </p>
              <p>
                The most useful lesson was about automation itself, ironically:
                building a tool that tells other people what to automate made
                me automate my own development loop — n8n's own library became
                unreliable, so I built and now own a better one; cold starts
                were a hosting fact I couldn't remove, so I designed around
                them instead.
              </p>
              <p>
                WorkScanAI is still shipping weekly. The roadmap from here is
                more about depth than breadth: richer per-industry benchmarks,
                deeper n8n workflow customization, and using the admin
                dashboard's real usage data to decide what to build next
                instead of guessing.
              </p>
              <br />
              <br />
            </div>
          </section>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
    </div>
  );
};

export default CaseStudyWorkScanAI;
