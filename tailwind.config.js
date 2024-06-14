/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

const oldColorsConfig = {
  primary: '#1abb9c',
  header: '#EDEDED',
  subHeading: '#818994',
  blue: {
    DEFAULT: '#18a0d7',
    500: '#e7f5fb'
  },
  red: {
    DEFAULT: '#e66c6c',
    500: '#fbebeb'
  },
  yellow: {
    DEFAULT: '#a2d531'
  },
  green: {
    DEFAULT: '#04b7b3'
  },
  indigo: {
    900: '#425668',
    800: '#314456',
    760: '#3E5367',
    750: '#485874',
    700: '#73879c',
    600: '#6e81a5',
    500: '#9baaba',
    DEFAULT: '#2A3F54'
  },
  gray: {
    DEFAULT: '#c7c7c7',
    900: '#8f9192',
    800: '#b2bfc9',
    700: '#c2ced8',
    // #8f9192
    500: '#e5e5e5', // remove this for new development
    400: '#ebebeb', // remove this for new development
    300: '#D9DEE4',
    200: '#e8ebef',
    150: '#f5f5f5',
    100: '#f9f9f9'
  },
  'main-gradient': {
    DEFAULT: '-webkit-linear-gradient(55deg, rgba(143,195,30,1) 50%, rgba(20,159,213,1) 100%)'
  }
}
module.exports = {
  // content: ['"./src/**/*.{vue,js,ts,jsx,tsx}"', '"./src/components/**/*.{vue,js,ts,jsx,tsx}"'],
  // content: ['"./src/components/layout/DefaultLayout.vue"'],
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    'bg-gradient-1',
    'labelColumn',
    {
      pattern: /from-accent-(red|green|gray|orange)-gradient-(1|2)/
    },
    {
      pattern: /to-accent-(red|green|gray|orange)-gradient-(1|2)/
    },
    {
      pattern:
        /border-accent-(yellow|borderLight|border|borderDark|yellow|yellowDark|green|greenDark|grayLight|gray|grayDark|oceanGreen|oceanGreenDark|oceanGreenExtraDark|violet|violetDark|redLight|red|redDark|blue|blueDark)/
    }
  ],
  theme: {
    // fontSize: {
    //     'xs-1': ['13px', '15px']
    // },
    extend: {
      spacing: {
        4.5: '18px',
        7.5: '30px'
      },
      height: {
        'main-section': 'calc(100% - 56px)'
      },
      borderWidth: {
        3: '3px'
      },
      rounded: {},
      backgroundImage: {
        'green-gradient-3': 'linear-gradient(to left top, #1CA2CC, #97C72F)',
      },
      colors: Object.assign(oldColorsConfig, {
        primary: {
          'extraDark-300': '#6F6F6F',
          'extraDark-200': '#717171',
          'extraDark-100': '#8B8D90',
          extraDark: '#848484',
          // light: '#e1e1e1',
          'darker-300': '#DADADA',
          'darker-200': '#e2e2e2',
          'dark-100': '#f5f5f5',
          dark: '#ebebeb',
          DEFAULT: '#f7f7f7',
          lighter: '#fbfbfb'
        },
        secondary: {
          darker: '#314456',
          dark: '#182f45',
          DEFAULT: '#2a3f54',
          'light-500': '#3C5166',
          lighter: '#337ab7',
          'lighter-600': '#286192'
        },
        accent: {
          devider: '#E2E2E2',
          'hover-blue': '#E7F5FA',
          'active-blue': '#dcecf3',
          'active-blue-light': '#edf8fc',
          borderLight: 'rgb(221, 221, 221, 0.4)',
          border: '#dddddd',
          borderDark: '#b0b0b0',
          'yellow-light': '#F5F4CD',
          'yellow-light-border': '#FFFCA0',
          'yellowLight-900': '#fcf4e8',
          yellow: '#f0ad4e',
          yellowDark: '#d89b46',
          green: '#26b99a',
          'green-100': '#1abb9c',
          greenDark: '#169f85',
          grayLight: '#b2bfc9',
          gray: '#4b5f71',
          grayDark: '#364b5f',
          oceanGreenLight: '#2DA7B6',
          oceanGreen: '#11BAB3',
          oceanGreenDark: '#00acad',
          oceanGreenExtraDark: '#189093',
          violet: '#a478cd',
          violetDark: '#936cb8',
          'redLight-900': '#fce3e3',
          redLight: '#ec4753',
          red: '#CB372F',
          redDark: '#af2b2b',
          link: '#0042ff',
          'link-2': '#1844D8',
          skyBlue: '#18a0d7',
          blue: '#3370b1',
          blueDark: '#2d5e98',
          'gradient-1': '#8fc31e',
          'gradient-2': '#149fd5',
          'gray-gradient-2': '#c7c7c7',
          'gray-gradient-1': '#e5e5e5',
          'red-gradient-2': '#ce335f',
          'red-gradient-1': '#f25b86',
          'orange-gradient-2': '#e97a17',
          'orange-gradient-1': '#eb974c',
          'green-gradient-2': '#8ec320',
          'green-gradient-1': '#15a0d3',
          'green-gradient-3': 'linear-gradient(to left top, #97C72F, #1CA2CC)'
        }
      })
    },
    fontFamily: {
      montserrat: 'Montserrat',
      poppins: 'Poppins'
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      require('@tailwindcss/line-clamp')
      addVariant('even', ['.even &'])
      addVariant('odd', ['.odd &'])
      addVariant('active', ['&.active'])
      addVariant('sidebar-small', ['.sidebar-small &', '&.sidebar-small'])
      addVariant('disabled', ['.disabled &', '&.disabled'])
    })
  ]
}

