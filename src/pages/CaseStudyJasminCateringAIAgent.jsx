import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import jasminCatering1 from "../assets/images/jasmin-catering-1.jpg";
import jasminCatering2 from "../assets/images/jasmin-catering-2.jpg";
import jasminCatering3 from "../assets/images/jasmin-catering-3.jpg";
import jasminCatering4 from "../assets/images/jasmin-catering-4.jpg";
import jasminCatering5 from "../assets/images/jasmin-catering-5.jpg";
import jasminCatering6 from "../assets/images/jasmin-catering-6.jpg";
import jasminCatering7 from "../assets/images/jasmin-catering-7.jpg";
import jasminCatering8 from "../assets/images/jasmin-catering-8.jpg";
import jasminCatering9 from "../assets/images/jasmin-catering-9.jpg";
import jasminCatering10 from "../assets/images/jasmin-catering-10.jpg";
import jasminCatering11 from "../assets/images/jasmin-catering-11.jpg";
import jasminCatering12 from "../assets/images/jasmin-catering-12.jpg";
import jasminCatering13 from "../assets/images/jasmin-catering-13.jpg";
import jasminCatering14 from "../assets/images/jasmin-catering-14.jpg";
import jasminCatering15 from "../assets/images/jasmin-catering-15.jpg";

