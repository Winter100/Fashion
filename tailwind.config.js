/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "rgba(var(--background))",
        backgroundOne: "rgba(var(--backgroundOne))",
        backgroundTwo: "rgba(var(--backgroundTwo))",
        btnHoverBackground: "rgba(var(--btnHoverBackground))",
        // background: "var(--background)",
        fontColor: "rgba(var(--fontColor))",
        gnbBackground: "rgba(var(--gnbBackground))",
        borderColor: "rgba(var(--borderColor))",
        toggleBackground: "rgba(var(--toggleBackground))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
