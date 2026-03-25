// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#030014',
        'space-purple': '#2A0E61',
        'neon-purple': '#7042f8',
        'neon-cyan': '#00c6ff',
        // Light mode colors
        'light-bg': '#ffffff',
        'light-surface': '#f3f4f6',
        'light-text': '#111827',
        'light-text-secondary': '#4b5563',
        // Dark mode colors
        'dark-bg': '#030014',
        'dark-surface': '#0a0a1f',
        'dark-text': '#ffffff',
        'dark-text-secondary': '#9ca3af',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 3s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(90deg, #7042f8 0%, #00c6ff 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(112, 66, 248, 0.5)',
        'glow-lg': '0 0 30px rgba(112, 66, 248, 0.6)',
      },
    },
  },
  plugins: [],
}