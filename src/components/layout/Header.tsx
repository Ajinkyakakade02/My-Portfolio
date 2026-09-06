// src/components/layout/Header.tsx

import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { SOCIALS, siteConfig } from "@/constants";
import { getImagePath } from "@/lib/paths";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about-me");
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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
  // Navigate + scroll
  // ============================================================

  const navigateAndScroll = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element =
          document.getElementById(sectionId);

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
      }, 100);
    } else {
      const element =
        document.getElementById(sectionId);

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

  // ============================================================
  // Navigation click
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
  // Scroll detection + active section
  // ============================================================

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 24);

      if (location.pathname !== "/") {
        setActiveSection("");
        return;
      }

      let currentSection = "about-me";

      for (const link of navLinks) {
        const element =
          document.getElementById(link.sectionId);

        if (!element) continue;

        const top =
          element.getBoundingClientRect().top +
          window.scrollY;

        if (currentScroll >= top - 140) {
          currentSection = link.sectionId;
        }
      }

      setActiveSection(currentSection);
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
  // Logo click
  // ============================================================

  const handleLogoClick = (
    e: React.MouseEvent
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
          top-0
          left-0
          right-0
          z-50
          px-4
          sm:px-6
          lg:px-8
          transition-all
          duration-300

          ${
            scrolled
              ? `
                bg-[#030014]/75
                backdrop-blur-xl
                border-b
                border-white/[0.08]
                shadow-[0_8px_30px_rgba(0,0,0,0.15)]
              `
              : `
                bg-transparent
                border-b
                border-transparent
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
              LEFT - Logo / Name
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
              items-center
              gap-3
              shrink-0
              cursor-pointer
              select-none
            "
          >
            {/* Logo */}

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
              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500
                  to-cyan-500
                  opacity-40
                  blur-md
                "
              />

              {/* Logo container */}

              <div
                className="
                  relative
                  h-8
                  w-8
                  overflow-hidden
                  rounded-full
                  border
                  border-white/10
                  bg-[#0d0b18]
                "
              >
                <img
                  src={getImagePath("/logo.png")}
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
                      e.currentTarget.parentElement;

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
                        "header-initials flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 text-[10px] font-bold text-white";

                      div.textContent = "AK";

                      parent.appendChild(div);
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
                  text-white
                "
              >
                {siteConfig.name}
              </div>

              <div
                className="
                  mt-0.5
                  text-[10px]
                  font-medium
                  tracking-[0.08em]
                  text-white/35
                  uppercase
                "
              >
                {siteConfig.role}
              </div>
            </div>
          </motion.a>

          {/* ====================================================
              CENTER - Desktop Navigation
          ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              md:flex
            "
          >
            <div
              className="
                flex
                items-center
                gap-1
                rounded-full
                border
                border-white/[0.06]
                bg-white/[0.025]
                p-1
                backdrop-blur-md
              "
            >
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === "/" &&
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
                    className={`
                      relative
                      rounded-full
                      px-4
                      py-2
                      text-[13px]
                      font-medium
                      transition-colors
                      duration-200

                      ${
                        isActive
                          ? "text-white"
                          : "text-white/45 hover:text-white/85"
                      }
                    `}
                    whileTap={{
                      scale: 0.96,
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="headerActivePill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="
                          absolute
                          inset-0
                          rounded-full
                          border
                          border-purple-400/20
                          bg-white/[0.08]
                        "
                      />
                    )}

                    <span className="relative z-10">
                      {link.title}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* ====================================================
              RIGHT - Socials + Mobile button
          ===================================================== */}

          <div className="flex items-center gap-2">
            {/* Social icons */}

            <div className="hidden items-center gap-1 md:flex">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{
                    y: -2,
                    scale: 1.08,
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
                    text-white/40
                    transition-all
                    duration-200
                    hover:bg-white/[0.06]
                    hover:text-purple-300
                  "
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            {/* Mobile menu */}

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
                bg-white/[0.035]
                text-white/70
                transition-colors
                hover:bg-white/[0.08]
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
                    strokeLinejoin="round"
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
                max-w-6xl
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
                  bg-[#080810]/90
                  p-2
                  shadow-2xl
                  backdrop-blur-2xl
                "
              >
                {/* Mobile links */}

                <div className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive =
                      location.pathname === "/" &&
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

                          ${
                            isActive
                              ? `
                                bg-purple-500/10
                                text-purple-300
                              `
                              : `
                                text-white/60
                                hover:bg-white/[0.04]
                                hover:text-white
                              `
                          }
                        `}
                      >
                        {link.title}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Mobile socials */}

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    border-t
                    border-white/[0.06]
                    pt-3
                  "
                >
                  {SOCIALS.map((social) => (
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
                        text-white/45
                        transition-colors
                        hover:bg-white/[0.05]
                        hover:text-purple-300
                      "
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
