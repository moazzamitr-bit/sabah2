import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sabah: {
          950: "#06172E",
          900: "#0A2342",
          800: "#102F55",
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
