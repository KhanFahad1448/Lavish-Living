/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        ivory: "#faf7f0",
        cream: "#f4efe3",
        emerald: {
          DEFAULT: "#1f4a3a",
          deep: "#143229",
        },
        brass: {
          DEFAULT: "#c8a560",
          light: "#e3c98a",
        },
        ink: "#1a1f1c",
      },
      boxShadow: {
        luxe: "0 30px 80px -20px rgba(20,50,41,0.35)",
        soft: "0 10px 30px -12px rgba(20,50,41,0.18)",
      },
      backgroundImage: {
        "gradient-luxe": "linear-gradient(135deg,#1f4a3a 0%,#143229 100%)",
        "gradient-brass": "linear-gradient(135deg,#e3c98a 0%,#a8843f 100%)",
      },
    },
  },
  plugins: [],
};
