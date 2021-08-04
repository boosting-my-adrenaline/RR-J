import { createMuiTheme } from '@material-ui/core/styles'
export default createMuiTheme({
  pallette: {
    primary: {
      main: '#181d33',
    },
    secondary: {
      light: '#0066ff',
      main: '0044ff',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffser: 0.2,
  },
  typography: {
    // fontFamily: ['"Fira Code,"Roboto","Courier" '].join(','),
    fontFamily: 'Courier',
    h3: {
      fontSize: '1.2rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
  },
})
