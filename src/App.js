
import './App.css';
import Contact from './components/Contact';
import Faculty from './components/Faculty';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Core from './components/Core';
import Aboutus from './components/Aboutus';
import Excore from './components/Excore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
//import Upcoming from './components/Upcoming';

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/contactus' element={<Contact />} />
          </Routes>
          <div className='fragmentss'>

            <div className="Aboutus">
              {/* <Navbar /> */}
              <Routes>
            <Route path='/' element={<Aboutus />} />
          </Routes>

              
            </div>

            <div className="facultyy">
            <Routes>
            <Route path='/' element={<Faculty />} />
          </Routes>
              
            </div>
            <div className="excoree">
              <Routes>
            <Route path='/' element={<Excore />} />
          </Routes>
              
            </div>
            <div className="coree">
            <Routes>
            <Route path='/' element={<Core />} />
          </Routes>
              
            </div>
            
            <div className="footer">
            <Footer />
            </div>
          </div>

        </div>


        

      </>
    </Router>
  )
}

export default App
