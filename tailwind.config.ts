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
        richGray: "#212731",
        richwhite: "#FBFCFD",
        grayText: "#2C384A",
        grayText2: "#2C384A",
        lightGray: "#4B5665",
        orangeBackground: "#FF7724",
        bluebackground: "#1B88F4",
        whiteBox: "#F3F9FF",
        grayText3: "#4B5665",
        headLine: "#E1E4E6",
        imageText: "#626E79",
        navbarBg: "#212731",
      },
    },
  },
  plugins: [],
};
export default config;
