// src/components/layout/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`w-full h-full backdrop-blur-lg ${
      theme === 'dark' 
        ? 'bg-[#03001417] text-gray-200' 
        : 'bg-gray-100 text-gray-800'
    }`}>
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap py-8">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className={`font-bold text-[16px] mb-4 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Community
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-row items-center my-[10px] cursor-pointer transition-colors ${
                theme === 'dark' 
                  ? 'text-gray-400 hover:text-purple-400' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <FaGithub className="h-5 w-5 mr-2" />
              <span className="text-[14px]">GitHub</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className={`font-bold text-[16px] mb-4 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Social Media
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-row items-center my-[10px] cursor-pointer transition-colors ${
                theme === 'dark' 
                  ? 'text-gray-400 hover:text-purple-400' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <FaLinkedin className="h-5 w-5 mr-2" />
              <span className="text-[14px]">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-row items-center my-[10px] cursor-pointer transition-colors ${
                theme === 'dark' 
                  ? 'text-gray-400 hover:text-purple-400' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <FaTwitter className="h-5 w-5 mr-2" />
              <span className="text-[14px]">Twitter</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className={`font-bold text-[16px] mb-4 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              About
            </div>
            <a
              href="mailto:ajinkya@example.com"
              className={`flex flex-row items-center my-[10px] cursor-pointer transition-colors ${
                theme === 'dark' 
                  ? 'text-gray-400 hover:text-purple-400' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <span className="text-[14px]">Contact Me</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mb-[20px] text-[13px] text-center ${
          theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
        }`}>
          &copy; {new Date().getFullYear()} Space Portfolio. All rights reserved. | Built with React & Tailwind
        </div>
      </div>
    </footer>
  );
};