import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Formation from "../../pages/Formation";
import Contact from "../../pages/Contact";
import About from "../../pages/About";


function AppRouter() {
  return (
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
