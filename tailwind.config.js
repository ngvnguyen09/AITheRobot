/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#000000",
          800: "#0a0a0a",
          700: "#141414",
          600: "#1e1e1e",
        },
        primary: {
          500: "#3b82f6", // Blueprint blue for AI elements
          600: "#2563eb",
        },
        accent: {
          500: "#8b5cf6", // Purple for AI magic touch
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
