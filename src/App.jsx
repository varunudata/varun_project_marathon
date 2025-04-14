import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-div'>
      <div className='inside-div'>
        <h1 className='login'>Login</h1>
        <input type="text" placeholder="Email" className='username' />
        <input type="password" placeholder="password" className='password' />
        <button className='signin'>Signin</button>
      </div>
    </div>
  )
}

export default App
