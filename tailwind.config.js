/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "petal-cream": "#FFF9F6",
        "blossom-white": "#FFFFFF",
        "rose-mist": "#FDF3EE",
        "rose-subtle": "#FAECE4",
        "soft-petal": "#F4D4DF",
        "blush-rose": "#9E4A64",
        "blush-accent": "#EAA2B7",
        "garden-charcoal": "#241B21",
        "dusty-sage": "#7D9585",
        "meadow-green": "#4D6B57",
        "warm-gold": "#C4943D"
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        script: ["'Caveat'", "cursive"],
        mono: ["'JetBrains Mono'", "monospace"]
      }
    },
  },
  plugins: [],
}
