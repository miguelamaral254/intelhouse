module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1198px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#FFA41B',
        secundary: '#000',
        accent: '#FFA41B',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        banner:"url('./assets/bg.png')",
        aboutbg:"url('./assets/aboutbg.png')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
        benefitsbg: "url('./assets/benefits.png')",
        team: "url('./assets/time.png')",
      },
    },
  },
  plugins: [],
};
