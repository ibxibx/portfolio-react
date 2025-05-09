import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nextchat1 from "../assets/images/nextchat1.jpg";
import nextchat2 from "../assets/images/nextchat2.jpg";
import nextchat3 from "../assets/images/nextchat3.jpg";
import nextchat4 from "../assets/images/nextchat4.jpg";
import nextchat5 from "../assets/images/nextchat5.jpg";
import nextchat6 from "../assets/images/nextchat6.jpg";
import nextchat7 from "../assets/images/nextchat7.jpg";
import nextchat8 from "../assets/images/nextchat8.jpg";
import nextchat9 from "../assets/images/nextchat9.jpg";
import nextchat10 from "../assets/images/nextchat10.jpg";
import nextchat11 from "../assets/images/nextchat11.jpg";

const CaseStudyNextChat = () => {
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
                  src={nextchat1}
                  alt="NextChat Cover"
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => openModal(nextchat1)}
                />
              </motion.div>

              <div className="text-center mb-8">
                <h2 className="text-4xl text-blue-500 font-['PP_Object_Sans'] mb-2">
                  NextChat
                </h2>
                <h3 className="text-2xl text-gray-200 font-['PP_Object_Sans'] mb-4">
                  a React Native App
                </h3>
                <p className="mb-2">
                  <strong>Developer:</strong> Ian Baumeister
                </p>
                <p>
                  <strong>Repository:</strong>{" "}
                  <a
                    href="https://github.com/ibxibx/nextchat"
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/ibxibx/nextchat
                  </a>
                </p>
              </div>

              <div className="prose prose-lg prose-invert max-w-none font-['PP_Neue_Machina'] text-center">
                <p>
                  During my Career Foundry Full Stack Web Development course,
                  apart from the largest and most complex project which was the
                  MyMDB app, I particularly enjoyed working on my NextChat -
                  React Native mobile app for chatting.
                </p>
                <br />
                <p>
                  The objective was to build a chat app for mobile devices using
                  React Native. The app will provide users with a chat interface
                  and options to share images and their location.
                </p>
                <br />

                <p>
                  It's quite a feature-rich app that I built and tested with my
                  tutor and mentor. The basic code snippets and parts were
                  provided along the course set of lessons that encompassed the
                  development of this app to start with and slowly enrich the
                  app step by step with all the following features.
                </p>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-['PP_Object_Sans'] mb-6">
                  Tech Stack and Specs
                </h2>
                <br />
                <div className="space-y-6 font-['PP_Neue_Machina']">
                  <div>
                    <h3 className="text-xl mb-3">Core Technologies</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>React Native</li>
                      <li>Expo</li>
                      <li>Google Firestore Database</li>
                      <li>Google Firebase Authentication</li>
                      <li>Gifted Chat library</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                  <br />

                  <div>
                    <h3 className="text-xl mb-3">Supported Platforms</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>iOS</li>
                      <li>Android</li>
                    </ul>
                  </div>
                  <br />

                  <div>
                    <h3 className="text-xl mb-3">Data Storage</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Online storage: Google Firestore Database</li>
                      <li>Offline storage: Local device storage</li>
                    </ul>
                  </div>
                  <br />

                  <div>
                    <h3 className="text-xl mb-3">Authentication</h3>
                    <ul className="list-disc list-inside">
                      <li>Anonymous authentication via Google Firebase</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={nextchat3}
                  alt="App.js Code Screenshot"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(nextchat3)}
                />
                <p className="text-sm text-center text-gray-400">
                  App.js Code Screenshot in Visual Studio Code
                </p>
              </div>
            </div>
          </section>

          {/* Image Handling Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8 font-['PP_Neue_Machina']">
                <div>
                  <h3 className="text-xl mb-4 font-['PP_Object_Sans']">
                    Image Handling
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Pick images from phone's library</li>
                    <li>Take photos using device's camera</li>
                    <li>Store images in Firebase Cloud Storage</li>
                  </ul>
                </div>
                <br />

                <div>
                  <h3 className="text-xl mb-4 font-['PP_Object_Sans']">
                    Location Sharing
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Read user's location data</li>
                    <li>Send location data in map view via chat</li>
                  </ul>
                </div>
                <br />

                <div>
                  <h3 className="text-xl mb-4 font-['PP_Object_Sans']">
                    Accessibility
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Compatible with screen readers for users with visual
                      impairments
                    </li>
                  </ul>
                </div>
                <br />

                <div>
                  <h3 className="text-xl mb-4 font-['PP_Object_Sans']">
                    App Features
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>User-friendly chat interface</li>
                    <li>Image sharing capabilities</li>
                    <li>Real-time location sharing</li>
                    <li>Offline message reading</li>
                    <li>Customizable chat room backgrounds</li>
                    <li>Screen reader compatibility for accessibility</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={nextchat4}
                  alt="App Screens"
                  className="w-full rounded-lg mb-2 cursor-pointer"
                  onClick={() => openModal(nextchat4)}
                />
                <p className="text-sm text-center text-gray-400">
                  NextChat Poster with App Screens
                </p>
              </div>
            </div>
          </section>
          <br />

          {/* Development Steps */}
          <section className="space-y-16 mb-16">
            <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
              The Development Steps, Challenges & Solutions
            </h2>

            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  1. Expo App Setup and testing on the Smartphone
                </h3>
                <p>
                  First, I've set up the Expo project with the boilerplate for
                  the chat app.
                </p>
                <p>
                  As I was using Expo Software to create the boilerplate for the
                  app and then use it for further testing and development, for
                  some reason the Expo app wouldn't render the app on my phone
                  to test and see the app code at work. The recommended older
                  version of Node 16.19.0 did not work with Expo on my android
                  phone.
                </p>
                <p>
                  Using Node 16.19.0, I tried many older versions of the Expo
                  app, to get a working combo, installing all these versions (up
                  to 3 years old) one after the other but all these efforts did
                  not render the app on Expo.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-3 gap-2">
                  <img
                    src={nextchat5}
                    alt="Start Screen"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(nextchat5)}
                  />
                  <img
                    src={nextchat6}
                    alt="Chat Screen"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(nextchat6)}
                  />
                  <img
                    src={nextchat7}
                    alt="Chat Screen Features"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(nextchat7)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  App Testing: Start Screen, Chat Screen, Chat Screen Features
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  2. Building the Interface, App, Start and Chat Screens. Using
                  Expo Snack and Android Studio
                </h3>
                <p>
                  Then I've built the general welcome screen with its layout
                  Start.js and added the custom colour function (for the Chat
                  Screen background) along with the user id name authentication.
                </p>
                <p>
                  After using the IPv4 address as the IP address to render the
                  app on my mobile - which didn't work either - I found that the
                  Expo Snack Box online had the right settings and environment
                  to test the app. I used the sandbox/snack until the
                  integration with Google Firebase came into play! The Expo
                  Snack was a short time solution – it did not work at all with
                  Google Firebase with all the further tweaking - it didn't
                  throw an error, but it also didn't render the app in the
                  preview panel - meaning Expo Snack and Google Firebase have a
                  has a compatibility issue.
                </p>
                <p>
                  Android Studio played a huge role here as an emulator, where I
                  was able to render the app and test it on Expo's local
                  hosting, over and over again until everything worked and ran
                  smoothly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  3. Google Firestore Configuration and Integration
                </h3>
                <p>
                  After that I've set up the Google Firestore with its Storage
                  and tested them by creating a sample database with a sample
                  collection of data and integrated it into the app. I
                  configured and integrated Google Firebase as the storage
                  provider for all messages and media files. After adding the
                  media to virtual memory in Android Studio, I saw the code in
                  action that handles the transfer and storage of the media to
                  the Firebase drive. It was great to see it working seamlessly.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <img
                    src={nextchat8}
                    alt="Google Firestore Integration"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(nextchat8)}
                  />
                  <img
                    src={nextchat9}
                    alt="Google Firebase Integration"
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => openModal(nextchat9)}
                  />
                </div>
                <p className="text-sm text-center text-gray-400 mt-2">
                  Google Firebase Configuration: Chat and Media Storage
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  4. Chat Screen and its Functions
                </h3>
                <p>
                  The Chat component features a familiar and widely used mobile
                  chat layout, which is recommended for successful app adoption.
                  I added the second screen, Chat.js, which logs the username
                  and displays the background colour chosen on the intro screen.
                  Later, I've added the offline mode handling functionality and
                  the display of the messages without the messaging bar when the
                  internet connection is interrupted or lost.
                </p>
                <p>
                  Media Storage, Selection and Sending Problem. I was not able
                  to figure out how the local storage on the virtual mobile
                  phone in the Expo test environment stores the media files:
                  photos and videos, which I couldn't access (even though the
                  correct code was implemented).
                </p>
              </div>
              <div className="bg-blue-900 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap text-white/80">
                {`// Handle image upload process and send message with image URL
const uploadAndSendImage = async (imageURI) => {
  try {
    const uniqueRefString = generateReference(imageURI);
    const newUploadRef = ref(storage, uniqueRefString);
    const response = await fetch(imageURI);
    const blob = await response.blob();
    const snapshot = await uploadBytes(newUploadRef, blob);
    const imageURL = await getDownloadURL(snapshot.ref);
    onSend({
      _id: uniqueRefString,
      createdAt: new Date(),
      user: {
        _id: userID,
        name: "User",
      },
      image: imageURL,
    });
  } catch (error) {
    console.error("Error uploading image", error);
    Alert.alert("Error uploading image", error.message);
  }
};`}
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  5. Custom Actions – the NextChat coolest Features
                </h3>
                <p>
                  I added all the features in CustomActions.js and tested them
                  one by one, the camera with front and rear view 'ImagePicker'
                  - sending these images, the current location sending, I've
                  done the design customisation of the chat bubbles with time
                  stamps, text colour etc. using the Gifted Chat tool.
                </p>
                <p>
                  One of the tasks was to simulate a live chat between two users
                  at the same time and record a screen video - which wouldn't
                  work as Expo wouldn't work on the mobile - so I tried to solve
                  this problem using 'Blue Stacks X' as an Android emulator,
                  downloaded and installed the Expo app on it, tried to run it
                  on my screen next to Android Studio - but the same story - as
                  with the mobile - didn't work, but I tried every possible way
                  known to me at the time to create and showcase a live chat.
                  Only Android Studio rendered my Expo app correctly and fully.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">
                  6. The Finale, App Testing, My Surprise Moment
                </h3>
                <p>
                  I did all the testing and debugging until the app was bug free
                  and functional and updated the GitHub repository.
                </p>
                <p>
                  We've managed to test the app from 2 devices at the same time
                  - as my mentor Stephen was running my app code locally on his
                  PC in Android Studio during our Skype call - and I was running
                  the same code on my PC, we even laughed - he thought he was
                  testing the app alone on the call and asked - what are these
                  messages appearing - I replied - no way - are we chatting live
                  now!? My app (with the entire tech in it) facilitated a live
                  chat between 2 continents - my chin dropped...to my surprise
                  the app felt 'alive'! But then I realised that if the Google
                  Firebase stores and displays the messages from all the active
                  users - it should display all messages in real time as well,
                  even though the app was running on 2 local servers on 2
                  different continents... the chat still worked for us. It was
                  fun and a truly memorable moment. The power of technology
                  never ceases to surprise, inspire and move me!
                </p>
              </div>
              <div>
                <img
                  src={nextchat10}
                  alt="Final Testing"
                  className="w-full rounded-lg cursor-pointer"
                  onClick={() => openModal(nextchat10)}
                />
                <p className="text-sm text-center text-gray-400 mt-2">
                  Coding at Home
                </p>
              </div>
            </div>

            {/* Branding Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-4">
                  Branding
                </h2>
                <p>
                  I did a quick search online and used the Claude.ai tool to
                  come up with over a hundred cool possible brand names (2-word
                  combinations) that would capture the essence of the product's
                  functionality, I chose NextChat for maximum clarity, and
                  designed the logo by overlaying the word "Next" with a chat
                  bubble containing the word "Chat" forming a bold and
                  stamp-like assertive logotype.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={nextchat2}
                  alt="NextChat Branding"
                  className="w-48 rounded-lg cursor-pointer"
                  onClick={() => openModal(nextchat2)}
                />
              </div>
            </div>
            <br />

            {/* Final Thoughts Section */}
            <div className="space-y-8">
              <h2 className="text-2xl font-['PP_Object_Sans'] text-center">
                Final Thoughts and Reflections
              </h2>
              <div className="space-y-4 font-['PP_Neue_Machina']">
                <p>
                  As I've started to develop my first native mobile app, I've
                  noticed the simplicity, versatility, precision and
                  practicality of the React Native JavaScript-based mobile app
                  framework.
                </p>
                <p>
                  While building the structure of a chat-type app with its
                  components and dependencies, middleware and features, it
                  created a deeper understanding and appreciation of the
                  framework and its benefits.
                </p>
                <p>
                  My role in this project was to create a feature-rich basic
                  native chat app and learn from the testing practices using
                  Expo App and Android Studio emulators.
                </p>
                <p>
                  The unique challenges of building, integrating and testing
                  features such as user-friendly chat layout, photo sharing,
                  location sharing, offline message reading, customisable chat
                  room backgrounds, screen reader compatibility for
                  accessibility was my first deep dive into mastering React
                  Native.
                </p>
                <p>
                  The technical stack also includes Expo for building and
                  deploying the app, the Google Firestore database and Google
                  Firebase for storing and serving custom chat data, and the
                  Gifted Chat library for the chat tools.
                </p>
                <p>
                  I've followed the project deliverables with a focus on fast
                  and clean implementation, without distracting myself with cool
                  and fancy extensions or features. Adhering to 'less is more'
                  and practicality for maximum efficiency and 'lean development'
                  were my key principles. Avoiding overly complicated component
                  structures, early testing on real devices, logic and function
                  based code structure were my takeaways from this experience.
                </p>
                <p>
                  Through the NextChat project, I've gained vital knowledge, a
                  good feel for the current tech stack combination, and the
                  ability to assess the strengths and opportunities of building
                  a React Native project.
                </p>
              </div>
              <br />

              <div className="mt-16">
                <h2 className="text-2xl font-['PP_Object_Sans'] text-center mb-8">
                  Further Improvements and Features
                </h2>
                <ul className="list-disc list-inside space-y-2 font-['PP_Neue_Machina']">
                  <li>Offering a password secured log in authentication</li>
                  <li>Audio call and video call functionality</li>
                  <li>
                    Offering video or limited time video-clip taking, saving and
                    sending
                  </li>
                  <li>Audio recording, saving and sending</li>
                  <li>
                    Browsing of video files in the gallery and sending them
                  </li>
                  <li>
                    File or document browsing in the device memory and sending
                  </li>
                  <li>
                    Real location detection and live location sending,
                    customization of chat background with images
                  </li>
                </ul>
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

export default CaseStudyNextChat;
