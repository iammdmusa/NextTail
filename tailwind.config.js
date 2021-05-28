const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  darkMood: "media",
  purge: [
    "./public/**/*.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}", 
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black:{
          ...colors.black,
          ethian: '#363636',
        },
        gray: {
          ...colors.gray,
          ethian: '#7d7d99',
          linkwaterblue: '#c9c9d6'
        },
        green:{
          ...colors.green,
          hospital: '#b3e1ca',
          slategreen: '#597868',
        },
        blue:{
          ...colors.blue,
        },
        orange:{
          flamingo: '#e56756'
        }
      },
      width: {
        '96': '24rem',
        '80': '20rem'
      },
      transitionTimingFunction: {
        'ease-out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)'
      },
      boxShadow: {
        outline: '0 0 0 1px rgba(229, 103, 86, 0.4)',
      },
    }
  },
  variants: {
  },
  plugins: [
		require('tailwindcss'),
		require('precss'),
		require('autoprefixer'),
    require('postcss-import'),
	],
  future: {
    removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
  },
}