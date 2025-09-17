import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import CaseStudyNextChat from "./pages/CaseStudyNextChat";
import CaseStudySamantha from "./pages/CaseStudySamantha";
import CaseStudyMyMDBAngular from "./pages/CaseStudyMyMDBAngular";
import CaseStudyJasminCateringAIAgent from "./pages/CaseStudyJasminCateringAIAgent"
import "./styles/decorations.css";
import "./styles/variables.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Layout isLoading={isLoading}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study-nextchat" element={<CaseStudyNextChat />} />
          <Route path="/case-study-samantha" element={<CaseStudySamantha />} />
          <Route
            path="/case-study-mymdb-angular"
            element={<CaseStudyMyMDBAngular />}
          />
          <Route path="/case-study-jasmin-catering-ai-agent" element={<CaseStudyJasminCateringAIAgent />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
