
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./Menu.css".;
import Home from './Home';
import Contact from './Contact';
import About from './About';


function NotFound(){
  return <h2>Page Not Found</h2>;
}

function App(){
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>

        <hr/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/*" element={<NotFound />}/>

      </Routes>
      </div>
    </Router>
    
  );
}
export default App;

