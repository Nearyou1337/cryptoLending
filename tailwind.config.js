/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        standart: "#fff",
        fbtn: "#8CB1FF",
        sbtn: "#2050F6 ",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
      dropShadow: {
        "2xl": "0 5px 5px rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
