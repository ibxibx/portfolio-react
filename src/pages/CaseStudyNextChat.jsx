import React from "react";
import { motion } from "framer-motion";
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
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full overflow-y-auto scrollbar-thin">
        <div className="min-h-full flex flex-col items-center p-4 sm:p-6 md:p-8">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-12 lg:mb-16 font-light font-['PP_Object_Sans']"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Case Study
          </motion.h1>

          <div className="max-w-[1000px] w-full space-y-16">
            {/* Hero Section */}
            <section className="w-full space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full aspect-[16/9] rounded-lg overflow-hidden"
              >
                <img
                  src={nextchat1}
                  alt="NextChat Cover"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-4xl text-blue-500 font-['PP_Object_Sans']">
                    NextChat
                  </h2>
                  <h3 className="text-2xl text-gray-200 font-['PP_Object_Sans']">
                    a React Native App
                  </h3>
                </div>

                <div className="space-y-4 font-['PP_Neue_Machina']">
                  <p>
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
                  <p>
                    <strong>Setup Instructions:</strong>{" "}
                    <a
                      href="https://github.com/ibxibx/nextchat?tab=readme-ov-file#-setup-instructions"
                      className="text-blue-400 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/ibxibx/nextchat?tab=readme-ov-file#-setup-instructions
                    </a>
                  </p>
                </div>
              </div>

              <div className="prose prose-lg prose-invert max-w-none font-['PP_Neue_Machina']">
                <p>
                  During my Career Foundry Full Stack Web Development course,
                  apart from the largest and most complex project which was the
                  MyMDB app, I particularly enjoyed working on my NextChat -
                  React Native mobile app for chatting.
                </p>
                <p>
                  The objective was to build a chat app for mobile devices using
                  React Native. The app will provide users with a chat interface
                  and options to share images and their location.
                </p>
                <p>
                  It's quite a feature-rich app that I built and tested with my
                  tutor and mentor. The basic code snippets and parts were
                  provided along the course set of lessons that encompassed the
                  development of this app to start with and slowly enrich the
                  app step by step with all the following features.
                </p>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h2 className="text-3xl font-['PP_Object_Sans']">
                  Tech Stack and Specs
                </h2>

                <div className="space-y-8 font-['PP_Neue_Machina']">
                  <div>
                    <h3 className="text-xl mb-4">Core Technologies</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>React Native</li>
                      <li>Expo</li>
                      <li>Google Firestore Database</li>
                      <li>Google Firebase Authentication</li>
                      <li>Gifted Chat library</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl mb-4">Supported Platforms</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>iOS</li>
                      <li>Android</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl mb-4">Data Storage</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Online storage: Google Firestore Database</li>
                      <li>Offline storage: Local device storage</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl mb-4">Authentication</h3>
                    <ul className="list-disc list-inside">
                      <li>Anonymous authentication via Google Firebase</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <img
                  src={nextchat3}
                  alt="App.js Code Screenshot"
                  className="w-full rounded-lg"
                />
                <p className="text-sm text-center text-gray-400">
                  App.js Code Screenshot in Visual Studio Code
                </p>

                <img
                  src={nextchat4}
                  alt="Development Environment"
                  className="w-full rounded-lg"
                />
              </div>
            </section>

            {/* Image Handling Section */}
            <section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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

                  <div>
                    <h3 className="text-xl mb-4 font-['PP_Object_Sans']">
                      Location Sharing
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Read user's location data</li>
                      <li>Send location data in map view via chat</li>
                    </ul>
                  </div>

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

                <div className="space-y-8">
                  <img
                    src={nextchat5}
                    alt="App Screens"
                    className="w-full rounded-lg"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <img
                      src={nextchat6}
                      alt="Start Screen"
                      className="w-full rounded-lg"
                    />
                    <img
                      src={nextchat3}
                      alt="Chat Screen"
                      className="w-full rounded-lg"
                    />
                    <img
                      src={nextchat4}
                      alt="Chat Screen Features"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-center text-gray-400">
                    NextChat – App: Poster with the Start Screen and Chat
                    Screens
                  </p>
                </div>
              </div>
            </section>

            {/* Development Steps */}
            <section className="space-y-16">
              <h2 className="text-3xl font-['PP_Object_Sans']">
                The Development Steps, Challenges & Solutions
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8 font-['PP_Neue_Machina']">
                  <div>
                    <h3 className="text-xl mb-4">
                      1. Expo App Setup and testing on the Smartphone
                    </h3>
                    <p>
                      First, I've set up the Expo project with the boilerplate
                      for the chat app.
                    </p>
                    <p>
                      As I was using Expo Software to create the boilerplate for
                      the app and then use it for further testing and
                      development, for some reason the Expo app wouldn't render
                      the app on my phone to test and see the app code at work.
                      The recommended older version of Node 16.19.0 did not work
                      with Expo on my android phone.
                    </p>
                    <p>
                      Using Node 16.19.0, I tried many older versions of the
                      Expo app, to get a working combo, installing all these
                      versions (up to 3 years old) one after the other but all
                      these efforts did not render the app on Expo.
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src={nextchat5}
                    alt="Development Process"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8 font-['PP_Neue_Machina']">
                  <div>
                    <h3 className="text-xl mb-4">
                      2. Building the Interface, App, Start and Chat Screens.
                      Using Expo Snack and Android Studio
                    </h3>
                    <p>
                      Then I've built the general welcome screen with its layout
                      Start.js and added the custom colour function (for the
                      Chat Screen background) along with the user id name
                      authentication.
                    </p>
                    <p>
                      After using the IPv4 address as the IP address to render
                      the app on my mobile - which didn't work either - I found
                      that the Expo Snack Box online had the right settings and
                      environment to test the app. I used the sandbox/snack
                      until the integration with Google Firebase came into play!
                      The Expo Snack was a short time solution – it did not work
                      at all with Google Firebase with all the further tweaking
                      - it didn't throw an error, but it also didn't render the
                      app in the preview panel - meaning Expo Snack and Google
                      Firebase have a has a compatibility issue.
                    </p>
                    <p>
                      Android Studio played a huge role here as an emulator,
                      where I was able to render the app and test it on Expo's
                      local hosting, over and over again until everything worked
                      and ran smoothly.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={nextchat6}
                    alt="Interface Building"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8 font-['PP_Neue_Machina']">
                  <div>
                    <h3 className="text-xl mb-4">
                      3. Google Firestore Configuration and Integration
                    </h3>
                    <p>
                      After that I've set up the Google Firestore with its
                      Storage and tested them by creating a sample database with
                      a sample collection of data and integrated it into the
                      app. I configured and integrated Google Firebase as the
                      storage provider for all messages and media files. After
                      adding the media to virtual memory in Android Studio, I
                      saw the code in action that handles the transfer and
                      storage of the media to the Firebase drive. It was great
                      to see it working seamlessly.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={nextchat7}
                    alt="Firestore Integration"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8 font-['PP_Neue_Machina']">
                  <div>
                    <h3 className="text-xl mb-4">
                      4. Chat Screen and its Functions
                    </h3>
                    <p>
                      The Chat component features a familiar and widely used
                      mobile chat layout, which is recommended for successful
                      app adoption. I added the second screen, Chat.js, which
                      logs the username and displays the background colour
                      chosen on the intro screen. Later, I've added the offline
                      mode handling functionality and the display of the
                      messages without the messaging bar when the internet
                      connection is interrupted or lost.
                    </p>
                    <p>
                      Media Storage, Selection and Sending Problem. I was not
                      able to figure out how the local storage on the virtual
                      mobile phone in the Expo test environment stores the media
                      files: photos and videos, which I couldn't access (even
                      though the correct code was implemented).
                    </p>
                    <div className="bg-neutral-800 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap text-white/80">
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
                </div>
                <div>
                  <img
                    src={nextchat8}
                    alt="Chat Functions"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Step 5 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8 font-['PP_Neue_Machina']">
                  <div>
                    <h3 className="text-xl mb-4">
                      5. Custom Actions – the NextChat coolest Features
                    </h3>
                    <p>
                      I added all the features in CustomActions.js and tested
                      them one by one, the camera with front and rear view
                      'ImagePicker' - sending these images, the current location
                      sending, I've done the design customisation of the chat
                      bubbles with time stamps, text colour etc. using the
                      Gifted Chat tool.
                    </p>
                    <p>
                      One of the tasks was to simulate a live chat between two
                      users at the same time and record a screen video - which
                      wouldn't work as Expo wouldn't work on the mobile - so I
                      tried to solve this problem using 'Blue Stacks X' as an
                      Android emulator, downloaded and installed the Expo app on
                      it, tried to run it on my screen next to Android Studio -
                      but the same story - as with the mobile - didn't work, but
                      I tried every possible way known to me at the time to
                      create and showcase a live chat. Only Android Studio
                      rendered my Expo app correctly and fully.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={nextchat9}
                    alt="Custom Actions"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Step 6 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8 font-['PP_Neue_Machina']">
                  <div>
                    <h3 className="text-xl mb-4">
                      6. The Finale, App Testing, My Surprise Moment
                    </h3>
                    <p>
                      I did all the testing and debugging until the app was bug
                      free and functional and updated the GitHub repository.
                    </p>
                    <p>
                      We've managed to test the app from 2 devices at the same
                      time - as my mentor Stephen was running my app code
                      locally on his PC in Android Studio during our Skype call
                      - and I was running the same code on my PC, we even
                      laughed - he thought he was testing the app alone on the
                      call and asked - what are these messages appearing - I
                      replied - no way - are we chatting live now!? My app (with
                      the entire tech in it) facilitated a live chat between 2
                      continents - my chin dropped...to my surprise the app felt
                      'alive'! But then I realised that if the Google Firebase
                      stores and displays the messages from all the active users
                      - it should display all messages in real time as well,
                      even though the app was running on 2 local servers on 2
                      different continents... the chat still worked for us. It
                      was fun and a truly memorable moment. The power of
                      technology never ceases to surprise, inspire and move me!
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={nextchat10}
                    alt="Final Testing"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Branding Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8 font-['PP_Neue_Machina']">
                  <h3 className="text-xl mb-4">Branding</h3>
                  <p>
                    I did a quick search online and used the Claude.ai tool to
                    come up with over a hundred cool possible brand names
                    (2-word combinations) that would capture the essence of the
                    product's functionality, I chose NextChat for maximum
                    clarity, and designed the logo by overlaying the word "Next"
                    with a chat bubble containing the word "Chat" forming a bold
                    and stamp-like assertive logotype.
                  </p>
                </div>
                <div>
                  <img
                    src={nextchat11}
                    alt="NextChat Branding"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Final Thoughts Section */}
              <div className="space-y-8 font-['PP_Neue_Machina']">
                <h3 className="text-xl mb-4">Final thoughts and reflections</h3>
                <div className="space-y-4">
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
                    and clean implementation, without distracting myself with
                    cool and fancy extensions or features. Adhering to 'less is
                    more' and practicality for maximum efficiency and 'lean
                    development' were my key principles. Avoiding overly
                    complicated component structures, early testing on real
                    devices, logic and function based code structure were my
                    takeaways from this experience.
                  </p>
                  <p>
                    Through the NextChat project, I've gained vital knowledge, a
                    good feel for the current tech stack combination, and the
                    ability to assess the strengths and opportunities of
                    building a React Native project.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg mb-4">
                    The further improvements and features I see for NextChat:
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Offering a password secured log in authentication</li>
                    <li>Audio call and video call functionality</li>
                    <li>
                      Offering video or limited time video-clip taking, saving
                      and sending
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyNextChat;
