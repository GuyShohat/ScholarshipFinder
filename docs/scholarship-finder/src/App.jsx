import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import './style/Global.css';

function App() {
  return (
    <Router>
      <div className="page">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



