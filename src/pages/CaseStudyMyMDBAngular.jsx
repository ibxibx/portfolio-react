import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mymdb1 from "../assets/images/mymdb1.png";
import mymdb2 from "../assets/images/mymdb2.jpg";
import mymdb3 from "../assets/images/mymdb3.jpg";
import mymdb4 from "../assets/images/mymdb4.jpg";
import mymdb5 from "../assets/images/mymdb5.jpg";
import mymdb6 from "../assets/images/mymdb6.jpg";
import mymdb7 from "../assets/images/mymdb7.jpg";
import mymdb8 from "../assets/images/mymdb8.jpg";
import mymdb9 from "../assets/images/mymdb9.jpg";
import mymdb10 from "../assets/images/mymdb10.jpg";
import mymdb11 from "../assets/images/mymdb11.jpg";
import mymdb12 from "../assets/images/mymdb12.jpg";

const CaseStudyMyMDBAngular = () => {
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
                  src={mymdb1}
                  alt="MyMDB Cover"
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => openModal(mymdb1)}
                />
              </motion.div>

              <div className="text-center mb-8">
                <h2 className="text-4xl text-blue-500 font-['PP_Object_Sans'] mb-2">
                  MyMDB - My Movie Database
                </h2>
                <h3 className="text-2xl text-gray-200 font-['PP_Object_Sans'] mb-4">
                  (Client Side / Angular)
                </h3>
                <p className="mb-2">
                  <strong>GitHub Repository:</strong>{" "}
                  <a
                    href="https://github.com/ibxibx/mymdb-angular-client/"
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/ibxibx/mymdb-angular-client/
                  </a>
                </p>
                <p>
                  <strong>Live Demo:</strong>{" "}
                  <a
                    href="https://ibxibx.github.io/mymdb-angular-client/welcome"
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ibxibx.github.io/mymdb-angular-client/welcome
                  </a>
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
                MyMDB is a single-page, responsive movie database application
                built with Angular that interfaces with a RESTful movie API. The
                application allows users to browse a collection of movies, view
                detailed information about movies, directors, and genres, as
                well as create and manage their own user profile and favourite
                movies list.
              </p>
              <br />
              <p>
                This client-side application was developed to complement a
                previously built server-side API, providing users with an
                intuitive and engaging interface to interact with the movie
                database. The project demonstrates the implementation of modern
                Angular practices, including component architecture, services,
                routing, and integration with Angular Material for a consistent
                user experience. This study project was my first project built
                with TypeScript and Angular and advanced my front-end skills.
              </p>
            </div>

            <div className="flex flex-col items-center mt-8">
              <img
                src={mymdb2}
                alt="Movie View Screen"
                className="w-full max-w-2xl rounded-lg cursor-pointer"
                onClick={() => openModal(mymdb2)}
              />
              <p className="text-sm text-center text-gray-400 mt-2">
                Movie View Screen
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
                Create a client-side application using Angular to provide an
                interface for the existing MyMDB API
              </li>
              <li>
                Implement user registration and authentication functionality
              </li>
              <li>
                Allow users to view and interact with movie data through an
                intuitive interface
              </li>
              <li>
                Enable users to maintain a profile and manage their favourite
                movies list
              </li>
              <li>
                Design a responsive application that works across various
                devices
              </li>
              <li>
                Apply Angular Material design principles for a consistent and
                attractive user interface
              </li>
              <li>Ensure proper documentation and code organization</li>
              <li>Deploy the application to GitHub Pages for public access</li>
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
                <ul className="list-disc list-inside space-y-2">
                  <li>Frontend Framework: Angular 17</li>
                  <li>UI Components: Angular Material</li>
                  <li>Styling: SCSS</li>
                  <li>State Management: RxJS</li>
                  <li>Authentication: JWT (JSON Web Tokens)</li>
                  <li>HTTP Communication: Angular HttpClient</li>
                  <li>Form Management: Angular Reactive Forms</li>
                  <li>
                    Development Tools:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>TypeScript</li>
                      <li>Angular CLI</li>
                      <li>npm</li>
                    </ul>
                  </li>
                  <li>Documentation: TypeDoc for technical documentation</li>
                  <li>Deployment: GitHub Pages</li>
                  <li>Version Control: Git & GitHub</li>
                </ul>
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
                As a user, I want to be able to register and log in to the
                application, so that I can access personalized features and
                maintain my movie preferences across sessions.
              </li>
              <li>
                As a user, I want to be able to browse and search for movies, so
                that I can discover new films and access information about
                movies I'm interested in.
              </li>
              <li>
                As a user, I want to be able to view detailed information about
                movies, directors, and genres, so that I can learn more about
                the films and make informed decisions about what to watch.
              </li>
              <li>
                As a user, I want to be able to maintain a list of favourite
                movies, so that I can keep track of films I enjoy and want to
                revisit.
              </li>
              <li>
                As a user, I want to be able to update my profile information,
                so that I can keep my account details current and personalized.
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
                <p>
                  The MyMDB Angular client application follows a modular
                  component-based architecture that aligns with Angular best
                  practices. The main components include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Welcome Component:</strong> Serves as the entry
                    point, handling user registration and login
                  </li>
                  <li>
                    <strong>Movie Card Component:</strong> Displays the movie
                    collection with interactive cards
                  </li>
                  <li>
                    <strong>Movie Details Component:</strong> Shows
                    comprehensive information about a selected movie
                  </li>
                  <li>
                    <strong>Director Component:</strong> Provides biographical
                    information about movie directors
                  </li>
                  <li>
                    <strong>Genre Component:</strong> Offers details about
                    specific movie genres
                  </li>
                  <li>
                    <strong>User Profile Component:</strong> Allows users to
                    view and edit their profile information
                  </li>
                  <li>
                    <strong>Navigation Component:</strong> Facilitates movement
                    between different views of the application
                  </li>
                </ul>
                <p>
                  These components are supported by a service layer that handles
                  API communication, user authentication, and data management.
                  The application uses Angular's routing module to navigate
                  between different views while maintaining a single-page
                  application architecture.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={mymdb3}
                  alt="App Components Structure"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(mymdb3)}
                />
                <p className="text-sm text-center text-gray-400">
                  App Components /src/app Folder
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
                <h3 className="text-xl mb-4">1. Initial Setup</h3>
                <p>
                  Created a new Angular project using Angular CLI with the
                  command `ng new mymdb-angular-client`. This established the
                  project structure and installed necessary dependencies.
                  Generated the API service using `ng generate service
                  fetch-apidata` to implement the logic for making API calls to
                  the backend endpoints.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">2. API Service Implementation</h3>
                <p>
                  Implemented the core service functionality to communicate with
                  the backend API. This included methods for user registration,
                  login, movie retrieval, and favourite movie management. Set up
                  the HTTP interceptors and error handling to ensure robust API
                  communication.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  3. Angular Material Integration
                </h3>
                <p>
                  Added Angular Material to the project for consistent UI
                  components. Configured the theme and imported necessary
                  modules. This provided access to pre-built components like
                  cards, buttons, dialogs, and form controls that maintain
                  Material Design principles.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={mymdb4}
                    alt="Profile View with Favourite Movies List"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(mymdb4)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Profile View with Favourite Movies List
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  4. User Registration Implementation
                </h3>
                <p>
                  Developed the user registration functionality with Angular
                  Material forms. Created a sign-up form component with
                  validation for username, password, email, and birthday fields.
                  Integrated this with the API service to allow new users to
                  create accounts.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={mymdb5}
                    alt="Sign Up Modal"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(mymdb5)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Sign Up Modal
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">5. Login Functionality</h3>
                <p>
                  Built the login component
                  (mymdb-angular-client\src\app\user-login-form\user-login-form.component.ts)
                  with form validation and error handling. Implemented JWT token
                  storage in localStorage for maintaining user sessions. Added
                  redirection to the movie view upon successful authentication.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={mymdb6}
                    alt="Login Modal"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(mymdb6)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Login Modal
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">6. Welcome Page Development</h3>
                <p>
                  Designed and implemented a welcoming landing page that
                  introduces the application and provides options for users to
                  register or log in. Added responsive styling to ensure a good
                  experience across device sizes.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={mymdb7}
                    alt="Welcome Screen"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(mymdb7)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Welcome Screen
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">7. Movie Card Component</h3>
                <p>
                  Created the movie card component to display the collection of
                  movies in a grid layout. Each card shows the movie title, an
                  image, and basic information. Implemented actions for viewing
                  details and adding to favorites.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={mymdb8}
                    alt="Movie Card"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(mymdb8)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Movie Card
                </p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">8. GitHub Pages Deployment</h3>
                <p>
                  Set up the application for deployment on GitHub Pages by
                  configuring the base href and build options. This made the
                  application publicly accessible for demonstration purposes.
                </p>
              </div>
            </div>

            {/* Step 9 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">9. Navigation and User Profile</h3>
                <p>
                  Added a navigation bar for easy movement between application
                  views. Developed the user profile component that displays user
                  information and allows for profile editing, including
                  username, password, and email changes.
                </p>
              </div>
              <div>
                <div>
                  <div className="space-y-4">
                    <img
                      src={mymdb9}
                      alt="Header Navigation Menu"
                      className="w-full rounded-lg cursor-pointer"
                      onClick={() => openModal(mymdb9)}
                    />
                  </div>
                  <p className="text-sm text-center text-gray-400 mt-2">
                    Header Navigation Menu
                  </p>
                </div>
                <br />
                <br />
                <div>
                  <div className="space-y-4">
                    <img
                      src={mymdb10}
                      alt="Navigation Component Code"
                      className="w-full rounded-lg cursor-pointer"
                      onClick={() => openModal(mymdb10)}
                    />
                  </div>
                  <p className="text-sm text-center text-gray-400 mt-2">
                    navigation.component.ts code fragment
                  </p>
                </div>
              </div>
            </div>

            {/* Step 10 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">10. Feature Completion</h3>
                <p>
                  Implemented the remaining components for movie details,
                  director information, and genre descriptions using dialog
                  modals. Added the favorite movies functionality to allow users
                  to maintain a list of preferred films. Polished the welcome
                  menu options for better user experience.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={mymdb11}
                    alt="Genre, Director and Synopsis Modals"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(mymdb11)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Genre, Director and Synopsis Modals
                </p>
              </div>
            </div>

            {/* Step 11 */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  11. Documentation and Finalization
                </h3>
                <p>
                  Added comprehensive JSDoc and TypeDoc comments throughout the
                  codebase to generate technical documentation. Created a
                  detailed README with project information, screenshots, and
                  setup instructions. Made final UI adjustments and tested all
                  functionality. The documentation made with JSDoc is accessible
                  via the file:{" "}
                  <a
                    href="https://github.com/ibxibx/mymdb-angular-client/blob/main/docs/index.html"
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/ibxibx/mymdb-angular-client/blob/main/docs/index.html
                  </a>
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={mymdb12}
                  alt="Project Documentation"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(mymdb12)}
                />
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
                  Challenge 1: TypeScript Type Safety
                </h3>
                <p>
                  <strong>Challenge:</strong> As a first-time Angular and
                  TypeScript developer, adapting to TypeScript's strict typing
                  system required a significant mindset shift from JavaScript's
                  more flexible approach.
                </p>
                <p>
                  <strong>Solution:</strong> I invested time in learning
                  TypeScript fundamentals and leveraged Angular's generated
                  interfaces. Created specific interfaces for all data models
                  (User, Movie, Director, Genre) which enhanced code quality and
                  reduced runtime errors through compile-time checking.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 2: JWT Authentication Flow
                </h3>
                <p>
                  <strong>Challenge:</strong> Implementing a secure
                  authentication flow with JWT tokens while maintaining state
                  across component navigation presented complexity in token
                  storage and validation.
                </p>
                <p>
                  <strong>Solution:</strong> Developed a comprehensive
                  authentication service that handles token storage in
                  localStorage, automatic token inclusion in API requests
                  through HTTP interceptors, and token expiration checking. This
                  provided a secure but seamless authentication experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 3: Dialog Component Communication
                </h3>
                <p>
                  <strong>Challenge:</strong> Passing data between parent
                  components and dialog modals (for movie details, director
                  info, and genre information) while maintaining proper
                  component isolation was difficult.
                </p>
                <p>
                  <strong>Solution:</strong> Utilized Angular Material's
                  MatDialog service with data injection, allowing parent
                  components to pass specific data to dialog components.
                  Implemented dialog references to handle return values when
                  dialogs close, creating a clean communication channel between
                  components.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">
                  Challenge 4: Responsive Design Implementation
                </h3>
                <p>
                  <strong>Challenge:</strong> Ensuring the application looked
                  and functioned well across various device sizes without
                  duplicating style code was challenging.
                </p>
                <p>
                  <strong>Solution:</strong> Leveraged Angular Material's
                  built-in responsive features combined with custom SCSS media
                  queries. Created a flexible grid system for movie cards that
                  automatically adjusts based on screen width. Utilized
                  Angular's flex-layout module for responsive container
                  management.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">Challenge 5: Form Validation</h3>
                <p>
                  <strong>Challenge:</strong> Creating user-friendly forms with
                  proper validation feedback for registration and profile
                  editing required handling multiple validation scenarios.
                </p>
                <p>
                  <strong>Solution:</strong> Implemented Angular's Reactive
                  Forms with custom validators and error messages. Created
                  reusable validation patterns and error display components that
                  provide immediate visual feedback, improving the user
                  experience during form completion.
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
            <p className="mb-4 font-['PP_Neue_Machina']">
              Through the development of the MyMDB Angular client application, I
              gained proficiency in several key areas:
            </p>
            <ul className="list-disc list-inside space-y-2 font-['PP_Neue_Machina']">
              <li>
                Angular Framework: Learned Angular's component architecture,
                services, dependency injection, and module system.
              </li>
              <li>
                TypeScript Programming: Developed strong typing skills,
                interface definitions, and leveraged TypeScript's
                object-oriented features.
              </li>
              <li>
                Angular Material: Gained experience with Material Design
                principles and implementing pre-built UI components for a
                professional look and feel.
              </li>
              <li>
                RxJS and Observables: Learned to work with reactive programming
                paradigms for handling asynchronous operations and data streams.
              </li>
              <li>
                Routing and Navigation: Implemented Angular's router for
                creating a seamless single-page application experience.
              </li>
              <li>
                Form Handling: Mastered both template-driven and reactive forms,
                including validation strategies and custom validators.
              </li>
              <li>
                API Integration: Developed skills in connecting frontend
                applications with RESTful APIs using Angular's HttpClient.
              </li>
              <li>
                Authentication: Implemented JWT-based authentication and
                protected routes.
              </li>
              <li>
                Documentation: Learned to use TypeDoc for generating technical
                documentation from code comments.
              </li>
              <li>
                Deployment: Gained experience with deploying Angular
                applications to GitHub Pages.
              </li>
            </ul>
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
                Developing the MyMDB Angular client application was a
                significant learning experience that pushed me to expand my
                frontend development skills beyond my previous knowledge.
                Starting with little prior experience in Angular or TypeScript,
                this project provided a comprehensive introduction to the
                Angular ecosystem and its approach to building modern web
                applications.
              </p>
              <p>
                The transition from React to Angular presented an interesting
                challenge, as the frameworks have different philosophies and
                patterns. Angular's more opinionated structure, with its
                emphasis on TypeScript and comprehensive tooling, initially felt
                restrictive but ultimately proved beneficial for maintaining a
                consistent and organized codebase. The enforced discipline of
                TypeScript's type system caught numerous potential bugs during
                development that might have only appeared at runtime in a
                JavaScript-based project.
              </p>
              <p>
                Angular Material proved to be an excellent choice for UI
                components, allowing me to focus on functionality rather than
                spending excessive time on styling. The pre-built components
                integrated seamlessly with Angular's form system, creating a
                polished user experience with relatively little custom CSS
                required.
              </p>
              <p>
                One of the most valuable lessons from this project was
                understanding the importance of proper state management in a
                component-based architecture. Using services effectively to
                share data between components and handling asynchronous
                operations significantly improved the application's performance
                and maintainability.
              </p>
              <p>
                If I were to approach this project again, I would spend more
                time planning the component structure before beginning
                implementation. Some components required refactoring as the
                project progressed and requirements became clearer. I would also
                explore NgRx for more robust state management, as the
                application complexity grew beyond what simple services could
                efficiently handle.
              </p>
              <p>
                For developers interested in testing the application without
                creating a new account, you can use these credentials: -
                Username: testuser1 - Password: Test123!
              </p>
              <p>
                This project has been an invaluable addition to my portfolio,
                demonstrating my ability to learn and apply new technologies in
                a practical context. The experience gained with Angular will
                serve as a solid foundation for future frontend development
                work, and the patterns learned—component architecture, services,
                reactive programming—are applicable across modern JavaScript
                frameworks.
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

export default CaseStudyMyMDBAngular;
