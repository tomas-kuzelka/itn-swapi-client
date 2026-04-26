// import './App.css'
import { People } from './swapi/People';
import { Home } from './swapi/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Person } from './swapi/Person';

function App() {

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">SWAPI</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/people">People</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path='/people/:id' element={<Person />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
