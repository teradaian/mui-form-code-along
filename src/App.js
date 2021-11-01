import './App.css';
import { useState, useEffect } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'

import PersonIcon from '@mui/icons-material/Person'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'

function App() {
  const [display, setDisplay] = useState({
    firstName: 'random',
    lastName: 'name',
    email: 'randomname@gmail.com',
    location: 'seattle'
  })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setDisplay(formData)
  }

  useEffect(() => {
    console.log(display)
  }, [display])

  return (
    <div className="App">
      





      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '50%', mt: '2rem' }}
      >
        <Paper elevation={4} sx={{ width: '100%', p: '1rem' }}  >
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="firstName"
              label="First Name"
              autoComplete="off"
              margin="normal"
              fullWidth
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="lastName"
              label="Last Name"
              autoComplete="off"
              margin="normal"
              fullWidth
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="email"
              label="Email"
              autoComplete="off"
              margin="normal"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="location"
              label="Location"
              autoComplete="off"
              margin="normal"
              fullWidth
              required
              value={formData.location}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" fullWidth> Submit </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
