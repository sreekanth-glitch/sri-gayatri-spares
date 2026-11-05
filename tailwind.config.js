/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { ink: "#07162f", navy: "#0b2148", gold: "#ffc928", red: "#ed1c24" },
    boxShadow: { glow: "0 12px 40px rgba(255,201,40,.15)" }
  }},
  plugins: []
};