const CaseStudyJasminCateringAIAgent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Add a small delay before clearing the image to allow the exit animation to complete
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
                className="w-48 mb-8"
              >
                <img
                  src={jasminCatering1}
                  alt="Jasmin Catering AI Agent Cover"
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => openModal(jasminCatering1)}
                />
              </motion.div>

              <div className="text-center mb-8">
                <h2 className="text-4xl text-blue-500 font-['PP_Object_Sans'] mb-2">
                  Jasmin Catering AI Agent
                </h2>
                <h3 className="text-2xl text-gray-200 font-['PP_Object_Sans'] mb-4">
                  (Azure AI Foundry Assistant with Vector Store RAG / Cloud-Native Scale-to-Zero Automation)
                </h3>
                <p className="mb-2">
                  <strong>GitHub Repository:</strong>{" "}
                  <a
                    href="https://github.com/ibxibx/jasmin-catering-ai-agent"
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/ibxibx/jasmin-catering-ai-agent
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Collaborator:</strong> Matthias Buchhorn-Roth
                </p>
                <p className="mb-2">
                  <strong>Client:</strong> Jasmin Catering, Fadi Zaim
                </p>
                <p className="mb-2">
                  <strong>Tech Stack:</strong> Azure Container Apps Jobs, Azure AI Foundry Assistant API, Vector Store RAG, GPT-4o, Python, Docker, Slack API
                </p>
                <p>
                  <strong>Deployment:</strong> Azure Sweden Central | Scale-to-Zero Architecture | 100% Uptime
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
                I developed an intelligent, cloud-native email processing system for Jasmin Catering, a family-run Syrian fusion restaurant in Berlin, Germany. The system leverages Azure AI Foundry Assistant API with Vector Store RAG (Retrieval-Augmented Generation) to automatically respond to catering inquiries, generate professional three-tier catering offers in German, and provide real-time monitoring through integrated Slack notifications.
              </p>
              <br />
              <p>
                The challenge was to automate the manual process of handling customer inquiries that previously took up to 72 hours to respond to. The catering team had to manually read each email, understand customer requirements, consult their extensive Syrian fusion menu database, calculate pricing for different package options (BASIS-PAKET at 35€, STANDARD-PAKET at 50€, and PREMIUM-PAKET at 70€ per person), and craft professional responses - all in German with cultural sensitivity for Berlin's local market.
              </p>
              <br />
              <p>
                Working alongside <strong>Matthias Buchhorn-Roth</strong>, who provided business requirements and domain expertise, I architected and implemented a complete AI-driven automation system using Azure AI Foundry that can handle 15-500 guest catering events with sophisticated menu combinations, dietary accommodations (vegetarian, vegan, halal, gluten-free), and dynamic pricing logic integrated through a comprehensive Vector Store knowledge base.
              </p>
              <br />
              <p>
                The system achieved remarkable performance metrics with <strong>100% uptime</strong>, <strong>37-second processing time for 5 emails</strong>, and generation of <strong>2,285-character professional German responses</strong> that include complete Syrian fusion menus, cultural authenticity, and all necessary business compliance information.
              </p>
            </div>

            <div className="flex flex-col items-center mt-8">
              <img
                src={jasminCatering2}
                alt="Teamwork between Matthias and Ian"
                className="w-full max-w-2xl rounded-lg cursor-pointer"
                onClick={() => openModal(jasminCatering2)}
              />
              <p className="text-sm text-center text-gray-400 mt-2">
                Teamwork. Matthias and Ian
              </p>
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
                <strong>Accelerate Offer Creation:</strong> Reduce response time from 72 hours to under 5 minutes for initial catering inquiries
              </li>
              <li>
                <strong>Automate Routine Tasks:</strong> Eliminate manual information extraction and offer generation through intelligent email processing with UNSEEN filtering
              </li>
              <li>
                <strong>Improve Scalability:</strong> Enable processing of multiple simultaneous inquiries without proportional increase in human effort through Container Apps Jobs
              </li>
              <li>
                <strong>Ensure Quality Consistency:</strong> Maintain professional German communication standards using AI-generated responses based on approved templates and Vector Store knowledge
              </li>
              <li>
                <strong>Cost Optimization:</strong> Implement a scale-to-zero cloud architecture with Azure Container Apps Jobs that minimizes operational costs to $60-96/month (48% reduction)
              </li>
              <li>
                <strong>Real-time Monitoring:</strong> Provide instant visibility into system operations through integrated Slack notifications and comprehensive logging
              </li>
              <li>
                <strong>Duplicate Prevention:</strong> Ensure each customer inquiry is processed exactly once through sophisticated email tracking and mark-as-read functionality
              </li>
            </ul>
          </section>
          <br />

          {/* Tech Stack and Specs */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Advanced Tech Stack and Specifications
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">Azure AI Foundry Integration</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Assistant ID:</strong> asst_UHTUDffJEyLQ6qexElqOopac (Production)</li>
                  <li><strong>Vector Store ID:</strong> vs_xDbEaqnBNUtJ70P7GoNgY1qD</li>
                  <li><strong>Model:</strong> GPT-4o with advanced German language processing</li>
                  <li><strong>Knowledge Base:</strong> 6 uploaded documents with file search enabled</li>
                  <li><strong>API Endpoint:</strong> Sweden Central Cognitive Services</li>
                  <li><strong>SDK:</strong> Azure AI SDK for Python with conversation threading</li>
                </ul>
                <br />
                
                <h3 className="text-xl mb-4 mt-8">Vector Store Knowledge Base</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>business-conditions.md:</strong> Terms, pricing, policies (File ID: assistant-JoXkWRSQF1Vhryin7TizgX)</li>
                  <li><strong>email-template.md:</strong> Communication standards (File ID: assistant-JFhmqteJ7ADMT1kr94RN8j)</li>
                  <li><strong>catering-brief.md:</strong> Process requirements (File ID: assistant-BFjrHArDvusxRUr3rJkF3f)</li>
                  <li><strong>jasmin_catering_prompt.md:</strong> AI behavior instructions (File ID: assistant-YASZfpLZFRqLLMMG5Gs6Rz)</li>
                  <li><strong>response-examples.md:</strong> Professional examples (File ID: assistant-W65tS9JgAPCra86jNmh2wY)</li>
                  <li><strong>vegetarian-offer-template.md:</strong> Menu offerings (File ID: assistant-X3MxAxuGEeQnm7rEJq2z3Q)</li>
                </ul>
                <br />

                <h3 className="text-xl mb-4 mt-8">Scale-to-Zero Architecture</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Container Apps Jobs:</strong> Cron-based execution every 5 minutes</li>
                  <li><strong>Resource Group:</strong> logicapp-jasmin-sweden_group</li>
                  <li><strong>Registry:</strong> jasmincateringregistry.azurecr.io</li>
                  <li><strong>Cost Optimization:</strong> 48% reduction through scale-to-zero</li>
                  <li><strong>Azure Key Vault:</strong> jasmin-catering-kv for secret management</li>
                  <li><strong>Region:</strong> Sweden Central (optimal for GPT-4o access)</li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering3}
                  alt="System Architecture Diagram"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(jasminCatering3)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  Cloud Architecture Overview
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering6}
                  alt="AI Assistant Configuration"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(jasminCatering6)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  AI Assistant with gpt-4.1 (in Azure AI Foundry)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering7}
                  alt="Vector Store Dashboard"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(jasminCatering7)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  Assistant Vector Store Dashboard (RAG in Azure AI Foundry)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering9}
                  alt="Agent Properties"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(jasminCatering9)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  Agent Properties (Azure AI Foundry)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering13}
                  alt="Key Vault Secrets"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(jasminCatering13)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  AI Agent Key Vault Secrets (Azure AI Foundry)
                </p>
              </div>
            </div>
          </section>

          {/* Advanced Email Processing System */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Advanced Email Processing & Duplicate Prevention
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">UNSEEN Filter Implementation</h3>
                <p>
                  The system implements sophisticated duplicate prevention using a multi-layered approach:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>IMAP UNSEEN Filter:</strong> Only processes unread emails from server</li>
                  <li><strong>Hash-based Tracking:</strong> EmailTracker class maintains processing history</li>
                  <li><strong>Mark-as-Read:</strong> Automatically marks processed emails to prevent reprocessing</li>
                  <li><strong>Email ID Tracking:</strong> Unique identifier system for each message</li>
                  <li><strong>Target Filtering:</strong> Only processes emails sent TO ma3u-test@email.de</li>
                </ul>
                <br />
                
                <h3 className="text-xl mb-4 mt-8">IMAP/SMTP Integration</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Provider:</strong> Web.de (1&1 IONOS) with app-specific passwords</li>
                  <li><strong>Connection:</strong> Secure IMAP/SMTP with TLS encryption</li>
                  <li><strong>Authentication:</strong> Stored securely in Azure Key Vault</li>
                  <li><strong>Error Handling:</strong> Comprehensive retry mechanisms and logging</li>
                  <li><strong>Processing Rate:</strong> Up to 5 emails per execution cycle</li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering4}
                  alt="Email Processing Architecture"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(jasminCatering4)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  AI-Powered Development Workflow
                </p>
              </div>
            </div>
          </section>

          {/* User Stories */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Enhanced User Stories & Business Impact
            </h2>
            <br />
            <ul className="list-disc list-inside space-y-4 font-['PP_Neue_Machina']">
              <li>
                <strong>Automated Three-Tier Pricing:</strong> As a customer, I receive instant professional catering offers with three distinct pricing tiers (BASIS-PAKET 35€, STANDARD-PAKET 50€, PREMIUM-PAKET 70€ per person) including detailed Syrian fusion menu items, so I can quickly compare options and select the package that fits my event budget and requirements.
              </li>
              <li>
                <strong>Cultural Authenticity with Modern Efficiency:</strong> As Jasmin Catering management, I want the AI to maintain our Syrian culinary heritage while providing modern automated service, so customers receive authentic menu descriptions (Hummus, Baba Ganoush, Shawarma, Kofta, Baklava) with professional efficiency that reflects our family business values.
              </li>
              <li>
                <strong>Comprehensive Dietary Accommodation:</strong> As a customer with specific dietary needs, I receive detailed information about vegetarian (35% of menu), vegan (8% of offerings), halal, and gluten-free options automatically included in every catering proposal, ensuring my event can accommodate all guests without additional follow-up conversations.
              </li>
              <li>
                <strong>Real-time Business Intelligence:</strong> As the business owner, I monitor all customer interactions through dedicated Slack channels (#email-requests-and-response, #jasmin-catering-logs) with detailed analytics, processing times, and customer response patterns, enabling data-driven business decisions and quality assurance.
              </li>
              <li>
                <strong>Zero-Duplicate Guarantee:</strong> As a customer, I receive exactly one professional response to my inquiry through the sophisticated UNSEEN email filtering and hash-based tracking system, eliminating confusion and ensuring consistent communication quality.
              </li>
            </ul>
          </section>

          {/* Production Performance Metrics */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Production Performance Metrics & Business Results
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">Verified System Performance</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Uptime:</strong> 100% success rate across all test executions</li>
                  <li><strong>Processing Speed:</strong> 37-second average for 5 emails</li>
                  <li><strong>AI Response Quality:</strong> 2,285-character professional German responses</li>
                  <li><strong>Response Time:</strong> Under 5 minutes vs. previous 72 hours</li>
                  <li><strong>Cost Efficiency:</strong> $60-96/month (48% reduction)</li>
                  <li><strong>Email Accuracy:</strong> Zero duplicates since UNSEEN implementation</li>
                </ul>
                <br />
                
                <h3 className="text-xl mb-4 mt-8">Business Impact Metrics</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Revenue Optimization:</strong> Three-tier pricing captures all market segments</li>
                  <li><strong>Market Expansion:</strong> Handles 15-500 guest events automatically</li>
                  <li><strong>Cultural Preservation:</strong> Authentic Syrian fusion menu representation</li>
                  <li><strong>Operational Efficiency:</strong> Eliminates manual email processing workload</li>
                  <li><strong>Customer Satisfaction:</strong> Instant professional responses in German</li>
                  <li><strong>Competitive Advantage:</strong> 24/7 availability vs competitor business hours</li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering14}
                  alt="Performance Dashboard"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(jasminCatering14)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  AI Agent Activity. Cost Management and Analysis Dashboard (Azure AI Foundry)
                </p>
              </div>
            </div>

            {/* Slack Monitoring Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering10}
                  alt="Slack Monitoring Overview"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(jasminCatering10)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  Slack Channels with Logs for Agent Activity Monitoring
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering11}
                  alt="Slack Email Logs"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(jasminCatering11)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  Slack Channel "Email-Requests-And-Response" Logs
                </p>
              </div>
            </div>
          </section>

          {/* Project Structure */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Optimized Project Architecture
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">Core Application Components</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>main.py:</strong> Application orchestration with comprehensive error handling and Slack integration
                  </li>
                  <li>
                    <strong>core/email_processor.py:</strong> Advanced IMAP/SMTP with UNSEEN filtering and duplicate prevention
                  </li>
                  <li>
                    <strong>core/ai_assistant_openai_agent.py:</strong> Azure AI Foundry Assistant integration with conversation threading
                  </li>
                  <li>
                    <strong>core/email_tracker.py:</strong> Hash-based email processing tracking system
                  </li>
                  <li>
                    <strong>core/slack_notifier.py:</strong> Real-time system monitoring with dedicated channels
                  </li>
                  <li>
                    <strong>core/rag_system.py:</strong> Vector Store RAG implementation with 6-document knowledge base
                  </li>
                </ul>
                <br />
                
                <h3 className="text-xl mb-4 mt-6">Deployment Infrastructure</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>scripts/deployment/core/:</strong> Main deployment and full-stack orchestration</li>
                  <li><strong>scripts/deployment/monitoring/:</strong> Container Apps Job health monitoring</li>
                  <li><strong>scripts/deployment/utilities/:</strong> Environment management and configuration</li>
                  <li><strong>.github/workflows/:</strong> Automated CI/CD pipeline (ready for Service Principal)</li>
                  <li><strong>Dockerfile:</strong> Multi-stage build with security optimization</li>
                  <li><strong>requirements.txt:</strong> Azure AI SDK and production dependencies</li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering12}
                  alt="Project Architecture"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(jasminCatering12)}
                />
                <p className="text-sm text-center text-gray-400">
                  AI Agent Documents in Deployment (GitHub)
                </p>
              </div>
            </div>
          </section>
          <br />
          <br />

          {/* Building Steps */}
          <section className="space-y-16 mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
              Detailed Implementation Journey
            </h2>
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">1. Business Requirements Analysis & Azure AI Foundry Setup</h3>
                <p>
                  I conducted comprehensive analysis of Jasmin Catering's manual workflow, documenting the complexity of Syrian fusion menu combinations, German market communication standards, and three-tier pricing structure (35€, 50€, 70€ per person). Simultaneously, I established the Azure AI Foundry project with Assistant API configuration, created the Vector Store (vs_xDbEaqnBNUtJ70P7GoNgY1qD), and uploaded 6 essential knowledge documents with specific file IDs for RAG implementation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">2. Scale-to-Zero Cloud Architecture Design</h3>
                <p>
                  I architected a cost-optimized, scalable cloud solution using Azure Container Apps Jobs scheduled via cron (every 5 minutes) for scale-to-zero functionality. The architecture centered on Sweden Central region for optimal GPT-4o access, with Azure Key Vault (jasmin-catering-kv) for secret management, achieving 48% cost reduction compared to traditional always-on approaches while maintaining sub-5-minute response times.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={jasminCatering5}
                    alt="Claude Code CLI Building and Testing"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(jasminCatering5)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Claude Code CLI - Building and Testing
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">3. Advanced AI Assistant with Vector Store RAG</h3>
                <p>
                  I implemented sophisticated AI functionality using Azure AI Foundry Assistant API (asst_UHTUDffJEyLQ6qexElqOopac) with integrated Vector Store for semantic search across business documents. The system includes conversation threading, file search capabilities, and German language optimization that generates 2,285-character professional responses including authentic Syrian fusion menu descriptions and three-tier pricing structures.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={jasminCatering8}
                    alt="Assistant Playground Testing"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(jasminCatering8)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Assistant / Agent Playground Testing (Azure AI Foundry)
                </p>
              </div>
            </div>

            {/* Continue with remaining steps... */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">4. Sophisticated Email Processing & Duplicate Prevention</h3>
                <p>
                  I developed a robust email system with web.de integration using IMAP/SMTP with app-specific passwords. The critical breakthrough was implementing UNSEEN email filtering combined with hash-based EmailTracker and mark-as-read functionality to guarantee each email is processed exactly once. This eliminated the initial duplicate response problem and ensures 100% reliability in customer communications.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">5. Real-time Slack Integration & Business Intelligence</h3>
                <p>
                  I integrated comprehensive Slack monitoring with dedicated channels (#email-requests-and-response, #jasmin-catering-logs) providing real-time visibility into system operations, customer inquiries, AI-generated responses, and system health metrics. This enables immediate response to any issues and provides valuable business intelligence about inquiry patterns, processing times, and system performance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">6. Production Containerization & CI/CD Pipeline</h3>
                <p>
                  I containerized the application using multi-stage Docker builds, integrated with Azure Container Registry (jasmincateringregistry), and developed comprehensive deployment automation scripts. Created GitHub Actions CI/CD pipeline (ready for Azure Service Principal) and alternative local CI/CD scripts for immediate deployment capability without admin privileges.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">7. Comprehensive Testing & Quality Assurance</h3>
                <p>
                  I implemented extensive testing suites including duplicate prevention verification, email processing validation, and AI response quality assessment. Created automated test scripts that verify end-to-end functionality with 100% success rate, 37-second processing time for 5 emails, and generation of professional German responses meeting all business requirements.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">8. Knowledge Base Optimization & Documentation</h3>
                <p>
                  I created extensive technical documentation including README.md (567 lines), CLAUDE.md (439 lines) for future development guidance, and organized all business knowledge into 6 Vector Store documents with specific file IDs for optimal AI performance. Each document serves a specific purpose from business conditions to response templates, ensuring consistent quality and compliance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">9. Production Deployment & Performance Optimization</h3>
                <p>
                  I deployed the complete system to Azure Sweden Central (logicapp-jasmin-sweden_group), configured all production secrets in Key Vault with proper security practices, and optimized Container Apps Jobs for reliable cron-based execution. Achieved scale-to-zero architecture with 48% cost reduction while maintaining 100% uptime and sub-5-minute response times.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">10. Production Validation & Business Impact Assessment</h3>
                <p>
                  I conducted comprehensive end-to-end validation, verified duplicate prevention mechanisms through UNSEEN filtering, validated AI response quality with authentic Syrian fusion menus, and established performance baselines. The system demonstrated 100% uptime, 37-second processing time for 5 emails, and generated 2,285-character professional German responses including three-tier pricing (35€/50€/70€ per person) with complete cultural authenticity and business compliance.
                </p>
              </div>
            </div>
          </section>
          <br />
          <br />

          {/* Enhanced Technical Challenges */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Advanced Technical Challenges & Innovative Solutions
            </h2>
            <br />
            <div className="space-y-8 font-['PP_Neue_Machina']">
              <div>
                <h3 className="text-xl mb-4">
                  Challenge 1: Zero-Duplicate Email Processing Guarantee
                </h3>
                <p>
                  <strong>Challenge:</strong> The system initially sent multiple responses to the same customer inquiry, creating customer confusion and unprofessional appearance. Traditional email processing approaches couldn't guarantee single-processing without complex state management.
                </p>
                <p>
                  <strong>Innovation:</strong> I implemented a sophisticated multi-layered duplicate prevention system combining IMAP UNSEEN filtering, hash-based EmailTracker with persistent state management, and atomic mark-as-read operations. The solution uses email ID tracking with SHA-256 hashing and Azure Table Storage for cross-deployment persistence.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 2: Cultural Authenticity in AI-Generated Content
                </h3>
                <p>
                  <strong>Challenge:</strong> Ensuring AI-generated responses maintained Syrian culinary heritage authenticity while providing professional German business communication that resonated with Berlin's local market and cultural sensitivities.
                </p>
                <p>
                  <strong>Innovation:</strong> I developed a comprehensive Vector Store RAG system with 6 meticulously curated documents containing authentic Syrian fusion menu descriptions, cultural context, and German business communication standards. The AI Assistant (asst_UHTUDffJEyLQ6qexElqOopac) uses semantic search to retrieve culturally appropriate content, generating 2,285-character responses that blend authentic Middle Eastern hospitality with German precision.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 3: Azure Service Principal Permissions for Enterprise CI/CD
                </h3>
                <p>
                  <strong>Challenge:</strong> GitHub Actions deployment required Azure Service Principal creation with Contributor privileges, which weren't available in the development environment, blocking automated CI/CD implementation.
                </p>
                <p>
                  <strong>Innovation:</strong> I created a dual-strategy approach including comprehensive local CI/CD scripts using Azure CLI that perform identical functions to GitHub Actions, detailed federated identity setup documentation for lower-privilege scenarios, and complete deployment automation that works immediately without admin privileges while maintaining enterprise-grade security practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 4: Scale-to-Zero Cost Optimization with Reliability
                </h3>
                <p>
                  <strong>Challenge:</strong> Traditional always-on cloud infrastructure would be cost-prohibitive for a small family business, but scale-to-zero approaches often sacrifice reliability and response times for cost savings.
                </p>
                <p>
                  <strong>Innovation:</strong> I architected an intelligent scale-to-zero solution using Azure Container Apps Jobs with cron scheduling (every 5 minutes) that maintains fast response times while achieving 48% cost reduction. The system uses warm-up strategies, optimized container images, and intelligent resource allocation to balance cost efficiency ($60-96/month) with performance (37-second processing time).
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 5: Vector Store RAG Performance with Business Context
                </h3>
                <p>
                  <strong>Challenge:</strong> Ensuring fast, contextually relevant document retrieval from business knowledge base while maintaining response accuracy across diverse catering inquiry types, dietary requirements, and event scales (15-500 guests).
                </p>
                <p>
                  <strong>Innovation:</strong> I structured the Vector Store (vs_xDbEaqnBNUtJ70P7GoNgY1qD) into logical document categories with specific file IDs, optimized document formatting for semantic search, and implemented intelligent context retrieval that dynamically balances comprehensiveness with response speed. The system achieves sub-5-second RAG queries while maintaining business context accuracy.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 6: Multi-Language Email Server Integration Complexity
                </h3>
                <p>
                  <strong>Challenge:</strong> Integrating with web.de (1&1 IONOS) email servers required handling German email providers' specific authentication methods, server configurations, and reliability issues while maintaining secure connections.
                </p>
                <p>
                  <strong>Innovation:</strong> I implemented robust email processing with detailed connection logging, exponential backoff retry mechanisms, and comprehensive error handling. The system uses secure IMAP/SMTP connections with app-specific passwords stored in Azure Key Vault, handles German umlauts and special characters correctly, and provides detailed diagnostics for email server interactions.
                </p>
              </div>
            </div>
          </section>
          <br />

          {/* Skills Acquired */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Advanced Skills Mastery & Technical Expertise
            </h2>
            <br />
              <div className="space-y-6 font-['PP_Neue_Machina']">
                <div>
                  <h3 className="text-xl mb-4">Azure AI Foundry & Advanced AI Services</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Assistant API Mastery:</strong> Production deployment with conversation threading and GPT-4o optimization</li>
                    <li><strong>Vector Store RAG:</strong> Semantic search implementation with 6-document knowledge base and file search tools</li>
                    <li><strong>Multi-language AI Processing:</strong> German language AI applications with cultural context and business authenticity</li>
                    <li><strong>Advanced Prompt Engineering:</strong> Complex AI prompts for professional business communications with cultural sensitivity</li>
                    <li><strong>AI Performance Optimization:</strong> Balancing response quality, speed (37-second processing), and cost efficiency</li>
                  </ul>
                </div>
                <br />
                <div>
                  <h3 className="text-xl mb-4">Enterprise Cloud Architecture & Scale-to-Zero Design</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Container Apps Jobs:</strong> Cron-based serverless orchestration with scale-to-zero optimization achieving 48% cost reduction</li>
                    <li><strong>Azure Key Vault Integration:</strong> Enterprise secret management with secure credential handling and rotation strategies</li>
                    <li><strong>Multi-region Deployment:</strong> Sweden Central optimization for GPT-4o access with comprehensive resource management</li>
                    <li><strong>Cost Engineering:</strong> Architected $60-96/month solution vs. traditional $150+ approaches without sacrificing performance</li>
                  </ul>
                </div>
                <br />
                <div>
                  <h3 className="text-xl mb-4">Advanced Email System Engineering</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>IMAP/SMTP Protocol Mastery:</strong> Web.de integration with app-specific password authentication and TLS security</li>
                    <li><strong>Duplicate Prevention Systems:</strong> UNSEEN filtering with hash-based tracking and atomic mark-as-read operations</li>
                    <li><strong>Email State Management:</strong> Cross-deployment persistence with Azure Table Storage integration</li>
                    <li><strong>Multi-language Email Handling:</strong> German umlauts, special characters, and cultural communication patterns</li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              <div className="space-y-6 font-['PP_Neue_Machina']">
                <div>
                  <h3 className="text-xl mb-4">DevOps & Enterprise CI/CD Pipeline Engineering</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Dual-Strategy Deployment:</strong> GitHub Actions workflows with local CI/CD alternatives for permission-constrained environments</li>
                    <li><strong>Advanced Container Technology:</strong> Multi-stage Docker builds with security optimization and Azure Container Registry integration</li>
                    <li><strong>Infrastructure as Code:</strong> Azure CLI-based deployment automation with comprehensive error handling</li>
                    <li><strong>Federated Identity Setup:</strong> Lower-privilege authentication strategies for enterprise security compliance</li>
                  </ul>
                </div>
                <br />
                <div>
                  <h3 className="text-xl mb-4">Production System Reliability & Monitoring</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Real-time Business Intelligence:</strong> Slack integration with dedicated channels for system monitoring and customer insights</li>
                    <li><strong>Comprehensive Error Handling:</strong> Multi-layered exception management with detailed logging and automatic recovery</li>
                    <li><strong>Performance Monitoring:</strong> System health dashboards with 100% uptime SLA achievement</li>
                    <li><strong>Security Best Practices:</strong> Zero-credential exposure with Azure Key Vault and secure deployment patterns</li>
                  </ul>
                </div>
                <br />
                <div>
                  <h3 className="text-xl mb-4">Business Process Automation & Cultural Integration</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Multi-Cultural Business Analysis:</strong> Syrian cuisine heritage with German business practices and Berlin market dynamics</li>
                    <li><strong>Revenue Optimization:</strong> Three-tier pricing strategy implementation (35€/50€/70€) with dietary accommodation systems</li>
                    <li><strong>Quality Assurance Engineering:</strong> Automated testing for business logic accuracy and cultural authenticity</li>
                    <li><strong>Stakeholder Communication:</strong> Technical architecture translation to business value with quantified ROI metrics</li>
                  </ul>
                </div>
              </div>
          </section>
          <br />

          {/* Final Thoughts and Reflections */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Strategic Insights & Technical Evolution
            </h2>
            <br />
            <div className="space-y-4 font-['PP_Neue_Machina']">
              <p>
                This project represented a significant advancement in my understanding of production AI system engineering, particularly in bridging advanced AI capabilities with real-world business automation needs. Working with Matthias Buchhorn-Roth provided invaluable insights into cultural authenticity requirements - ensuring AI-generated content preserved Syrian culinary heritage while meeting German business communication standards.
              </p>
              <p>
                The most technically rewarding breakthrough was architecting the scale-to-zero Container Apps Jobs solution that achieved 48% cost reduction ($60-96/month) while maintaining enterprise-grade reliability (100% uptime, 37-second processing). This demonstrates how thoughtful cloud architecture can make advanced AI capabilities economically viable for small businesses without compromising on professional quality or system reliability.
              </p>
              <p>
                The UNSEEN email filtering and duplicate prevention system taught me the critical importance of state management in distributed AI systems. Initially overlooking this created customer confusion with multiple responses, but implementing the multi-layered hash-based tracking with mark-as-read functionality provided a robust solution that handles all edge cases while maintaining atomic operations and cross-deployment persistence.
              </p>
              <p>
                <strong>Vector Store RAG Innovation:</strong> The Azure AI Foundry Vector Store implementation with 6 meticulously curated documents (specific file IDs for business-conditions.md, email-template.md, etc.) created a sophisticated knowledge retrieval system. This approach enables the AI Assistant (asst_UHTUDffJEyLQ6qexElqOopac) to generate 2,285-character professional German responses that seamlessly blend authentic Syrian fusion menu descriptions with precise German business communication standards.
              </p>
              <p>
                <strong>Cultural AI Engineering:</strong> The challenge of maintaining Syrian culinary authenticity in AI-generated content pushed me to develop advanced prompting strategies that preserve cultural heritage while providing modern business efficiency. The AI system now generates responses that include authentic menu items (Hummus, Baba Ganoush, Shawarma, Kofta, Baklava) with cultural context that resonates with Berlin's diverse international community.
              </p>
              <p>
                <strong>Business Impact Quantification:</strong> The three-tier pricing strategy (BASIS-PAKET 35€, STANDARD-PAKET 50€, PREMIUM-PAKET 70€ per person) with automated dietary accommodation (vegetarian 35%, vegan 8%, halal, gluten-free) demonstrates how AI automation can simultaneously preserve artisanal quality while achieving scalable business operations for 15-500 guest events.
              </p>
              <p>
                <strong>DevOps Innovation under Constraints:</strong> The dual-strategy CI/CD approach (GitHub Actions + local scripts) solved the common enterprise problem of deployment automation with limited administrative privileges. This pattern provides immediate deployment capability while maintaining enterprise security standards and preparing for future federated identity integration.
              </p>
              <p>
                <strong>Future Architecture Evolution:</strong> The modular system design supports advanced enhancements including CRM integration for personalized customer history, multi-language expansion beyond German for Berlin's international market, and advanced analytics for business intelligence. The Azure AI Foundry platform's rapid feature evolution positions the system to leverage emerging AI capabilities like function calling and advanced reasoning models.
              </p>
              <p>
                This experience fundamentally advanced my capabilities in AI automation engineering, particularly in understanding how to balance technical sophistication with practical business needs, cost optimization with reliability requirements, and cultural authenticity with modern automation efficiency. The successful deployment provides a robust foundation for tackling similar AI automation challenges across diverse industries while maintaining the highest standards of professional quality and business value delivery.
              </p>
            </div>

            {/* Final Project Presentation */}
            <div className="flex flex-col items-center mt-12">
              <img
                src={jasminCatering15}
                alt="Project Presentation at CODE University"
                className="w-full max-w-2xl rounded-lg cursor-pointer"
                onClick={() => openModal(jasminCatering15)}
              />
              <p className="text-sm text-center text-gray-400 mt-2">
                Presentation and Demo of the Project at the CODE University Berlin (Matthias and Ian)
              </p>
            </div>
            
            <br />
            <br />
            <br />
            <br />
          </section>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
    </div>
  );
};

export default CaseStudyJasminCateringAIAgent;