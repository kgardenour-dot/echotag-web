/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0d1422",
        nightSoft: "#111924",
        slateSoft: "#151f30",
        honey: "#f5c16e",
        textMain: "#fdf5eb",
        textMuted: "#c0c6d6",
      },
      boxShadow: {
        "soft-card": "0 18px 40px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};

