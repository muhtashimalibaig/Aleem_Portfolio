import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import "./App.css";
import Reviews from "./pages/Reviews";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='Home' element={<HomePage />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='skills' element={<SkillsPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
