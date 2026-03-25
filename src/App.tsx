// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import GitHubPage from "@/pages/GitHubPage";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { StarsCanvas } from "./components/shared/StarsCanvas";
import { useTheme } from "./hooks/useTheme";

// Debug component to log route changes
const RouteDebugger = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("Route changed to:", location.pathname);
  }, [location]);
  return null;
};

function App() {
  const { theme } = useTheme();

  // Smooth scroll for anchor links (only on home page)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && window.location.pathname === '/My-Portfolio/') {
        e.preventDefault();
        const id = anchor.hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Router>
      <RouteDebugger /> {/* Add this to see route changes in console */}
      <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#030014] text-white' : 'bg-white text-gray-900'
      }`}>
        {/* Star Background */}
        <StarsCanvas />
        
        {/* Header - Navigation */}
        <Header />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/github" element={<GitHubPage />} />
          {/* Add a catch-all route for debugging */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
              <p className="text-gray-400">The page you're looking for doesn't exist.</p>
              <p className="text-gray-400 mt-2">Current path: {window.location.pathname}</p>
            </div>
          </div>} />
        </Routes>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;