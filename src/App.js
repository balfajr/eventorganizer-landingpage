import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Works from './pages/Works.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



// FONT
import '@fontsource/prompt/100.css'; // Thin
import '@fontsource/prompt/400.css'; // Regular
import '@fontsource/prompt/700.css'; // Bold

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
