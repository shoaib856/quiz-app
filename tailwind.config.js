/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#A729F5",
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "grey-navy": "#626C7F",
        green: "#26D782",
        light: {
          bluish: "#ABC1E1",
          grey: "#F4F6FA",
          purple: "#F6E7FF",
        },
        red: "#EE5454",
      },
      fontSize: {
        "display-font": "144px",
        "heading-lg": "64px",
        "heading-md": "36px",
        "heading-sm": "28px",
        body: "20px",
      },
      fontFamily: {
        rubik: "Rubik, sans-serif",
        "rubik-italic": "Rubik-Italic, sans-serif",
      },
      boxShadow: {
        "choice-shadow": " 0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
      },
    },
  },
  plugins: [],
};
