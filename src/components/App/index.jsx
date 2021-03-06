import { useObserver } from 'mobx-react'
import Router from '/src/components/Router'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Users from '/src/service/Users'
import CircularProgress from '@material-ui/core/CircularProgress'
import Popover from '/src/components/Popover'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5a9cd6',
      dark: '#5a9cd6',
      light: '#5a9cd6',
    },
    secondary: {
      main: '#2196f3',
      dark: '#1769aa',
      light: '#4dabf5',
    },
  }
})

const usersModel = new Users()

function App(props) {
  return useObserver(() => (
    <ThemeProvider theme={theme}>
      {usersModel.error ? <Popover error={usersModel.error} /> : null}
      {usersModel.init ? <CircularProgress /> : <Router usersModel={usersModel} />}{' '}
    </ThemeProvider>
  ))
}

export default App
