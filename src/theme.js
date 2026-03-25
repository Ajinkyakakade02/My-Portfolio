import { createTheme } from '@mui/material/styles'

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'light' ? '#F8F9FA' : '#0E0E0E',
        paper: mode === 'light' ? '#FFFFFF' : '#161616'
      },
      primary: {
        main: mode === 'light' ? '#111111' : '#FFFFFF'
      },
      text: {
        primary: mode === 'light' ? '#111111' : '#F5F5F5'
      }
    },
    typography: {
      fontFamily: `'Inter', sans-serif`,
      h4: { fontWeight: 700 },
      body1: { fontSize: '0.95rem' },
      button: { textTransform: 'none', fontWeight: 600 }
    },
    shape: {
      borderRadius: 10
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }
        }
      }
    }
  })
