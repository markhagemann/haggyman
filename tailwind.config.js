module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: ['./src/css/global', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      fontFamily: {
        exo: ['Exo'],
        titillium: ['Titillium Web']
      },
      colors: {
        blue: {
          'custom-transparent': 'rgba(8, 31, 45, 0.5)',
          'dark-custom-border': '#0a3557',
          'darker-custom': '#12223c',
          'darkest-custom': '#00182c',
          'dark-custom-border': '#0a3557',
          'darker-alt': '#1d345b'
        },
        grey: {
          'light': '#dae1e7'
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-border-gradients')({
      variants: ['responsive'],
      directions: {
        t: 'to top',
        r: 'to right',
        b: 'to bottom',
        l: 'to left'
      },
      gradients: {
        'blue-custom': ['#12223c', '#0a3557', '#12223c']
      }
    }),
    require('tailwindcss-bulma-modals')()
  ]
};
