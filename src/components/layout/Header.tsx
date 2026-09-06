// src/components/layout/Header.tsx

import {
  useState,
  useEffect,
  MouseEvent,
} from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import { SOCIALS, siteConfig } from "@/constants";
import { getImagePath } from "@/lib/paths";
import { useTheme } from "@/hooks/useTheme";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("about-me");

  const [scrolled, setScrolled] =
    useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ============================================================
  // Theme
  // ============================================================

  const {
    theme,
    toggleTheme,
  } = useTheme();

  // ============================================================
  // Navigation
  // ============================================================

  const navLinks = [
    {
      title: "Home",
      link: "#about-me",
      sectionId: "about-me",
    },
    {
      title: "Skills",
      link: "#skills",
      sectionId: "skills",
    },
    {
      title: "Projects",
      link: "#view-my-work",
      sectionId: "view-my-work",
    },
    {
      title: "Contact",
      link: "#contact",
      sectionId: "contact",
    },
  ];

  // ============================================================
  // Navigate + Scroll
  // ============================================================

  const navigateAndScroll = (
    sectionId: string
  ) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element =
          document.getElementById(sectionId);

        if (!element) return;

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
      }, 100);
    } else {
      const element =
        document.getElementById(sectionId);

      if (!element) return;

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
  };

  // ============================================================
  // Navigation Click
  // ============================================================

  const handleNavClick = (
    e: MouseEvent,
    sectionId: string
  ) => {
    e.preventDefault();

    navigateAndScroll(sectionId);

    setIsMobileMenuOpen(false);
  };

  // ============================================================
  // Scroll Detection + Active Section
  // ============================================================

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY;

      setScrolled(currentScroll > 24);

      if (location.pathname !== "/") {
        setActiveSection("");
        return;
      }

      let currentSection =
        "about-me";

      for (const link of navLinks) {
        const element =
          document.getElementById(
            link.sectionId
          );

        if (!element) continue;

        const top =
          element.getBoundingClientRect().top +
          window.scrollY;

        if (
          currentScroll >=
          top - 140
        ) {
          currentSection =
            link.sectionId;
        }
      }

      setActiveSection(
        currentSection
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [location.pathname]);

  // ============================================================
  // Logo Click
  // ============================================================

  const handleLogoClick = (
    e: MouseEvent
  ) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  // ============================================================
  // Theme Toggle
  // ============================================================

  const handleThemeToggle = () => {
    toggleTheme();
  };

  // ============================================================
  // Render
  // ============================================================

  return (
    <>
      <motion.nav
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          px-4
          sm:px-6
          lg:px-8
          transition-all
          duration-300

          ${
            scrolled
              ? `
                border-b
                border-white/[0.08]
                bg-[#0A0A0A]/82
                shadow-[0_10px_35px_rgba(0,0,0,0.20)]
                backdrop-blur-xl
              `
              : `
                border-b
                border-transparent
                bg-transparent
              `
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[72px]
            max-w-6xl
            items-center
            justify-between
          "
        >

          {/* ====================================================
              LOGO
          ===================================================== */}

          <motion.a
            href="#"
            onClick={handleLogoClick}
            whileHover={{
              y: -1,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              flex
              shrink-0
              cursor-pointer
              select-none
              items-center
              gap-3
            "
          >
            {/* Logo Image */}

            <div
              className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-[#C9A66B]
                  opacity-15
                  blur-lg
                "
              />

              <div
                className="
                  relative
                  h-8
                  w-8
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-[#141414]
                "
              >
                <img
                  src={getImagePath(
                    "/logo.png"
                  )}
                  alt={siteConfig.name}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                  onError={(e) => {
                    e.currentTarget.style.display =
                      "none";

                    const parent =
                      e.currentTarget
                        .parentElement;

                    if (
                      parent &&
                      !parent.querySelector(
                        ".header-initials"
                      )
                    ) {
                      const div =
                        document.createElement(
                          "div"
                        );

                      div.className =
                        "header-initials flex h-full w-full items-center justify-center rounded-full bg-[#C9A66B] text-[10px] font-bold text-[#0A0A0A]";

                      div.textContent =
                        "AK";

                      parent.appendChild(
                        div
                      );
                    }
                  }}
                />
              </div>
            </div>

            {/* Name */}

            <div className="hidden sm:block">
              <div
                className="
                  text-sm
                  font-semibold
                  tracking-tight
                  text-[#F5F3EE]
                "
              >
                {siteConfig.name}
              </div>

              <div
                className="
                  mt-0.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-[#706D67]
                "
              >
                {siteConfig.role}
              </div>
            </div>
          </motion.a>

          {/* ====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              md:block
            "
          >
            <div
              className="
                flex
                items-center
                gap-1
              "
            >
              {navLinks.map(
                (link) => {
                  const isActive =
                    location.pathname ===
                      "/" &&
                    activeSection ===
                      link.sectionId;

                  return (
                    <motion.a
                      key={link.title}
                      href={link.link}
                      onClick={(e) =>
                        handleNavClick(
                          e,
                          link.sectionId
                        )
                      }
                      whileTap={{
                        scale: 0.97,
                      }}
                      className={`
                        relative
                        px-4
                        py-2
                        text-[13px]
                        font-medium
                        transition-colors
                        duration-200

                        ${
                          isActive
                            ? `
                              text-[#F5F3EE]
                            `
                            : `
                              text-[#8B887F]
                              hover:text-[#F5F3EE]
                            `
                        }
                      `}
                    >
                      {link.title}

                      {isActive && (
                        <motion.span
                          layoutId="header-active-line"
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 32,
                          }}
                          className="
                            absolute
                            bottom-0.5
                            left-1/2
                            h-px
                            w-5
                            -translate-x-1/2
                            bg-[#C9A66B]
                          "
                        />
                      )}
                    </motion.a>
                  );
                }
              )}
            </div>
          </div>

          {/* ====================================================
              RIGHT SIDE
          ===================================================== */}

          <div
            className="
              flex
              items-center
              gap-1
            "
          >

            {/* ==================================================
                SOCIAL LINKS
            ================================================== */}

            <div
              className="
                hidden
                items-center
                gap-0.5
                md:flex
              "
            >
              {SOCIALS.map(
                (social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{
                      y: -2,
                      scale: 1.06,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      text-[#706D67]
                      transition-all
                      duration-200
                      hover:bg-white/[0.04]
                      hover:text-[#C9A66B]
                    "
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                )
              )}
            </div>

            {/* ==================================================
                THEME TOGGLE
            ================================================== */}

            <motion.button
              type="button"
              onClick={handleThemeToggle}
              whileHover={{
                y: -1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className={`
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                transition-all
                duration-200

                ${
                  theme === "dark"
                    ? `
                      border-white/[0.08]
                      bg-white/[0.025]
                      text-[#A7A39A]
                      hover:border-[#C9A66B]/30
                      hover:bg-white/[0.05]
                      hover:text-[#C9A66B]
                    `
                    : `
                      border-black/[0.08]
                      bg-black/[0.025]
                      text-[#65615A]
                      hover:border-[#9A743B]/30
                      hover:bg-black/[0.04]
                      hover:text-[#9A743B]
                    `
                }
              `}
            >
              {theme === "dark" ? (
                /* Sun Icon */

                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <path
                    strokeLinecap="round"
                    d="
                      M12 2v2
                      M12 20v2
                      M4.93 4.93l1.41 1.41
                      M17.66 17.66l1.41 1.41
                      M2 12h2
                      M20 12h2
                      M4.93 19.07l1.41-1.41
                      M17.66 6.34l1.41-1.41
                    "
                  />
                </svg>
              ) : (
                /* Moon Icon */

                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="
                      M21 12.8
                      A8.5 8.5 0 1 1
                      11.2 3
                      A6.5 6.5 0 0 0
                      21 12.8Z
                    "
                  />
                </svg>
              )}
            </motion.button>

            {/* ==================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <motion.button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen(
                  !isMobileMenuOpen
                )
              }
              whileTap={{
                scale: 0.92,
              }}
              aria-label={
                isMobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={
                isMobileMenuOpen
              }
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                text-[#A7A39A]
                transition-colors
                hover:bg-white/[0.06]
                hover:text-[#F5F3EE]
                md:hidden
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <>
                    <path
                      strokeLinecap="round"
                      d="M4 7h16"
                    />

                    <path
                      strokeLinecap="round"
                      d="M4 12h16"
                    />

                    <path
                      strokeLinecap="round"
                      d="M4 17h16"
                    />
                  </>
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* ======================================================
            MOBILE MENU
        ======================================================= */}

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                mx-auto
                pb-4
                md:hidden
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#111111]/95
                  p-2
                  shadow-[0_20px_50px_rgba(0,0,0,0.30)]
                  backdrop-blur-2xl
                "
              >
                {/* Mobile Navigation */}

                <div className="space-y-1">
                  {navLinks.map(
                    (link) => {
                      const isActive =
                        location.pathname ===
                          "/" &&
                        activeSection ===
                          link.sectionId;

                      return (
                        <motion.a
                          key={link.title}
                          href={link.link}
                          onClick={(e) =>
                            handleNavClick(
                              e,
                              link.sectionId
                            )
                          }
                          whileTap={{
                            scale: 0.98,
                          }}
                          className={`
                            block
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-medium
                            transition-colors
                            duration-200

                            ${
                              isActive
                                ? `
                                  bg-white/[0.05]
                                  text-[#F5F3EE]
                                `
                                : `
                                  text-[#969188]
                                  hover:bg-white/[0.035]
                                  hover:text-[#F5F3EE]
                                `
                            }
                          `}
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                            "
                          >
                            <span>
                              {link.title}
                            </span>

                            {isActive && (
                              <span
                                className="
                                  h-1.5
                                  w-1.5
                                  rounded-full
                                  bg-[#C9A66B]
                                "
                              />
                            )}
                          </div>
                        </motion.a>
                      );
                    }
                  )}
                </div>

                {/* Mobile Divider */}

                <div
                  className="
                    my-2
                    border-t
                    border-white/[0.06]
                  "
                />

                {/* Mobile Theme Toggle */}

                <motion.button
                  type="button"
                  onClick={handleThemeToggle}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-[#969188]
                    transition-colors
                    hover:bg-white/[0.035]
                    hover:text-[#F5F3EE]
                  "
                >
                  <span>
                    {theme === "dark"
                      ? "Light Mode"
                      : "Dark Mode"}
                  </span>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                    "
                  >
                    {theme === "dark" ? (
                      <svg
                        className="
                          h-4
                          w-4
                          text-[#C9A66B]
                        "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                        />

                        <path
                          strokeLinecap="round"
                          d="
                            M12 2v2
                            M12 20v2
                            M4.93 4.93l1.41 1.41
                            M17.66 17.66l1.41 1.41
                            M2 12h2
                            M20 12h2
                            M4.93 19.07l1.41-1.41
                            M17.66 6.34l1.41-1.41
                          "
                        />
                      </svg>
                    ) : (
                      <svg
                        className="
                          h-4
                          w-4
                          text-[#9A743B]
                        "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="
                            M21 12.8
                            A8.5 8.5 0 1 1
                            11.2 3
                            A6.5 6.5 0 0 0
                            21 12.8Z
                          "
                        />
                      </svg>
                    )}
                  </div>
                </motion.button>

                {/* Mobile Social Links */}

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-1
                    border-t
                    border-white/[0.06]
                    pt-3
                  "
                >
                  {SOCIALS.map(
                    (social) => (
                      <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        whileTap={{
                          scale: 0.9,
                        }}
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          text-[#706D67]
                          transition-colors
                          hover:bg-white/[0.04]
                          hover:text-[#C9A66B]
                        "
                      >
                        <social.icon className="h-4 w-4" />
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
