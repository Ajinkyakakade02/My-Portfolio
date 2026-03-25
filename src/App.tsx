// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EncryptionPage from "./pages/EncryptionPage";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { StarsCanvas } from "./components/shared/StarsCanvas";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  // Smooth scroll for anchor links (only on home page)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && window.location.pathname === '/') {
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
          <Route path="/encryption-page" element={<EncryptionPage />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;