import './App.css';
import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

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

  return (
    <div className="App">
      <Box>
        <Paper>
          <form>
            <TextField
              type="text"
              name="firstName"
              label="First Name"
              value={formData.firstName}
            />
            <TextField
              type="text"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
            />
            <TextField
              type="text"
              name="email"
              label="Email"
              value={formData.email}
            />
            <TextField
              type="text"
              name="location"
              label="Location"
              value={formData.location}
            />
            <Button type="submit"> Submit </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
