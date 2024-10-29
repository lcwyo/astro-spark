/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "4rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "8rem",
      },
      screens: {
        DEFAULT: "640px",
        sm: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "raleway-italic": ["Raleway-Italic", "sans-serif"],
        "open-sans": ["OpenSans", "sans-serif"],
        "open-sans-italic": ["OpenSans-Italic", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        accent: "#2EC44B", // Vibrant green, inspired by natural tones, for buttons or highlights
        gray: "#0D0E12", // Darker gray for strong contrast against vibrant colors
        elevated: "#FAF5F0", // Slightly warmer off-white, for a soft but clean background
        negative: "#E63946", // Bold red, slightly more saturated to stand out in warnings or alerts
        positive: "#10B981", // Bright, engaging green, suitable for success messages
        primary: "#4A1CD4", // Deeper, royal purple for a strong primary color
        secondary: "#D946EF", // Vibrant magenta for secondary accents to add energy
      },

      keyframes: {
        slider: {
          from: { transform: "translate(0)" },
          to: { transform: "translate(calc(-320px * 5 - 12rem))" },
        },
        "slider-md": {
          from: { transform: "translate(0)" },
          to: { transform: "translate(calc(-432px * 5 - 12rem))" },
        },
        "slider-lg": {
          from: { transform: "translate(0)" },
          to: { transform: "translate(calc(-544px * 5 - 12rem))" },
        },
      },
      animation: {
        slider: "slider 20s linear infinite",
        "slider-md": "slider-md 20s linear infinite",
        "slider-lg": "slider-lg 20s linear infinite",
      },
    },
  },
  plugins: [],
};
