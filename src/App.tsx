// src/App.tsx

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import GitHubPage from "@/pages/GitHubPage";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { StarsCanvas } from "./components/shared/StarsCanvas";
import CursorCat from "./components/shared/CursorCat";

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

  // ==========================================================
  // SCROLL TO TOP ON ROUTE CHANGE
  // ==========================================================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
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
            ? "bg-[#0A0A0A] text-[#F5F3EE]"
            : "bg-[#F5F4EF] text-[#171717]"
        }
      `}
    >
      {/* ======================================================
          GLOBAL CURSOR CAT
      ======================================================= */}

      <CursorCat />

      {/* ======================================================
          BACKGROUND STARS
      ======================================================= */}

      <StarsCanvas />

      {/* ======================================================
          HEADER
      ======================================================= */}

      <Header />

      {/* ======================================================
          ROUTES
      ======================================================= */}

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* About */}
        <Route
          path="/about-me"
          element={<AboutPage />}
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        {/* GitHub */}
        <Route
          path="/github"
          element={<GitHubPage />}
        />

        {/* ==================================================
            404 PAGE
        ================================================== */}

        <Route
          path="*"
          element={
            <div
              className={`
                min-h-screen
                flex
                items-center
                justify-center
                px-4
                ${
                  theme === "dark"
                    ? "bg-[#0A0A0A]"
                    : "bg-[#F5F4EF]"
                }
              `}
            >
              <div className="text-center">
                <h1
                  className={`
                    text-4xl
                    font-bold
                    mb-4

                    ${
                      theme === "dark"
                        ? "text-red-400"
                        : "text-red-500"
                    }
                  `}
                >
                  404 - Page Not Found
                </h1>

                <p
                  className={`
                    ${
                      theme === "dark"
                        ? "text-[#8F8B83]"
                        : "text-[#65615A]"
                    }
                  `}
                >
                  The page you're looking for
                  doesn't exist.
                </p>

                <p
                  className={`
                    mt-2
                    text-sm

                    ${
                      theme === "dark"
                        ? "text-[#706D67]"
                        : "text-[#918D84]"
                    }
                  `}
                >
                  Current path:{" "}
                  {window.location.pathname}
                </p>
              </div>
            </div>
          }
        />
      </Routes>

      {/* ======================================================
          FOOTER
      ======================================================= */}

      <Footer />
    </div>
  );
};

// ============================================================
// MAIN APP
// ============================================================

function App() {
  // ==========================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================================

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const anchor =
        target.closest("a");

      if (!anchor) return;

      const hash = anchor.hash;

      if (
        !hash ||
        !hash.startsWith("#")
      ) {
        return;
      }

      const isHomePage =
        window.location.pathname === "/" ||
        window.location.pathname ===
          "/My-Portfolio/";

      if (!isHomePage) {
        return;
      }

      e.preventDefault();

      const id =
        hash.substring(1);

      const element =
        document.getElementById(id);

      if (!element) {
        return;
      }

      const offset = 80;

      const elementPosition =
        element.getBoundingClientRect()
          .top;

      const offsetPosition =
        elementPosition +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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

  // ==========================================================
  // ROUTER
  // ==========================================================

  return (
    <Router>
      <RouteDebugger />

      <AppContent />
    </Router>
  );
}

export default App;
