
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import Skills from '../../pages/Skills';


function AppRouter() {
  return (
    <Router>
      <Route exact path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
    </Router>
  );
}

export default AppRouter;