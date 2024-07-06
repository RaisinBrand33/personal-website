import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "nasa-cyan": "#01a9a9",
        "nasa-orange": "#ff8a03",
        "nasa-yello": "#ffbd03",
        "nasa-red": "#fc1502",
        "nasa-cream": "#f7efd8"
      }
    },
  },
  plugins: [],
};
export default config;
