module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      body: ['Quicksand', 'sans-serif'],
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
      colors: {
        primary: '#218BBD',
        secondary: '#01B1E2',
        tertiary: '#004C66',
        accent: {
          DEFAULT: '#FC4182',
          hover: '#E63271',
        },
        paragraph: '#003F54',
        login: {
          color: '#002531',
        },
      },
      backgroundImage: {
        login: "url('https://picsum.photos/400/400/?random')",
      },
    },
  },
  plugins: [],
};
