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
        primary: "#2F4F3A",
        "primary-dark": "#1F3325",
        accent: "#C5A45A",
        background: "#F4F1EB",
        surface: "#FAFAF8",
        text: "#2A2A2A",
        border: "#C5A45A",
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
