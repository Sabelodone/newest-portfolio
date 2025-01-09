/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all your source files where Tailwind classes are used
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C5CE7', // Vibrant purple for primary elements
        secondary: '#FDCB82', // Soft gold for accents
        background: '#1E1E1E', // Dark background for the scene and UI
        accent: '#9F7AEA', // Light purple for highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern sans-serif for a luxurious feel
        display: ['Poppins', 'sans-serif'], // Contrasting font for headings
      },
      boxShadow: {
        luxury: '0 4px 12px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for a premium look
        header: '0 4px 16px rgba(0, 0, 0, 0.2)', // Shadow for a sticky header
      },
      spacing: {
        128: '32rem', // Large spacing for bigger layouts
      },
      screens: {
        '2xl': '1536px', // Extra-large screen for larger devices
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Radial gradient for enhanced aesthetics
      },
      animation: {
        'pulse-laser': 'pulse-laser 2s infinite linear', // Laser pulse animation
      },
      keyframes: {
        'pulse-laser': {
          '0%': { opacity: '0.2' },
          '50%': { opacity: '0.6' },
          '100%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Plugin for form styles
    require('@tailwindcss/typography'), // Plugin for typography improvements
    require('daisyui'), // Prebuilt UI components
    require('@tailwindcss/aspect-ratio'), // Plugin for managing aspect ratios
  ],
};
