import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null);
  console.log("App: ", token);
  return (
    <>
      <SignUpForm setToken={setToken}/>
      <Authenticate token={token}/>
    </>
  )
}

export default App
