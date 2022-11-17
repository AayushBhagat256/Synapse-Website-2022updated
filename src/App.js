
import './App.css';
import Contact from './components/Contact';
import Faculty from './components/Faculty';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Core from './components/Core';
import Aboutus from './components/Aboutus';
import Excore from './components/Excore';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Contact />
      </div>
      <div className="Aboutus">
        {/* <Navbar /> */}
        <Aboutus />
      </div>

      <div className="facultyy">
        <Faculty />
      </div>
      <div className="excoree">
        <Excore/>
      </div>
      <div className="coree">
        <Core />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}

export default App
