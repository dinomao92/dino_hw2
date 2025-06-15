/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}', // 掃描你 src 裡所有元件
    ],
    theme: {
      extend: {
        fontFamily: {
          yuround: ['YuRound', 'sans-serif'], // 加入你要的圓體
        },
      },
    },
    plugins: [],
  };
  