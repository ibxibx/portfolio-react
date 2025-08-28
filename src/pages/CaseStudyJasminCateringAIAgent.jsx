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
                  (Azure OpenAI with RAG / Cloud-Native Automation)
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
                <p>
                  <strong>Tech Stack:</strong> Azure Container Apps Jobs, Azure OpenAI GPT-4o, Vector Store RAG, Python, Docker, Slack API
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
                I developed an intelligent, cloud-native email processing system for Jasmin Catering, a family-run Syrian fusion restaurant in Berlin, Germany. The system leverages Azure OpenAI Assistant with Vector Store RAG (Retrieval-Augmented Generation) to automatically respond to catering inquiries, generate professional catering offers in German, and provide real-time monitoring through Slack integration.
              </p>
              <br />
              <p>
                The challenge was to automate the manual process of handling customer inquiries that currently took up to 72 hours to respond to. Previously, the catering team had to manually read each email, understand customer requirements, consult their menu database, calculate pricing for different package options, and craft professional responses - all in German. My solution transforms this workflow into an automated, intelligent system that processes emails within minutes while maintaining the personal touch and quality standards expected by customers.
              </p>
              <br />
              <p>
                Working alongside <strong>Matthias Buchhorn-Roth</strong>, who provided business requirements and domain expertise, I architected and implemented a complete AI-driven automation system that can handle 15-500 guest catering events with sophisticated menu combinations and pricing logic.
              </p>
            </div>

            <div className="flex flex-col items-center mt-8">
              <img
                src={jasminCatering2}
                alt="Azure AI Assistant Demo"
                className="w-full max-w-2xl rounded-lg cursor-pointer"
                onClick={() => openModal(jasminCatering2)}
              />
              <p className="text-sm text-center text-gray-400 mt-2">
                Azure AI Assistant Processing Customer Inquiries
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
                Accelerate Offer Creation: Reduce response time from 72 hours to under 5 minutes for initial catering inquiries
              </li>
              <li>
                Automate Routine Tasks: Eliminate manual information extraction and offer generation through intelligent email processing
              </li>
              <li>
                Improve Scalability: Enable processing of multiple simultaneous inquiries without proportional increase in human effort
              </li>
              <li>
                Ensure Quality Consistency: Maintain professional German communication standards using AI-generated responses based on approved templates
              </li>
              <li>
                Cost Optimization: Implement a scale-to-zero cloud architecture that minimizes operational costs while maximizing performance
              </li>
              <li>
                Real-time Monitoring: Provide instant visibility into system operations through integrated Slack notifications
              </li>
            </ul>
          </section>

          {/* Tech Stack and Specs */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Tech Stack and Specs
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">Core Technologies</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Python 3.11: Main application runtime with comprehensive error handling and logging</li>
                  <li>Azure OpenAI GPT-4o: Advanced language model for German text generation</li>
                  <li>Azure AI Assistants API: Managed AI service with conversation threading and RAG</li>
                  <li>Vector Store RAG: Semantic search through business knowledge base with 6 documents</li>
                  <li>Azure Container Apps Jobs: Serverless container orchestration with cron scheduling</li>
                  <li>Docker: Containerized deployment with multi-stage builds</li>
                </ul>
                
                <h3 className="text-xl mb-4 mt-8">Cloud Infrastructure</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Azure Container Registry: Secure container image storage</li>
                  <li>Azure Key Vault: Centralized secret management</li>
                  <li>Azure AI Foundry: Unified AI platform for model deployment</li>
                  <li>IMAP/SMTP Integration: Direct email processing with web.de</li>
                  <li>GitHub Actions: Automated CI/CD pipeline</li>
                  <li>Slack API: Real-time system monitoring</li>
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
                  Cloud-Native System Architecture
                </p>
              </div>
            </div>
          </section>

          {/* User Stories */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              User Stories
            </h2>
            <br />
            <ul className="list-disc list-inside space-y-4 font-['PP_Neue_Machina']">
              <li>
                <strong>Customer Inquiry Processing:</strong> As a customer, I want to send a catering inquiry via email and receive three professional catering packages within minutes, so that I can quickly compare options and make informed decisions for my event.
              </li>
              <li>
                <strong>Business Owner Oversight:</strong> As Jasmin Catering management, I want to monitor all customer interactions and system responses in real-time through Slack notifications, so that I can ensure quality standards and intervene when necessary.
              </li>
              <li>
                <strong>Automated Response Generation:</strong> As the catering business, I want the system to generate contextually appropriate responses that reflect our Syrian fusion cuisine expertise and professional standards, so that customers receive high-quality service without manual intervention.
              </li>
              <li>
                <strong>Scalable Operations:</strong> As a growing catering business, I want to handle increased inquiry volume without proportionally increasing staff workload, so that we can expand our customer base while maintaining service quality.
              </li>
              <li>
                <strong>Quality Assurance & Compliance:</strong> As a business owner, I want to ensure all customer communications follow our established pricing policies, dietary accommodation standards, and professional communication guidelines, so that we maintain brand consistency and avoid pricing errors.
              </li>
            </ul>
          </section>

          {/* Project Structure */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Project Structure
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">Core Application Components</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>main.py:</strong> Application entry point with orchestration logic, error handling, and Slack integration
                  </li>
                  <li>
                    <strong>email_processor.py:</strong> IMAP/SMTP email handling with UNSEEN filtering and duplicate prevention
                  </li>
                  <li>
                    <strong>ai_assistant_openai_agent.py:</strong> Azure OpenAI Assistant integration with conversation threading
                  </li>
                  <li>
                    <strong>email_tracker.py:</strong> Hash-based email processing tracking to prevent duplicate responses
                  </li>
                  <li>
                    <strong>slack_notifier.py:</strong> Real-time system monitoring and notification management
                  </li>
                  <li>
                    <strong>rag_system.py:</strong> Vector Store RAG implementation for business knowledge retrieval
                  </li>
                </ul>
                
                <h3 className="text-xl mb-4 mt-6">Knowledge Base Documents</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Business conditions and pricing policies</li>
                  <li>Email templates and communication standards</li>
                  <li>AI agent behavior instructions</li>
                  <li>Vegetarian menu offerings</li>
                  <li>Catering brief and specifications</li>
                  <li>Professional response examples</li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={jasminCatering4}
                  alt="Project Structure"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(jasminCatering4)}
                />
                <p className="text-sm text-center text-gray-400">
                  Project Directory Structure
                </p>
              </div>
            </div>
          </section>
          <br />
          <br />

          {/* Building Steps */}
          <section className="space-y-16 mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
              Building Steps
            </h2>
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">1. Project Initialization and Requirements Analysis</h3>
                <p>
                  I began by analyzing the existing manual catering inquiry process with Matthias Buchhorn-Roth, documenting the workflow from customer inquiry to offer generation. This involved understanding the complexity of Syrian fusion menu combinations, German market communication standards, and the business's pricing structure for events ranging from 15-500 guests.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">2. Azure Cloud Architecture Design</h3>
                <p>
                  I designed a cost-effective, scalable cloud architecture using Azure services, focusing on a scale-to-zero approach to minimize operational costs. The architecture centered around Container Apps Jobs for scheduled execution, Azure OpenAI for AI capabilities, and secure secret management through Key Vault.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={jasminCatering5}
                    alt="Azure Resources Overview"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(jasminCatering5)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Azure Resources Configuration
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">3. AI Assistant Implementation with RAG</h3>
                <p>
                  I implemented the core AI functionality using Azure OpenAI Assistants API with integrated Vector Store for RAG capabilities. This involved creating a knowledge base from business documents, setting up semantic search capabilities, and configuring the GPT-4o model for German language processing.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={jasminCatering6}
                    alt="Vector Store RAG Configuration"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(jasminCatering6)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Vector Store Knowledge Base Setup
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">4. Email Processing System Development</h3>
                <p>
                  I developed a robust email processing system that connects to web.de mail servers via IMAP/SMTP, implements UNSEEN filtering to prevent duplicate processing, and includes comprehensive error handling for production reliability.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={jasminCatering7}
                    alt="Email Processing Flow"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(jasminCatering7)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Email Processing and Duplicate Prevention
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">5. Slack Integration and Monitoring</h3>
                <p>
                  I integrated Slack API for real-time system monitoring, creating dedicated channels for email requests, AI responses, and system logs. This provides immediate visibility into system operations and enables quick response to any issues.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={jasminCatering8}
                    alt="Slack Integration Dashboard"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(jasminCatering8)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Real-time Slack Monitoring Dashboard
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">6. Containerization and Deployment Automation</h3>
                <p>
                  I containerized the application using Docker with multi-stage builds, created Azure Container Registry integration, and developed deployment scripts for Container Apps Jobs with cron-based scheduling.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">7. Testing and Quality Assurance Implementation</h3>
                <p>
                  I implemented comprehensive testing including duplicate prevention verification, email processing tests, and AI response quality validation. Created automated test suites that verify end-to-end functionality.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={jasminCatering9}
                    alt="Testing Framework"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(jasminCatering9)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Automated Testing Suite
                </p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">8. Documentation and Knowledge Base Enhancement</h3>
                <p>
                  I created extensive documentation including README.md, CLAUDE.md for future development guidance, and organized all business knowledge into the RAG system for optimal AI performance.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={jasminCatering10}
                    alt="Documentation Structure"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(jasminCatering10)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Comprehensive Documentation
                </p>
              </div>
            </div>

            {/* Step 9 */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">9. Production Deployment and Optimization</h3>
                <p>
                  I deployed the system to Azure Sweden Central region, configured all production secrets in Key Vault, and optimized the Container Apps Job for reliable cron-based execution every 5 minutes.
                </p>
              </div>
            </div>

            {/* Step 10 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">10. Performance Monitoring and Final Testing</h3>
                <p>
                  I conducted comprehensive end-to-end testing, verified duplicate prevention mechanisms, validated AI response quality, and established performance baselines with 100% uptime and 37-second average processing time for 5 emails.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={jasminCatering11}
                    alt="Performance Metrics Dashboard"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(jasminCatering11)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Performance Monitoring and Metrics
                </p>
              </div>
            </div>
          </section>
          <br />
          <br />

          {/* Technical Challenges and Solutions */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Technical Challenges and Solutions
            </h2>
            <br />
            <div className="space-y-8 font-['PP_Neue_Machina']">
              <div>
                <h3 className="text-xl mb-4">
                  Challenge 1: Duplicate Email Response Prevention
                </h3>
                <p>
                  <strong>Challenge:</strong> The system was initially sending multiple responses to the same customer inquiry, causing confusion and unprofessional appearance.
                </p>
                <p>
                  <strong>Solution:</strong> I implemented a multi-layered duplicate prevention system combining IMAP UNSEEN filtering, email ID tracking with hash-based identification, and mark-as-read functionality to ensure each email is processed exactly once.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 2: German Language AI Response Quality
                </h3>
                <p>
                  <strong>Challenge:</strong> Ensuring AI-generated responses maintained professional German language standards while accurately reflecting Syrian fusion cuisine expertise and local business practices.
                </p>
                <p>
                  <strong>Solution:</strong> I developed a comprehensive RAG system with 6 carefully curated German-language documents covering menu descriptions, business conditions, and response templates. The Vector Store semantic search ensures contextually relevant information is retrieved for each inquiry.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 3: Azure Service Principal Permissions for CI/CD
                </h3>
                <p>
                  <strong>Challenge:</strong> GitHub Actions deployment required Azure Service Principal creation with admin privileges, which were not available in the development environment.
                </p>
                <p>
                  <strong>Solution:</strong> I created alternative deployment strategies including local CI/CD scripts using Azure CLI, federated identity setup guides for lower-privilege scenarios, and comprehensive documentation for both automated and manual deployment approaches.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 4: Email Server Integration Complexity
                </h3>
                <p>
                  <strong>Challenge:</strong> Integrating with web.de (1&1 IONOS) email servers required handling various authentication methods, server configurations, and connection reliability issues.
                </p>
                <p>
                  <strong>Solution:</strong> I implemented robust email processing with detailed connection logging, retry mechanisms, and comprehensive error handling. The system uses secure IMAP/SMTP connections with app-specific passwords stored in Azure Key Vault.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 5: Cost Optimization for Variable Workloads
                </h3>
                <p>
                  <strong>Challenge:</strong> Traditional always-on cloud infrastructure would be cost-prohibitive for a small catering business with variable email inquiry patterns.
                </p>
                <p>
                  <strong>Solution:</strong> I architected a scale-to-zero solution using Azure Container Apps Jobs with cron scheduling (every 5 minutes), achieving 48% cost reduction compared to traditional approaches while maintaining fast response times.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 6: Vector Store RAG Performance Optimization
                </h3>
                <p>
                  <strong>Challenge:</strong> Ensuring fast, relevant document retrieval from the business knowledge base while maintaining response accuracy across diverse catering inquiry types.
                </p>
                <p>
                  <strong>Solution:</strong> I structured the knowledge base into logical document categories, optimized document formatting for semantic search, and implemented intelligent context retrieval that balances comprehensiveness with response speed.
                </p>
              </div>
            </div>
          </section>
          <br />

          {/* Skills Acquired */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Skills Acquired
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6 font-['PP_Neue_Machina']">
                <div>
                  <h3 className="text-xl mb-4">Cloud Architecture and Azure Services Expertise</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Azure Container Apps Jobs: Serverless container orchestration and scale-to-zero optimization</li>
                    <li>Azure AI Foundry: Unified AI platform management and model deployment</li>
                    <li>Azure OpenAI Integration: GPT-4o API usage and production AI application deployment</li>
                    <li>Azure Key Vault: Comprehensive secret management for production applications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl mb-4">Advanced AI and Machine Learning Implementation</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>RAG System Development: Semantic search systems with vector stores</li>
                    <li>Multi-language AI Processing: German language AI applications with cultural context</li>
                    <li>Prompt Engineering: Sophisticated AI prompts for professional business communications</li>
                    <li>AI Performance Optimization: Balancing response quality, speed, and cost efficiency</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl mb-4">Email System Integration and Automation</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>IMAP/SMTP Protocol Mastery: Email server integration and authentication</li>
                    <li>Email Processing Automation: Advanced filtering and duplicate prevention</li>
                    <li>Mail Server Configuration: Production email handling and security settings</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6 font-['PP_Neue_Machina']">
                <div>
                  <h3 className="text-xl mb-4">DevOps and CI/CD Pipeline Development</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Container Technology: Advanced Docker skills and production containerization</li>
                    <li>GitHub Actions: Automated CI/CD pipelines with Azure integration</li>
                    <li>Infrastructure as Code: Azure CLI-based deployment automation</li>
                    <li>System Monitoring: Comprehensive logging and real-time notification systems</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl mb-4">Production System Design and Reliability</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Error Handling and Recovery: Robust error handling for production systems</li>
                    <li>Performance Monitoring: System health monitoring and operational dashboards</li>
                    <li>Security Best Practices: Enterprise-grade security patterns and access control</li>
                    <li>Scalability Architecture: Variable workload handling with cost optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl mb-4">Business Process Automation</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Workflow Analysis: Complex business process analysis and automation opportunities</li>
                    <li>Requirements Translation: Business requirements to technical implementations</li>
                    <li>Quality Assurance: Testing strategies for business logic accuracy</li>
                    <li>Stakeholder Communication: Technical concepts to business value translation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <img
                src={jasminCatering12}
                alt="Skills and Technologies Overview"
                className="w-full max-w-2xl rounded-lg cursor-pointer"
                onClick={() => openModal(jasminCatering12)}
              />
            </div>
          </section>
          <br />

          {/* Final Thoughts and Reflections */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-6">
              Final Thoughts and Reflections
            </h2>
            <br />
            <div className="space-y-4 font-['PP_Neue_Machina']">
              <p>
                This project represented a significant leap in my understanding of production AI system development, particularly in the context of business process automation. Working with Matthias Buchhorn-Roth provided valuable insights into real-world business requirements and the importance of understanding domain-specific knowledge when designing AI solutions.
              </p>
              <p>
                The most rewarding aspect was seeing how advanced AI capabilities could be made accessible to a small family business, enabling them to compete more effectively while maintaining their personal touch. The challenge of ensuring German language quality while preserving the nuanced understanding of Syrian fusion cuisine pushed me to develop more sophisticated RAG systems than I had previously implemented.
              </p>
              <p>
                I was particularly proud of solving the cost optimization challenge through scale-to-zero architecture, achieving a 48% cost reduction while improving response times. This demonstrates how thoughtful cloud architecture can make advanced AI capabilities economically viable for small businesses.
              </p>
              <p>
                The duplicate prevention system taught me the importance of robust state management in distributed systems. Initially overlooking this led to customer confusion, but implementing the multi-layered UNSEEN filtering and hash-based tracking system provided a reliable solution that handles edge cases gracefully.
              </p>
              <p>
                <strong>Areas for Future Development:</strong> Looking ahead, I see several opportunities to enhance the system further. Integration with a CRM system would provide better customer relationship management and enable more personalized responses based on customer history. Implementing multi-language support could expand the business's reach to Berlin's diverse international community.
              </p>
              <p>
                The system architecture is designed to support these enhancements, with modular components that can be extended without major refactoring. I'm particularly interested in exploring more sophisticated pricing optimization algorithms that could factor in seasonal availability, kitchen capacity constraints, and dynamic market pricing.
              </p>
              <p>
                <strong>Technical Evolution:</strong> The project also highlighted the rapid evolution of AI services and the importance of building adaptable systems. The Azure AI Foundry platform provided capabilities that weren't available when I started the project, demonstrating how cloud AI services are quickly maturing and offering more sophisticated features for developers.
              </p>
              <p>
                This experience has prepared me well for future AI automation projects, particularly in understanding how to balance technical sophistication with practical business needs, cost constraints, and reliability requirements. The combination of cloud architecture, AI integration, and business process automation provides a strong foundation for tackling similar challenges in other industries.
              </p>
              <br />
              <br />
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

export default CaseStudyJasminCateringAIAgent;