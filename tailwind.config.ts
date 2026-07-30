import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sabah: {
          950: "#052A24",
          900: "#073B31",
          800: "#0D5747",
          gold: "#C99B47",
          "gold-light": "#E0BD75",
        },
      },
      fontFamily: {
        sans: ["Vazirmatn", "Tahoma", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
