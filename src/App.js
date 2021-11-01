import './App.css';
import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState({
    firstName: 'random',
    lastName: 'name',
    email: 'randomname@gmail.com',
    location: 'seattle'
  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
