module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '450px',
      },
      colors: {
        gold: '#FFD700',
      },
      width: {
        '100': '30rem',
        '250': '50rem',
        '280': '88rem',
        '300' : '90rem',
        'max-100': '30rem',
        'max-250': '50rem',
        'max-280': '88rem',
        'max-300': '90rem',
      },
      height: {
        '100': '30rem',
        '253': '53rem',
        '255': '55rem',
        'max-100': '30rem',
        'max-253': '53rem',
        'max-255': '55rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.candy-cane-border': {
          backgroundImage: 'linear-gradient(45deg, #ff0000 25%, #ffffff 25%, #ffffff 50%, #ff0000 50%, #ff0000 75%, #ffffff 75%, #ffffff 100%)',
          backgroundSize: '30px 30px',
          borderRadius: '10px',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

