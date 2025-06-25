module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#fff9c7",
          foreground: "#79300f",
          yellow: "#f6d110",
          dark: "#62470e",
        },
        secondary: {
          background: "#ffffff",
          foreground: "#333333",
          light: "#f7f7f7",
          dark: "#222222",
        },
        accent: {
          DEFAULT: "#854b14",
          foreground: "#ffffff",
          light: "#746b6b",
          dark: "#792f0f",
        },
        border: {
          primary: "#cccccc",
          secondary: "#999999",
          light: "#e0e0e0",
          dark: "#666666",
        },
      },
      fontFamily: {
        'dm-serif': ['DM Serif Display', 'serif'],
        'alata': ['Alata', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'joan': ['Joan', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'antic': ['Antic', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};