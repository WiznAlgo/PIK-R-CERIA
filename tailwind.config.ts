import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ceria: {
          toska: "#00BFA6",
          kuning: "#FFC107",
          gray: "#F5F5F5",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
