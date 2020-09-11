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
      colors: {
        blue: {
          'custom-transparent': 'rgba(8, 31, 45, 0.5)',
          dark: '#2779bd',
          'dark-custom-border': '#0a3557',
          'darker-custom': '#12223c',
          'darkest-custom': '#00182c',
          'dark-custom-border': '#0a3557',
          'darker-alt': '#1d345b',
          light: '#6cb2eb',
          lighter: '#bcdefa',
          lightest: '#eff8ff',
          standard: '#3490dc',
        },
        grey: {
          darkest: '#3d4852',
          darker: '#606f7b',
          dark: '#8795a1',
          light: '#dae1e7',
          lighter: '#f1f5f8',
          lightest: '#f8fafc',
          standard: '#b8c2cc',
        }
      },
      fontFamily: {
        exo: ['Exo'],
        titillium: ['Titillium Web']
      },
      margin: {
        '75': '18.75rem',
        '84': '21rem'
      },
      padding: {
        '75': '18.75rem',
        '84': '21rem'
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
