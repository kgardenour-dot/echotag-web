/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        terracotta: "#D4745E",
        deepSlateBlue: "#4A5F7F",
        // Accent colors
        sageGreen: "#A8B5A1",
        honeyGold: "#E8A838",
        // Neutral colors
        warmOffWhite: "#FAF7F2",
        stoneGray: "#D1CFC7",
        richCharcoal: "#1F2937",
        // Secondary text
        mutedSage: "#8FA88E",
        // Legacy support (will be replaced)
        night: "#0d1422",
        nightSoft: "#111924",
        slateSoft: "#151f30",
        honey: "#E8A838",
        textMain: "#1F2937",
        textMuted: "#8FA88E",
      },
      boxShadow: {
        "soft-card": "0 18px 40px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};

