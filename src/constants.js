const colors = {
  fg: '#262222',
  bg: '#FFF',
  black: '#000',
  white: '#FEFEFE',
  grey: '#777',
  blueLight: '#33708D',
  blueDark: '#122D41',
  offWhite: '#D8D6CF',
  red: '#722E38',
  maroon: '#7A5037',
  maroonOpague: 'rgba(122,80,55,.6)'
}

const gradients = {
  ocean: `linear-gradient(to bottom, ${colors.blueLight} 0%, ${colors.blueDark} 100%)`,
  text: `linear-gradient(to bottom, #122D41 0%, ${colors.blueDark} 100%)`
}

const shadows = {
  default: '2px 5px 8px rgba(0,0,0,0.01), 0 5px 20px rgba(0,0,0,0.10)',
  hover: '1px 3px 5px rgba(0,0,0,0.12), 0 5px 10px rgba(0,0,0,0.15)',
  image: '0 2px 5px rgba(0,0,0,.1), 0 0 25px rgba(38,34,34,.05)'
}

export const theme = {
  colors,
  gradients,
  shadows
}

export const sizes = {
  tabPort: '45em',
  tabLand: '75em',
  desktop: '112.5em'
}

export const baseUrl = 'https://www.baaden.koeln'
