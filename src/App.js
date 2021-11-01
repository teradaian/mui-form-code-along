import './App.css';
import { useState } from 'react'

import Form from './Components/Form'
import Display from './Components/Display'

function App() {
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
    <div className="App">
      <Display display={display} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
