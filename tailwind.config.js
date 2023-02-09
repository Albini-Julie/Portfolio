/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
 colors: {
  "Blanc": "#ffffff",
  "Noir": "#000000",
  "Rose": "#ff8fa3",
  "Rouge": "#b40d0d",
  "rose_pastel": "#ff8fa3",
  "rouge_pastel": "#b40d0d",
  "beige": "#fffbee",
  "Turquoise": "#00dfed",
  "Chocolat": "#4d2000",
  "Turquoise_pastel": "#00dfed",
  "violet-bleu": "#7879f1",
  "Gris_foncé": "#515151",
  "violet_pastel": "#7879f1",
  "Bleu_Ciel": "#70c9f3"
 },
 fontSize: {
   "base": "1rem",
  "lg": "1.5625rem",
  "xl": "3.75rem",
  "2xl": "5.625rem"
 },
 fontFamily: {
  "poppins": "Poppins",
  "anton": "Anton"
 },
 borderRadius: {
  "none": "0",
  "xs": "0.3125rem",
  "sm": "0.625rem",
  "full": "9999px"
}
    },
  },
  plugins: [],
}