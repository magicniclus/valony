import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#1c1c1c",
      textClear: "#256068",
      or: "#938664",
      background: "#A78E88",
      white: "#FFFFFF",
      gray: "#E8E3E2",
      beige: "#E6DFDE",
      beigeDark: "#A78E88"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      outfit : ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
