import './App.css';
import { useState, useMemo } from 'react'
import useDarkMode from './Components/useDarkMode'

import CssBaseline from '@mui/material/CssBaseline';
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import Form from './Components/Form'
import Display from './Components/Display'

import MaterialUISwitch from './Components/MaterialUISwitch';

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
      <CssBaseline />
      <div className="App">
        <FormGroup>
          <FormControlLabel 
            control={<MaterialUISwitch sx={{ m: 2 }} />}
            checked={mode === 'dark'}
            onChange={toggleMode}
            label={`${mode} mode`}
          />
        </FormGroup>
        <Display display={display} />
        <Form handleSubmit={handleSubmit} />
      </div>
    </ThemeProvider>
  );
}

export default App;
