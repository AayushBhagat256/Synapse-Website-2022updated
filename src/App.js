
import './App.css';
import Contact from './components/Contact';
import Faculty from './components/Faculty';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <div className="App">

      <Navbar />
      <Contact />

    </div>
    <div className="facultyy">
    <Faculty/>
    </div>
    
    </>
  )
}

export default App
