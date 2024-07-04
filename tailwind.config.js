/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jet: "'JetBrains Mono', monospace",
        roboto: "'Roboto', sans-serif",
        geo: " 'Georama', sans-serif",
        fira: " 'Fira Code', monospace",
      },
    },
  },
  plugins: [require('daisyui')],
};
