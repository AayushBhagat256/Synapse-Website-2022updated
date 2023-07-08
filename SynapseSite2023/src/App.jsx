import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Core from './Pages/coreMembers/core'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
        </Routes>
        <Routes>
          <Route path='/core' element={<Core/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
