// src/components/layout/Footer.tsx

import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { FOOTER_DATA, siteConfig } from "@/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { getImagePath } from "@/lib/paths";

const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

export const Footer = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // ============================================================
  // Navigation
  // ============================================================

  const navLinks = [
    { title: "Home", link: "#about-me" },
    { title: "Skills", link: "#skills" },
    { title: "Projects", link: "#view-my-work" },
    { title: "Contact", link: "#contact" },
  ];

  // ============================================================
  // Scroll to section
  // ============================================================

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(sectionId);

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
      const element = document.getElementById(sectionId);

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

  const handleNavClick = (
    e: React.MouseEvent,
    link: string
  ) => {
    e.preventDefault();

    const sectionId = link.replace("#", "");

    scrollToSection(sectionId);
  };

  // ============================================================
  // Render
  // ============================================================

  return (
    <footer
      className={`
        relative
        border-t
        transition-colors
        duration-300

        ${
          theme === "dark"
            ? "bg-[#0A0A0A] border-white/[0.07]"
            : "bg-[#F5F4EF] border-black/[0.07]"
        }
      `}
    >
      {/* ========================================================
          Subtle top accent
      ========================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-px
          w-32
          -translate-x-1/2
          bg-[#C9A66B]
          opacity-50
        "
      />

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          py-14
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-12
          "
        >
          {/* ====================================================
              Brand
          ===================================================== */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                {/* Logo */}

                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
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
                      opacity-10
                      blur-xl
                    "
                  />

                  <div
                    className="
                      relative
                      h-10
                      w-10
                      overflow-hidden
                      rounded-full
                      border
                      border-white/[0.10]
                      bg-[#141414]
                    "
                  >
                    <img
                      src={getImagePath("/logo.png")}
                      alt={siteConfig.name}
                      className="
                        h-full
                        w-full
                        rounded-full
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
                            ".footer-initials"
                          )
                        ) {
                          const div =
                            document.createElement(
                              "div"
                            );

                          div.className =
                            "footer-initials flex h-full w-full items-center justify-center rounded-full bg-[#C9A66B] text-sm font-bold text-[#0A0A0A]";

                          div.textContent = "AK";

                          parent.appendChild(div);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Name */}

                <div>
                  <div
                    className={`
                      text-base
                      font-semibold
                      tracking-tight

                      ${
                        theme === "dark"
                          ? "text-[#F5F3EE]"
                          : "text-[#171717]"
                      }
                    `}
                  >
                    {siteConfig.name}
                  </div>

                  <div
                    className={`
                      mt-0.5
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.08em]

                      ${
                        theme === "dark"
                          ? "text-[#706D67]"
                          : "text-[#918D84]"
                      }
                    `}
                  >
                    {siteConfig.role}
                  </div>
                </div>
              </div>

              <p
                className={`
                  max-w-sm
                  text-sm
                  leading-7

                  ${
                    theme === "dark"
                      ? "text-[#8D8981]"
                      : "text-[#65615A]"
                  }
                `}
              >
                Building secure, performant, and
                delightful digital experiences with
                modern web technologies.
              </p>
            </motion.div>
          </div>

          {/* ====================================================
              Quick Links
          ===================================================== */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.05,
              }}
            >
              <h3
                className={`
                  mb-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  ${
                    theme === "dark"
                      ? "text-[#C9A66B]"
                      : "text-[#9A743B]"
                  }
                `}
              >
                Navigation
              </h3>

              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <button
                      onClick={(e) =>
                        handleNavClick(
                          e,
                          link.link
                        )
                      }
                      className={`
                        group
                        relative
                        text-sm
                        transition-colors
                        duration-200

                        ${
                          theme === "dark"
                            ? "text-[#89857D] hover:text-[#F5F3EE]"
                            : "text-[#65615A] hover:text-[#171717]"
                        }
                      `}
                    >
                      <span>
                        {link.title}
                      </span>

                      <span
                        className="
                          absolute
                          -bottom-1
                          left-0
                          h-px
                          w-full
                          origin-left
                          scale-x-0
                          bg-[#C9A66B]
                          transition-transform
                          duration-200
                          group-hover:scale-x-100
                        "
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ====================================================
              Connect
          ===================================================== */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
            >
              <h3
                className={`
                  mb-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  ${
                    theme === "dark"
                      ? "text-[#C9A66B]"
                      : "text-[#9A743B]"
                  }
                `}
              >
                Connect
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {FOOTER_DATA[1]?.data.map(
                  (item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          0.15 +
                          index * 0.05,
                      }}
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className={`
                        flex
                        h-10
                        w-10
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
                              text-[#76736C]
                              hover:border-[#C9A66B]/30
                              hover:bg-[#C9A66B]/[0.05]
                              hover:text-[#D8BC91]
                            `
                            : `
                              border-black/[0.08]
                              bg-black/[0.015]
                              text-[#77726A]
                              hover:border-[#9A743B]/30
                              hover:bg-[#9A743B]/[0.05]
                              hover:text-[#9A743B]
                            `
                        }
                      `}
                    >
                      {item.icon && (
                        <item.icon className="h-4 w-4" />
                      )}
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* ====================================================
              Contact
          ===================================================== */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
            >
              <h3
                className={`
                  mb-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  ${
                    theme === "dark"
                      ? "text-[#C9A66B]"
                      : "text-[#9A743B]"
                  }
                `}
              >
                Contact
              </h3>

              <div
                className={`
                  rounded-2xl
                  border
                  p-4

                  ${
                    theme === "dark"
                      ? `
                        border-white/[0.07]
                        bg-white/[0.02]
                      `
                      : `
                        border-black/[0.07]
                        bg-black/[0.015]
                      `
                  }
                `}
              >
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className={`
                        group
                        flex
                        items-start
                        gap-3
                        text-sm
                        transition-colors

                        ${
                          theme === "dark"
                            ? "text-[#858179] hover:text-[#F5F3EE]"
                            : "text-[#65615A] hover:text-[#171717]"
                        }
                      `}
                    >
                      <span
                        className="
                          mt-1.5
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#C9A66B]
                          transition-transform
                          duration-200
                          group-hover:scale-125
                        "
                      />

                      <span className="break-all">
                        {siteConfig.email}
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`tel:${siteConfig.phone.replace(
                        /\s/g,
                        ""
                      )}`}
                      className={`
                        group
                        flex
                        items-start
                        gap-3
                        text-sm
                        transition-colors

                        ${
                          theme === "dark"
                            ? "text-[#858179] hover:text-[#F5F3EE]"
                            : "text-[#65615A] hover:text-[#171717]"
                        }
                      `}
                    >
                      <span
                        className="
                          mt-1.5
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#C9A66B]
                          transition-transform
                          duration-200
                          group-hover:scale-125
                        "
                      />

                      <span>
                        {siteConfig.phone}
                      </span>
                    </a>
                  </li>

                  <li>
                    <div
                      className={`
                        flex
                        items-start
                        gap-3
                        text-sm

                        ${
                          theme === "dark"
                            ? "text-[#858179]"
                            : "text-[#65615A]"
                        }
                      `}
                    >
                      <span
                        className="
                          mt-1.5
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#C9A66B]
                        "
                      />

                      <span>
                        {siteConfig.location}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ======================================================
            Bottom
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className={`
            mt-14
            border-t
            pt-8

            ${
              theme === "dark"
                ? "border-white/[0.07]"
                : "border-black/[0.07]"
            }
          `}
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              text-center
              md:flex-row
              md:text-left
            "
          >
            <div
              className={`
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
                text-xs

                ${
                  theme === "dark"
                    ? "text-[#66635D]"
                    : "text-[#918D84]"
                }
              `}
            >
              <span>
                © {currentYear} {siteConfig.name}
              </span>

              <span className="text-[#C9A66B]">
                •
              </span>

              <span>
                All rights reserved
              </span>
            </div>

            <div
              className={`
                flex
                items-center
                gap-1.5
                text-xs

                ${
                  theme === "dark"
                    ? "text-[#66635D]"
                    : "text-[#918D84]"
                }
              `}
            >
              <span>
                Built with
              </span>

              <FaHeart
                className="
                  text-[#B85C5C]
                  transition-transform
                  duration-300
                  hover:scale-110
                "
              />

              <span>
                React, TypeScript & Tailwind CSS
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
