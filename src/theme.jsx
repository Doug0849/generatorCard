import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'AlaskaAir',AS Circular`,
    body: `'AlaskaAir','AS Circular'`,
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
    black: 900,
  }
})

export default theme