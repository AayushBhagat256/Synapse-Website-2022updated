import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Core from './Pages/coreMembers/core'
import Excore from './Pages/exCoreMembers/Excore'
import Faculty from './Pages/facultyMembers/Faculty'
import Contact from './Pages/contactForm/Contact'

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
        <Routes>
          <Route path='/excore' element={<Excore/>}/>
        </Routes>
        <Routes>
          <Route path='/fac' element={<Faculty/>}/>
        </Routes>
        <Routes>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App