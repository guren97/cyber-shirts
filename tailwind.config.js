/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyber-blue": "#00ffff",
        "cyber-pink": "#ff00ff",
        "cyber-yellow": "#ffff00",
        "cyber-black": "#000000",
        "cyber-dark": "#1a1a1a",
        "cyber-gray": "#333333",
        "cyber-light": "#e6e6e6",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        tech: ["Share Tech Mono", "monospace"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        float: "float 6s ease-in-out infinite",
        glitch: "glitch 1s linear infinite",
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-neon": {
          "0%, 100%": {
            textShadow: "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff",
            opacity: 1,
          },
          "50%": {
            textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
            opacity: 0.8,
          },
        },
        glitch: {
          "2%, 64%": { transform: "translate(2px, 0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px, 0) skew(0deg)" },
          "62%": { transform: "translate(0, 0) skew(5deg)" },
        },
      },
      boxShadow: {
        neon: "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff",
      },
    },
  },
  plugins: [],
};
