// src/App.tsx

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { StarsCanvas } from "./components/shared/StarsCanvas";

import { useTheme } from "./hooks/useTheme";

// ============================================================
// ROUTE DEBUGGER
// ============================================================

const RouteDebugger = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Route changed to:", location.pathname);
  }, [location]);

  return null;
};

// ============================================================
// APP CONTENT
// ============================================================

const AppContent = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className={`
        min-h-screen
        overflow-x-hidden
        transition-colors
        duration-300
        ${
          theme === "dark"
            ? "bg-[#030014] text-white"
            : "bg-white text-gray-900"
        }
      `}
    >
      {/* Background Stars */}
      <StarsCanvas />

      {/* Header */}
      <Header />

      {/* Single-page portfolio */}
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// ============================================================
// MAIN APP
// ============================================================

function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        (
          window.location.pathname === "/" ||
          window.location.pathname === "/My-Portfolio/"
        )
      ) {
        e.preventDefault();

        const id = anchor.hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          const offset = 80;

          const elementPosition =
            element.getBoundingClientRect().top;

          const offsetPosition =
            elementPosition +
            window.pageYOffset -
            offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener(
      "click",
      handleAnchorClick
    );

    return () => {
      document.removeEventListener(
        "click",
        handleAnchorClick
      );
    };
  }, []);

  return (
    <Router>
      <RouteDebugger />
      <AppContent />
    </Router>
  );
}

export default App;
