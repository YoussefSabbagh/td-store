/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        myBlack: '#001229', //ok
        myGray: '#ACACAF', //ok
        myWhite: '#EFF1FB', // ok
        myPurple: '#542754',
        myOrange: '#E7BB41',
        error: '#CC0000',
        cta: '#CC0000',
        success: '#1CD000',
        'primary-100': '#EFF1FB',
        'primary-300': '#00A8CC',
        'primary-500': '#0E46BE',
      },
      // backgroundImage: {
      //   contact: "url('assets/image/bgs/1.jpg')",
      //   "gradient-to-b":
      //     "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);",
      // },
      // objectPosition: {
      //   center: "center center",
      // },
      backgroundImage: (theme) => ({
        'gradient-yellowred':
          'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home':
          "url('./assets/images/pictures/HomePageIlustration.png')",
      }),
      fontFamily: {
        title: ['Teko', 'sans-serif'],
        body: ['Merriweather Sans', 'sans-serif'],
      },
      content: {
        tdfitness: "url('./assets/image/pictures/tdfitness.png')",
        abstractwaves: "url('./assets/image/pictures/AbstractWaves.png')",
        sparkles: "url('./assets/image/pictures/Sparkles.png')",
        circles: "url('./assets/image/pictures/Circles.png')",
      },
    },
    // screens: {
    //   xs: '480px',
    //   sm: '768px',
    //   md: '1060px',
    // },
  },
  plugins: [],
};
