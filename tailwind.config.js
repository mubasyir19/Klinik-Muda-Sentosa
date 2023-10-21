/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        header: "url('/assets/images/bg-header.png')",
        'large-header': "url('/assets/images/header-large.png')",
        background: "url('/assets/images/background1.png')",
        doctors: "url('/assets/images/doctors1.png')",
        background2: "url('/assets/images/background2.png')",
      },
      colors: {
        primary: '#118087',
        secondary: '#00D2DF',
        accent: '#82D0D5',
        'light-blue': '#159EEC',
        'dark-blue': '#1F2B6C',
        'pasty-blue': '#BFD2F8',
        'light-white': '#FCFEFE',
      },
      height: {
        550: '550px',
      },
      width: {
        317: '317px',
      },
      backgroundSize: {
        '70%': '70%',
        1366: '1366px',
      },
    },
  },
  plugins: [],
};
