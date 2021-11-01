import './App.css';
import { useState, useMemo } from 'react'
import useDarkMode from './Components/useDarkMode'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import Form from './Components/Form'
import Display from './Components/Display'

function App() {
  const [ mode, toggleMode ] = useDarkMode()

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: mode,
      }
    }), [mode]
  )
  
  const [display, setDisplay] = useState({
    firstName: 'random',
    lastName: 'name',
    email: 'randomname@gmail.com',
    location: 'seattle'
  })
  

  const handleSubmit = (e, formData) => {
    e.preventDefault()
    setDisplay(formData)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Display display={display} />
        <Form handleSubmit={handleSubmit} />
      </div>
    </ThemeProvider>
  );
}

export default App;
