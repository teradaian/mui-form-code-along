import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

const Form = ({ handleSubmit }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        location: ''
      })
    
      const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
      }

    return ( 
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '50%', mt: '2rem' }}
      >
        <Paper elevation={4} sx={{ width: '100%', p: '1rem' }}  >
          <form onSubmit={(event) => handleSubmit(event, formData)}>
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
      </Box> );
}
 
export default Form;