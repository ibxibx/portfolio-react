import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import samantha1 from "../assets/images/samantha1.jpg";
import samantha2 from "../assets/images/samantha2.jpg";
import samantha3 from "../assets/images/samantha3.jpg";
import samantha4 from "../assets/images/samantha4.jpg";
import samantha5 from "../assets/images/samantha5.jpg";
import samantha6 from "../assets/images/samantha6.jpg";
import samantha7 from "../assets/images/samantha7.jpg";
import samantha8 from "../assets/images/samantha8.jpg";
import samantha9 from "../assets/images/samantha9.jpg";
import samantha10 from "../assets/images/samantha10.jpg";
import samantha11 from "../assets/images/samantha11.jpg";
import samantha12 from "../assets/images/samantha12.jpg";
import samantha13 from "../assets/images/samantha13.jpg";
import samantha14 from "../assets/images/samantha14.jpg";

const CaseStudySamantha = () => {
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
    // Early return moved to after AnimatePresence to handle exit animations properly
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
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={image}
                alt="Full size view"
                className="w-full h-full object-contain rounded-lg"
                loading="eager"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
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
                  src={samantha1}
                  alt="Samantha Logo"
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => openModal(samantha1)}
                />
              </motion.div>

              <div className="text-center mb-8">
                <h2 className="text-4xl text-blue-500 font-['PP_Object_Sans'] mb-2">
                  Samantha
                </h2>
                <h3 className="text-2xl text-gray-200 font-['PP_Object_Sans'] mb-4">
                  A Voice AI Agent
                </h3>
                <p className="mb-2">
                  <strong>Developer:</strong> Ian Baumeister
                </p>
                <p>
                  <strong>Repository:</strong>{" "}
                  <a
                    href="https://github.com/ibxibx/samantha-voice-ai-agent"
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/ibxibx/samantha-voice-ai-agent
                  </a>
                </p>
              </div>

              <div className="prose prose-lg prose-invert max-w-none font-['PP_Neue_Machina'] text-center">
                <p>
                  The year 2025 had been nicknamed as "the year of AI agents"
                  and that's an exciting new direction the tech is taking,
                  meanwhile the AI agents with their rich and effective
                  functional power and usefulness is hard to overestimate. Big
                  thanks to my friend and mentor Aemal Sayer for his methodical
                  guidance and help grasp the principles, workflow, structure
                  and help build a working Voice AI Agent.
                </p>
                <br />
                <p>
                  Samantha Voice AI Agent is your virtual assistant that talks
                  to you each time you call her, has access to your Google
                  Drive, can brainstorm and check facts for you, create and save
                  your ideas and thoughts in the cloud.
                </p>
                <br />
                <p>
                  The entire AI Agent was built without writing any code, and
                  the process contained a series of steps targeted to assemble
                  all parts together, to test and verify the full functioning of
                  all parts that constitute a working AI agent.
                </p>
                <br />
                <p>
                  The AI agent can be called while cooking, driving, jogging,
                  reading, or even having your bath – it is always by your side
                  wherever you take your phone with you, your hands are busy,
                  and you want to call Samantha. Additionally I could also
                  enhance it and integrate in it for example my Google calendar,
                  search the web, read news etc. The telephone number of the
                  voice ai agent can be saved under a conventional name, in my
                  case Samantha, and be called through voice command as for
                  example with "OK, Google" etc: for example "Siri please call
                  Samantha".
                </p>
              </div>
            </div>
          </section>
          <br />

          {/* Project Objectives Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
              Project Objectives
            </h2>
            <div className="prose prose-lg prose-invert max-w-none font-['PP_Neue_Machina']">
              <p>
                The Samantha Voice AI Agent project was developed with several
                key objectives:
              </p>
              <br />
              <p>
                <strong>
                  1. Create a fully functional voice assistant without writing
                  code
                </strong>
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Demonstrate the power of no-code platforms for AI development
                </li>
                <li>
                  Build a complete solution using only visual workflows and
                  integrations
                </li>
              </ul>
              <br />
              <p>
                <strong>2. Provide hands-free access to AI capabilities</strong>
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Enable users to access AI assistance during activities where
                  typing is impractical
                </li>
                <li>
                  Create a natural voice interface that feels conversational and
                  helpful
                </li>
              </ul>
              <br />
              <p>
                <strong>3. Implement practical functionality</strong>
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Allow users to brainstorm ideas and capture thoughts on the go
                </li>
                <li>
                  Enable fact-checking and information retrieval through voice
                </li>
                <li>
                  Create a system for automatically saving conversation content
                  to Google Drive
                </li>
              </ul>
              <br />
              <p>
                <strong>4. Learn and demonstrate API integration skills</strong>
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Connect multiple third-party services into a cohesive solution
                </li>
                <li>
                  Understand authentication flows and data passing between
                  services
                </li>
              </ul>
              <br />
              <p>
                The project aimed to create not just a technical demonstration
                but a genuinely useful tool that showcases how modern AI
                capabilities can be harnessed by developers of all levels of
                seniority.
              </p>
            </div>
          </section>
          <br />

          {/* Tech Stack and Specs Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-['PP_Object_Sans'] mb-6">
                  Tech Stack and Specs
                </h2>
                <div className="space-y-4 font-['PP_Neue_Machina']">
                  <p>
                    <a
                      href="https://n8n.io"
                      className="text-blue-400 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      n8n
                    </a>{" "}
                    - workflow automation platform that connects all components
                  </p>
                  <p>
                    <a
                      href="https://vapi.ai"
                      className="text-blue-400 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vapi.ai
                    </a>{" "}
                    - voice AI platform for natural speech interface
                  </p>
                  <p>
                    <a
                      href="https://openai.com/api"
                      className="text-blue-400 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      OpenAI API
                    </a>{" "}
                    - powers the intelligence with GPT-4o-mini
                  </p>
                  <p>
                    <a
                      href="https://drive.google.com"
                      className="text-blue-400 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Drive
                    </a>{" "}
                    - stores conversation summaries in the cloud
                  </p>
                </div>
                <br />
                <h2 className="text-2xl font-['PP_Object_Sans'] my-6">
                  Supported Platforms
                </h2>
                <p className="font-['PP_Neue_Machina']">
                  is activated through phone calls from any type of phone or
                  internet
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={samantha2}
                  alt="AI Agent Structure Diagram"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha2)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.1 - Basic structure of an AI agent
                </p>
              </div>
            </div>
          </section>
          <br />

          {/* User Stories Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
              User Stories
            </h2>
            <div className="space-y-6 font-['PP_Neue_Machina']">
              <div className="flex items-start space-x-4">
                <div className="text-blue-500 mt-1">⇒</div>
                <p>
                  As a user, I want to be able to quickly start conversations
                  with my voice agent while my hands are busy (for example while
                  I'm driving, cooking, having a shower, cleaning the flat
                  wtc.).
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-blue-500 mt-1">⇒</div>
                <p>
                  As a user, I want the ability to brainstorm, talk, check facts
                  over a phone call with an agent who can give me quick and
                  useful advice.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-blue-500 mt-1">⇒</div>
                <p>
                  As a user, I want to be able to get fast consultation over the
                  phone – also be able to save notes or the entire conversation
                  in my Google drive, in order to be able to use this
                  information later.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-blue-500 mt-1">⇒</div>
                <p>
                  As a user, in situation of doubt, lack on information or
                  ambiguity I want to be able to make a quick call and get a
                  reliable and actual information / answer.
                </p>
              </div>
            </div>
          </section>
          <br />

          {/* Structure of an AI Agent Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
              The structure of an AI Agent
            </h2>
            <div className="prose prose-lg prose-invert max-w-none font-['PP_Neue_Machina']">
              <p>
                The basic structure of an AI agent (pic.1) contains 3 parts: the
                Input, the Processing and the Output parts. In this particular
                diagram you can see that the Input is the trigger of the AI
                agent action that can be a text message or voice message, email
                etc.
              </p>
              <br />
              <p>
                The Processing part (is the heart of the AI agent) that consists
                of several parts that can be integrated into it:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  a chat model that contains an LLM behind it which could be any
                  LLM API as for ex: Claude, ChatGPT, DeepSeek, Gemini, etc)
                  that processes our natural language input that comes from the
                  Input
                </li>
                <li>
                  a memory – for remembering the conversation: for example if
                  you send it a long text or message and ask it to summarize
                  this text, it should be able to analyse it, keep in memory and
                  execute the task over the information in its memory
                </li>
                <li>
                  a tool – which has access to your tools and can execute tasks
                  on your behalf: as for example write a Microsoft Word / or
                  Excel document, access SalesForce, Microsoft 365 etc.
                </li>
              </ul>
            </div>
          </section>
          <br />
          <br />
          {/* Building Steps Section */}
          <section className="space-y-16 mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
              Building Steps of the Workflow
            </h2>

            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  1. Opening n8n and Creating a Workflow
                </h3>
                <p>
                  I've opened an n8n account, and then added a "new workflow",
                  with option "personal" (pic.2).
                </p>
                <p>
                  The saved workflows on n8n that my Samantha AI Agent is, can
                  be downloaded in the json format for personal backup, that can
                  be added later to your other account.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha3}
                  alt="n8n Interface"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha3)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.2 - n8n workflow interface
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  2. Adding the Input and AI Agent Nodes
                </h3>
                <p>
                  Added the first node: the manual trigger: the Input which is a
                  webhook with the "POST" http method. Next to it I added the
                  second functional node: the AI Agent.
                </p>
                <p>
                  To the AI Agent in the "Chat Model" port I attached the OpenAI
                  API key – as it's functional brain. First I went and got my
                  ChatGPT API secret key from my ChatGPT dashboard, copied and
                  pasted it into the "Chat Model" port – in "create new
                  credentials" and saved it. (pic.3)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha4}
                  alt="OpenAI API Integration"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha4)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.3 - OpenAI API integration
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  3. Testing the ChatGPT Connection
                </h3>
                <p>
                  Next, I tested the ChatGPT port if it is working right in the
                  general diagram by clicking on it and writing "Hi" – and
                  seeing how ChatGPT responds instantly in the same chat window
                  via text "Hello, how can I assist you today" (pic.4)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha5}
                  alt="ChatGPT Testing"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha5)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.4 - Testing ChatGPT integration
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  4. Setting Up Voice AI on Vapi.ai
                </h3>
                <p>
                  The next step was going to Vapi.ai (a Silicon Valley based
                  company building orchestration layers for any voice company) –
                  created an "Assistant" and configured it with all the
                  necessary specifications: voice of sarah, AI model:
                  gpt-4o-mini, the first message "Hi, I'm Samantha, your virtual
                  voice assistant, how are you today?" – and published it.
                  (pic.5)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha6}
                  alt="Vapi.ai Configuration"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha6)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.5 - Vapi.ai assistant configuration
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">5. Configuring a Phone Number</h3>
                <p>
                  Next, in the Vapi.ai I went and configured a free Phone Number
                  for testing purposes, I got a free US telephone number that I
                  saved with my Assistant in it. It took over 2 minutes to
                  activate the number before I could call it and talk with the
                  "sarah" voice to test it. (pic.6)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha7}
                  alt="Phone Number Configuration"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha7)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.6 - Phone number configuration
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">6. Connecting Vapi with n8n</h3>
                <p>
                  In the next step I went and interfaced Vapi with n8n. For that
                  I copied the URL from my first node Webhook, went to Vapi and
                  in the Tools I created a function tool "CreateGoogleDoc" and
                  pasted the Webhook Url into the Server URL and saved it.
                </p>
                <p>
                  How it works? This function will be called in "Tools", if I
                  ask my voice assistant to go and save my content onto a Google
                  Doc, it will go and do it for me by using this Tool. (pic.7)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha8}
                  alt="Vapi-n8n Integration"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha8)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.7 - Connecting Vapi to n8n
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  7. Publishing the Function Tool
                </h3>
                <p>
                  Then I went back to "Assistants" tab on Vapi, found "Sarah",
                  and in the functions, tools, selected the "createGoogleDoc"
                  and clicked publish. Deleted all the function widgets besides
                  the "function-call" and published that. (pic.8)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha9}
                  alt="Function Publishing"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha9)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.8 - Publishing the function tool
                </p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  8. Configuring the AI Agent Node
                </h3>
                <p>
                  The next step I went into my "AI Agent" node, opened it and
                  went into its Parameters section, in the "Prompt field" added
                  a note "Summarize this conversation between the AI agent and
                  the human", clicked the option of "Expression" of this window
                  and dragged from the Input area on the left into it the widget
                  "messages". Then I edited the converted widget into the
                  following code{" "}
                  {`{{ 
                  JSON.stringify($json.body.message.artifact.messages) 
                  }}`}{" "}
                  thus directing the messages in form of strings towards
                  ChatGPT. (pic.9)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha10}
                  alt="AI Agent Node Configuration"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha10)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.9 - AI Agent node configuration
                </p>
              </div>
            </div>

            {/* Step 9 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  9. Adding Google Docs Integration
                </h3>
                <p>
                  In the next step I had to create the function to take the
                  generated output by the AI Agent node and save it onto a
                  Google doc. For that I clicked on the "+" to add the "Google
                  Docs – Create" node – and chose "Create a Document" option for
                  its type, (pic.10) which will create Google documents for me,
                  then in its Parameters I created new credentials.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha11}
                  alt="Google Docs Integration"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha11)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.10 - Adding Google Docs integration
                </p>
              </div>
            </div>

            {/* Step 10 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">10. Setting Up GCP Project</h3>
                <p>
                  Then I went to the GCP Console and created a new Project
                  "AIVoiceAgent" and filled all the API & Service fields which
                  assure the integration of n8n with Google cloud (pic.11).
                  Filled all the fields in this Project in API and Services and
                  filled the Overview section with the needed data. In the
                  "Clients"- created a Client, category web application, and put
                  in the OAuth Redirect URL from n8n the Google Docs 4th node,
                  inside the "Authorized redirect URLs. After that I got from
                  the Google Console the Client ID and Client secret codes, I
                  took the Client ID and Client Secret codes and went into the
                  n8n 3rd Doc node and pasted them in the respective fields.
                  Then I went into the Audience dialog on the GCP and in the
                  "Test Users" I added my Google user account email address and
                  saved.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha12}
                  alt="GCP Project Setup"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha12)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.11 - GCP project configuration
                </p>
              </div>
            </div>

            {/* Step 11-12 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">11-12. Google Authentication</h3>
                <p>
                  11. Then I went and logged in with Google from within the node
                  3 "Google Doc" in the Connection menu (pic.12) and got n8
                  connected to the Google cloud.
                </p>
                <p>
                  12. Then I went to the Google Docs API and clicked on the tab
                  "Enable". The same concerns the Google Drive API too – clicked
                  "Enable".
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha13}
                  alt="Google Authentication"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha13)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.12 - Google authentication
                </p>
              </div>
            </div>

            {/* Step 13 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">13. Document Creation Setup</h3>
                <p>
                  The I went onto my 3rd node and its menu, filled the fields
                  with my Google drive account and folder address information
                  where I want the created documents to be saved, gave the test
                  document a name and clicked "Test Step"(pic.13) – and got the
                  document created in my Google drive.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha14}
                  alt="Document Creation Test"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha14)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.13 - Document creation test
                </p>
              </div>
            </div>

            {/* Step 14 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">14. Finalizing the Workflow</h3>
                <p>
                  For the last step of the workflow creation I've created the
                  4th node "Google Docs - Update" – which updates my Google
                  documents – I went into its properties and dragged from the
                  left column "input" towards its parameters the following: the
                  "id" widget into the "Doc ID or URL" field, as well as the
                  "output" into the "Text" field (pic.14). Then when I clicked
                  to test the step, it updated the document.
                </p>
                <p>
                  Then I switched the toggle button above the canvas or diagram
                  from Inactive to active, and I got the workflow activated,
                  meaning in production mode.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={samantha14}
                  alt="Final Workflow Configuration"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(samantha14)}
                />
                <p className="text-sm text-center text-gray-400">
                  Pic.14 - Final workflow configuration
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />

            {/* Technical Challenges & Solutions */}
            <div className="space-y-8 mt-16">
              <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
                Technical Challenges & Solutions
              </h2>
              <div className="space-y-6 font-['PP_Neue_Machina']">
                <p>
                  During the development of Samantha, I encountered several
                  technical challenges that required creative problem-solving:
                </p>
                <div>
                  <h3 className="text-xl mb-4">
                    Challenge 1: Webhook Configuration
                  </h3>
                  <p>
                    When setting up the webhook to receive data from Vapi.ai, I
                    initially struggled with data formats and payload
                    structures. The JSON data coming from the voice service
                    didn't perfectly match what n8n expected.
                  </p>
                  <p>
                    <strong>Solution:</strong> I spent time analyzing the
                    webhook payload structure using test calls and the n8n
                    debugger. By examining the actual data structure, I was able
                    to craft the correct expression{" "}
                    <code>
                      {
                        "{{ JSON.stringify($json.body.message.artifact.messages) }}"
                      }
                    </code>{" "}
                    to properly extract the conversation content.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4">
                    Challenge 2: Google API Authentication
                  </h3>
                  <p>
                    Setting up the OAuth flow for Google Drive integration
                    proved complicated, with several configuration steps across
                    different platforms.
                  </p>
                  <p>
                    <strong>Solution:</strong> I created a systematic approach,
                    starting with project creation in GCP, enabling specific
                    APIs, configuring OAuth consent screens, and carefully
                    mapping redirect URLs. The step-by-step process documented
                    in my case study ensured I didn't miss any critical
                    authentication components.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4">
                    Challenge 3: Voice Recognition Quality
                  </h3>
                  <p>
                    Initial tests showed that Samantha sometimes misunderstood
                    certain words or phrases, particularly in noisy
                    environments.
                  </p>
                  <p>
                    <strong>Solution:</strong> I experimented with different
                    voice models in Vapi.ai and found that the "Sarah" voice
                    provided the best recognition accuracy. I also added prompt
                    engineering in the assistant configuration to better handle
                    ambiguous inputs and request clarification when uncertain.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4">
                    Challenge 4: Workflow Reliability
                  </h3>
                  <p>
                    Early versions of the workflow occasionally failed to
                    complete all steps, particularly when saving to Google
                    Drive.
                  </p>
                  <p>
                    <strong>Solution:</strong> I implemented better error
                    handling in the n8n workflow and added conditional checks to
                    verify that each step completed successfully before
                    proceeding. This significantly improved the reliability of
                    the end-to-end process.
                  </p>
                </div>
                <p>
                  These challenges highlighted the importance of systematic
                  troubleshooting and the value of understanding the underlying
                  APIs, even when working with no-code platforms.
                </p>
              </div>
            </div>
            <br />
            <br />

            {/* Skills Acquired */}
            <div className="space-y-8 mt-16">
              <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
                Skills Acquired
              </h2>
              <div className="space-y-6 font-['PP_Neue_Machina']">
                <p>
                  This project significantly expanded my technical skillset
                  across multiple domains:
                </p>
                <div>
                  <h3 className="text-xl mb-4">API Integration:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Gained experience connecting multiple third-party APIs
                      into a cohesive system
                    </li>
                    <li>
                      Learned OAuth authentication flows and security best
                      practices
                    </li>
                    <li>
                      Developed skills in webhook configuration and payload
                      handling
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-4">
                    AI & Natural Language Processing:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Learned prompt engineering techniques for conversational
                      AI
                    </li>
                    <li>
                      Developed understanding of LLM capabilities and
                      limitations
                    </li>
                    <li>
                      Gained experience in conversation summarization and
                      content extraction
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-4">No-Code Development:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Mastered n8n workflow creation and management</li>
                    <li>
                      Learned visual programming concepts and dataflow
                      architecture
                    </li>
                    <li>
                      Developed skills in expression-based data transformation
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-4">Voice Interface Design:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Learned principles of conversation design for voice
                      assistants
                    </li>
                    <li>
                      Gained experience in voice model selection and
                      configuration
                    </li>
                    <li>
                      Developed understanding of speech recognition challenges
                      and solutions
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-4">Cloud Service Integration:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Gained hands-on experience with Google Cloud Platform
                    </li>
                    <li>Learned document creation and management via API</li>
                    <li>
                      Developed skills in cloud service authentication and
                      authorization
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-4">Project Documentation:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Improved technical writing and documentation skills</li>
                    <li>Learned to create comprehensive case studies</li>
                    <li>Developed skills in architectural diagram creation</li>
                  </ul>
                </div>
                <p>
                  These skills have significantly enhanced my capabilities as a
                  developer and prepared me for more complex projects involving
                  AI, automation, and integration work.
                </p>
              </div>
            </div>
            <br />
            <br />

            {/* Final Thoughts and Reflections */}
            <div className="space-y-8 mt-16">
              <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
                Final Thoughts and Reflections
              </h2>
              <div className="space-y-6 font-['PP_Neue_Machina']">
                <p>
                  Building Samantha, the Voice AI Agent, was a rewarding journey
                  that provided valuable insights into the world of AI agents
                  and no-code development. Here are my key takeaways from this
                  project:
                </p>
                <p>
                  The power of no-code platforms like n8n has truly democratized
                  the development of sophisticated AI applications. Creating a
                  functional voice agent without writing a single line of code
                  demonstrates how accessible AI development has become in 2025.
                </p>
                <p>
                  Integrating various services (OpenAI, Vapi.ai, Google Drive)
                  taught me the importance of understanding APIs and
                  authentication flows. Each integration presented unique
                  challenges that expanded my technical knowledge.
                </p>
                <p>
                  Voice AI represents a significant shift in human-computer
                  interaction. Creating Samantha reinforced my belief that voice
                  interfaces offer unprecedented accessibility and convenience,
                  especially in situations where traditional interfaces are
                  impractical.
                </p>
                <p>
                  The project revealed several areas for future enhancement.
                  Adding context awareness, more sophisticated memory handling,
                  and additional integrations with services like calendars and
                  email would make Samantha even more useful as a personal
                  assistant.
                </p>
                <p>
                  Throughout development, I gained a deeper appreciation for the
                  AI Agents architecture, the node structure, the properties of
                  nodes, the functioning of an AI agent and how all components
                  interact with one another. Crafting appropriate responses,
                  handling errors gracefully, and ensuring the conversation
                  flows naturally required careful consideration.
                </p>
                <p>
                  This project has equipped me with valuable skills in AI agent
                  architecture, webhook handling, and cloud service integration
                  that I'll carry forward into future development work. I'm
                  excited to continue refining Samantha and exploring new
                  possibilities in the AI agent ecosystem.
                </p>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
    </div>
  );
};

export default CaseStudySamantha;
