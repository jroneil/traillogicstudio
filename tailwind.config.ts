import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D5A4A",
        "primary-dark": "#23463A",
        accent: "#F6AD55",
        background: "#F7FAFC",
        text: "#1F2933",
        border: "#E2E8F0",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "18px",
      },
    },
  },
  plugins: [],
};

export default config;
