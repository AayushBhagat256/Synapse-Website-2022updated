import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Core from './Pages/coreMembers/Core'
import Excore from './Pages/exCoreMembers/Excore'
import Faculty from './Pages/facultyMembers/Faculty'
import Contact from './Pages/contactForm/Contact'
import Loader from './Components/Loader/Loader'
import Nav from './Components/Navigation/Nav'
import UpcomingEventcard from './Components/UpcomingEventcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<>
            <Nav/>
            <UpcomingEventcard/>
          </>}/>
        </Routes>
        <Routes>
          <Route path='/nav' element={<Nav/>}/>
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
        <Routes>
          <Route path='/load' element={<Loader/>}/>
        </Routes>
      </Router>
      {/* <UpcomingEventcard/> */}
    </>
  )
}

export default App
